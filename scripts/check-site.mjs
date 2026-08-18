#!/usr/bin/env node
/* Verificação do site estático. Sem dependências.
   Rodar da raiz do site: node scripts/check-site.mjs
   Sai com código 1 se algo quebrou — serve como gate antes do commit/deploy. */

import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, relative, posix } from 'node:path';

const ROOT = process.cwd();
const SKIP_DIRS = new Set(['node_modules', '.git', '.vercel', 'downloads']);
const MAX_TITLE = 60;
const MAX_DESC = 155;

const problems = [];
const fail = (file, msg) => problems.push(`${file}: ${msg}`);

function htmlFiles(dir = ROOT) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') && entry.name !== '.well-known') continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) out.push(...htmlFiles(full));
    } else if (entry.name.endsWith('.html')) {
      out.push(full);
    }
  }
  return out;
}

const attr = (tag, name) =>
  (tag.match(new RegExp(`${name}\\s*=\\s*["']([^"']*)["']`, 'i')) || [])[1];

/* Uma rota do site resolve se existir <rota>.html ou <rota>/index.html.
   Espelha o cleanUrls da Vercel — sem isso, todo link interno acusaria falso positivo. */
function routeExists(route) {
  const clean = route.split('#')[0].split('?')[0].replace(/\/$/, '') || '/';
  if (clean === '/') return existsSync(join(ROOT, 'index.html'));
  const base = join(ROOT, clean.replace(/^\//, ''));
  if (existsSync(base + '.html')) return true;
  if (existsSync(join(base, 'index.html'))) return true;
  // Ativo estático (pdf, imagem, etc.)
  return existsSync(base) && statSync(base).isFile();
}

for (const file of htmlFiles()) {
  const rel = relative(ROOT, file).split('\\').join(posix.sep);
  const html = readFileSync(file, 'utf8');
  const is404 = rel === '404.html';

  if (/\{\{[A-Z0-9_]+\}\}/.test(html)) {
    const found = [...new Set(html.match(/\{\{[A-Z0-9_]+\}\}/g))].join(', ');
    fail(rel, `placeholder não substituído: ${found}`);
  }

  const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1]?.trim();
  if (!title) fail(rel, 'sem <title>');
  else if (title.length > MAX_TITLE) fail(rel, `title com ${title.length} chars (máx ${MAX_TITLE}): "${title}"`);

  const descTag = html.match(/<meta[^>]+name=["']description["'][^>]*>/i);
  const desc = descTag && attr(descTag[0], 'content');
  if (!desc) fail(rel, 'sem meta description');
  else if (desc.length > MAX_DESC) fail(rel, `meta description com ${desc.length} chars (máx ${MAX_DESC})`);

  if (!is404 && !/<link[^>]+rel=["']canonical["']/i.test(html)) {
    fail(rel, 'sem <link rel="canonical">');
  }

  const h1s = html.match(/<h1[\s>]/gi) || [];
  if (h1s.length !== 1) fail(rel, `${h1s.length} <h1> (esperado exatamente 1)`);

  for (const [, body] of html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(body); }
    catch (e) { fail(rel, `JSON-LD inválido: ${e.message}`); }
  }

  for (const [, tag] of html.matchAll(/<a\b([^>]*)>/gi)) {
    const href = attr(tag, 'href');
    if (!href || !href.startsWith('/') || href.startsWith('//')) continue;
    if (!routeExists(href)) fail(rel, `link interno quebrado: ${href}`);
  }
}

if (!existsSync(join(ROOT, 'sitemap.xml'))) problems.push('raiz: sitemap.xml ausente');
if (!existsSync(join(ROOT, 'robots.txt'))) problems.push('raiz: robots.txt ausente');

if (problems.length) {
  console.error(`\n${problems.length} problema(s):\n`);
  problems.forEach(p => console.error('  ✗ ' + p));
  process.exit(1);
}
console.log('check-site: tudo certo.');
