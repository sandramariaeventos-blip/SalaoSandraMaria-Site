/* ============================================================
   Sandra Maria Eventos — components.js
   Injetado em todas as páginas. Navbar, footer e comportamentos
   compartilhados. Tudo que muda entre sites vive em SITE.
   ============================================================ */

const SITE = {
  name: 'Sandra Maria Eventos',
  legalName: '',
  tagline: 'Salão de festas e eventos em Carapicuíba, para até 150 convidados.',
  logoText: { strong: 'Sandra Maria', light: 'Eventos' },
  logoSrc: '/images/brand/logo.svg',

  cta: { label: 'Consultar data', href: '/contato' },
  ctaMobile: 'Consultar data disponível',
  /* Palavras que, num link ou botão, indicam clique de conversão. minúsculas. */
  ctaKeywords: ['consultar data', 'reservar', 'orçamento', 'whatsapp', 'visita', 'agendar'],

  whatsapp: { number: '5511959237827', message: 'Olá! Vim pelo site e quero consultar uma data no Salão Sandra Maria.' },
  phone: '(11) 95923-7827',
  email: 'sandramariaeventos@gmail.com',
  address: 'Avenida Sandra Maria, 28 - Jardim das Belezas, Carapicuíba/SP',
  linkedin: '',
  cnpj: '',

  /* Menu principal. type: 'link' | 'dropdown'. `pillar: true` destaca o item. */
  nav: [
    { type: 'link', href: '/', label: 'Início' },
    { type: 'link', href: '/espaco', label: 'O Espaço' },
    { type: 'dropdown', href: '/eventos', label: 'Eventos', pillar: true, children: [
      { href: '/eventos/casamento', label: 'Casamento' },
      { href: '/eventos/aniversario-15-anos', label: 'Aniversário e 15 anos' },
      { href: '/eventos/corporativo', label: 'Corporativo' },
      { href: '/eventos/batizado-cha-de-bebe', label: 'Batizado e chá de bebê' },
    ]},
    { type: 'link', href: '/precos', label: 'Preços' },
    { type: 'link', href: '/contato', label: 'Contato' },
  ],

  /* Colunas do rodapé: [{ title, links: [{href,label}] }] */
  footerColumns: [
    { title: 'Eventos', links: [
      { href: '/eventos/casamento', label: 'Casamento' },
      { href: '/eventos/aniversario-15-anos', label: 'Aniversário e 15 anos' },
      { href: '/eventos/corporativo', label: 'Corporativo' },
      { href: '/eventos/batizado-cha-de-bebe', label: 'Batizado e chá de bebê' },
    ]},
    { title: 'O salão', links: [
      { href: '/espaco', label: 'O espaço' },
      { href: '/precos', label: 'O que muda o preço' },
      { href: '/contato', label: 'Consultar data' },
      { href: '/privacidade', label: 'Política de Privacidade' },
    ]},
  ],

  /* Faixa de logos/selos rolando. Lista de strings; [] esconde a faixa.
     Vazia de propósito: texto em loop automático é ruído, e esses mesmos itens
     já aparecem na seção do que está incluído na locação. */
  trustBar: [],

  analytics: { gtmId: '', clarityId: '' },
  locale: 'pt-BR',
};

const waUrl = (msg) =>
  `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(msg || SITE.whatsapp.message)}`;

const ICON = {
  chevron: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline;vertical-align:middle;margin-left:2px"><polyline points="6 9 12 15 18 9"/></svg>',
  phone: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  pin: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  linkedin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  whatsapp: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>',
};

function logoMarkup(extraStyle) {
  return `
    <a href="/" class="navbar__logo" aria-label="${SITE.name}, página inicial"${extraStyle ? ` style="${extraStyle}"` : ''}>
      <span class="navbar__logo-text"><strong>${SITE.logoText.strong}</strong> <span>${SITE.logoText.light}</span></span>
    </a>`;
}

/* ── Navbar ── */
function injectNav(activePath) {
  const isActive = (item) => {
    const paths = [item.href, ...(item.matches || [])];
    return paths.includes(activePath) ? ' active' : '';
  };

  const desktopItems = SITE.nav.map(item => {
    const pillar = item.pillar ? ' navbar__link--pillar' : '';
    if (item.type === 'dropdown') {
      const children = item.children.map(c =>
        `<a href="${c.href}" class="navbar__dropdown-item">${c.label}</a>`
      ).join('');
      return `
        <div class="navbar__dropdown">
          <a href="${item.href}" class="navbar__link${pillar}${isActive(item)}">${item.label}${ICON.chevron}</a>
          <div class="navbar__dropdown-menu">${children}</div>
        </div>`;
    }
    return `<a href="${item.href}" class="navbar__link${pillar}${isActive(item)}">${item.label}</a>`;
  }).join('');

  // Mobile: achata os dropdowns — não há hover no toque.
  const mobileItems = SITE.nav.flatMap(item =>
    item.type === 'dropdown' ? [item, ...item.children] : [item]
  ).map(l => `<a href="${l.href}" class="navbar__mobile-link">${l.label}</a>`).join('');

  const navHTML = `
    <a href="#conteudo" class="skip-link">Pular para o conteúdo</a>
    <nav class="navbar" id="navbar" role="navigation" aria-label="Navegação principal">
      <div class="navbar__inner">
        ${logoMarkup()}
        <div class="navbar__nav">${desktopItems}</div>
        <a href="${SITE.cta.href}" class="btn btn--primary btn--sm navbar__cta">${SITE.cta.label}</a>
        <button class="navbar__hamburger" id="hamburger" aria-label="Menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <div class="navbar__mobile-menu" id="mobileMenu" role="dialog" aria-label="Menu mobile">
      ${mobileItems}
      <a href="${SITE.cta.href}" class="btn btn--primary btn--lg navbar__mobile-cta">${SITE.ctaMobile}</a>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Alvo do skip-link, sem precisar editar o <main> de cada página.
  const mainEl = document.querySelector('main');
  if (mainEl && !mainEl.id) {
    mainEl.id = 'conteudo';
    mainEl.setAttribute('tabindex', '-1');
  }

  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ── Footer ── */
function injectFooter() {
  const columns = SITE.footerColumns.map(col => `
    <div>
      <p class="footer__col-title">${col.title}</p>
      <div class="footer__links">
        ${col.links.map(l => `<a href="${l.href}" class="footer__link">${l.label}</a>`).join('')}
      </div>
    </div>`).join('');

  const social = [
    SITE.linkedin && `<a href="${SITE.linkedin}" target="_blank" rel="noopener" class="footer__social-btn" aria-label="LinkedIn">${ICON.linkedin}</a>`,
    SITE.whatsapp.number && `<a href="${waUrl()}" target="_blank" rel="noopener" class="footer__social-btn" aria-label="WhatsApp">${ICON.whatsapp}</a>`,
  ].filter(Boolean).join('');

  const contactItems = [
    SITE.phone && `<div class="footer__contact-item">${ICON.phone}<span>${SITE.phone}</span></div>`,
    SITE.email && `<div class="footer__contact-item">${ICON.mail}<span>${SITE.email}</span></div>`,
    SITE.address && `<div class="footer__contact-item">${ICON.pin}<span>${SITE.address}</span></div>`,
  ].filter(Boolean).join('');

  const footerHTML = `
    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="footer__grid">
          <div>
            ${logoMarkup('text-decoration:none; display:inline-flex; align-items:center; gap:10px;')}
            <p class="footer__brand-tagline">${SITE.tagline}</p>
            <div class="footer__social">${social}</div>
          </div>
          ${columns}
          <div>
            <p class="footer__col-title">Contato</p>
            ${contactItems}
            <a href="${SITE.cta.href}" class="btn btn--cyan btn--sm" style="margin-top:16px;">${SITE.cta.label}</a>
          </div>
        </div>

        <div class="footer__bottom">
          <p class="footer__copy">© ${new Date().getFullYear()} ${SITE.name}. Todos os direitos reservados. Site desenvolvido por <a href="https://www.vireoncloud.com.br/presenca-digital-inteligente" target="_blank" rel="noopener" style="color:inherit;">Vireon Cloud</a>.</p>
          <p class="footer__cnpj">${SITE.cnpj ? `CNPJ ${SITE.cnpj} · ` : ''}<a href="/privacidade" style="color:inherit; text-decoration:none;">Política de Privacidade</a></p>
        </div>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);

  if (SITE.whatsapp.number) {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="whatsapp-fab">
        <a href="${waUrl()}" target="_blank" rel="noopener" class="whatsapp-float" aria-label="Falar no WhatsApp">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">${ICON.whatsapp.replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg>
        </a>
      </div>`);
  }
}

/* ── Cookie Banner ── */
function initCookieBanner() {
  if (localStorage.getItem('site_cookie_ok')) return;

  const bannerHTML = `
    <div class="cookie-banner" id="cookieBanner" role="dialog" aria-label="Aviso de cookies">
      <p>
        Utilizamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa
        <a href="/privacidade">Política de Privacidade</a>.
      </p>
      <div class="cookie-banner__actions">
        <button class="btn btn--cyan btn--sm" id="cookieAccept">Aceitar</button>
        <a href="/privacidade" class="btn btn--ghost btn--sm">Saiba mais</a>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', bannerHTML);

  document.getElementById('cookieAccept').addEventListener('click', () => {
    localStorage.setItem('site_cookie_ok', '1');
    document.getElementById('cookieBanner').classList.add('hidden');
  });
}

/* ── Scroll Reveal ── */
function initScrollReveal() {
  const els = document.querySelectorAll('.sr-up, .sr-stagger');
  const vh = window.innerHeight;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('sr-hidden');
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  // Todas as leituras de layout antes de qualquer escrita: intercalar causa reflow forçado por elemento.
  const tops = [...els].map(el => el.getBoundingClientRect().top);

  els.forEach((el, i) => {
    // Above-the-fold elements render immediately (LCP-safe); only below-fold animate on scroll.
    if (tops[i] < vh * 0.9) {
      el.classList.add('visible');
    } else {
      el.classList.add('sr-hidden');
      io.observe(el);
    }
  });
}

/* ── Counter Animation ── */
function initCounters() {
  const counters = document.querySelectorAll('.metric__value[data-count]');
  if (!counters.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const duration = 1800;
      const start = performance.now();
      const startVal = target > 2000 ? target - 60 : 0;

      const tick = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(startVal + (target - startVal) * ease);
        el.textContent = prefix + current.toLocaleString(SITE.locale) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => io.observe(el));
}

/* ── FAQ Accordion ── */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ── Testimonial Carousel ── */
function initCarousel() {
  const track = document.querySelector('.testimonial-track');
  const dots = document.querySelectorAll('.testimonial-dot');
  if (!track || !dots.length) return;

  let current = 0;
  let autoTimer;

  const goTo = (idx) => {
    current = idx;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  };

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { clearInterval(autoTimer); goTo(i); startAuto(); });
  });

  const startAuto = () => {
    autoTimer = setInterval(() => goTo((current + 1) % dots.length), 5000);
  };

  // Touch swipe
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 50) {
      clearInterval(autoTimer);
      goTo(dx > 0 ? Math.min(current + 1, dots.length - 1) : Math.max(current - 1, 0));
      startAuto();
    }
  });

  startAuto();
}

/* ── Typing Animation ── */
function initTypingAnimation(elementId, phrases) {
  const el = document.getElementById(elementId);
  if (!el) return;

  let phraseIdx = 0, charIdx = 0, deleting = false;

  const tick = () => {
    const phrase = phrases[phraseIdx];
    if (!deleting) {
      el.textContent = phrase.slice(0, ++charIdx);
      if (charIdx === phrase.length) {
        deleting = true;
        setTimeout(tick, 2400);
        return;
      }
    } else {
      el.textContent = phrase.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 42 : 72);
  };

  tick();
}

/* ── Hero 3D Tilt ── */
function initHeroTilt() {
  const wrap = document.getElementById('heroCard');
  const card = wrap && wrap.querySelector('.hero-card');
  if (!card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  wrap.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = wrap.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    card.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 10}deg) scale(1.02)`;
  });

  wrap.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0) rotateX(0) scale(1)';
  });
}

/* ── Trust Bar — duplicate for infinite scroll ── */
function initTrustBar() {
  const inner = document.querySelector('.trust-bar__inner');
  if (!inner) return;

  const track = document.createElement('div');
  track.className = 'trust-bar__track';
  track.setAttribute('role', 'list');
  track.setAttribute('aria-label', 'Nossos parceiros');

  const items = SITE.trustBar;
  // Sem itens, a faixa vazia deixava uma tira branca de 74px na página.
  if (!items.length) { inner.closest('.trust-bar').remove(); return; }

  // Double for seamless loop
  const allItems = [...items, ...items];
  allItems.forEach((label, i) => {
    const span = document.createElement('span');
    span.className = 'trust-bar__item';
    span.setAttribute('role', 'listitem');
    span.textContent = label;
    // 2ª cópia só existe pro loop visual — leitor de tela leria a lista duas vezes.
    if (i >= items.length) span.setAttribute('aria-hidden', 'true');
    track.appendChild(span);

    if (i < allItems.length - 1) {
      const sep = document.createElement('span');
      sep.className = 'trust-bar__sep';
      sep.textContent = '⬡';
      sep.setAttribute('aria-hidden', 'true');
      track.appendChild(sep);
    }
  });

  inner.appendChild(track);
}

/* ── Smooth anchor scroll ── */
function initAnchorScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ── Form Submission (Formspree placeholder) ── */
function initContactForm(formId, successId) {
  const form = document.getElementById(formId);
  const success = document.getElementById(successId);
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.textContent = 'Enviando...';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.style.display = 'none';
        if (success) success.style.display = 'block';
        if (typeof trackEvent === 'function') {
          const origem = form.querySelector('[name="origem"]')?.value || formId;
          // Conversão real (lead qualificado) — só dispara no sucesso do envio.
          trackEvent('generate_lead', { form_id: formId, origem, page: location.pathname });
          trackEvent('form_submit', { form_id: formId, page: location.pathname });
        }
      } else {
        throw new Error('Erro no envio');
      }
    } catch {
      btn.disabled = false;
      btn.innerHTML = originalText;
      // Envio falhou: não perder o lead — abre o canal direto como plano B.
      if (SITE.whatsapp.number) {
        window.open(waUrl('Olá, tentei enviar o formulário pelo site e gostaria de falar com alguém.'), '_blank');
      }
    }
  });
}

/* ── Init all (shared) ── */
/* ── Google Tag Manager (carregamento adiado p/ performance) ── */
function initGTM() {
  const GTM_ID = SITE.analytics.gtmId;

  // dataLayer disponível desde já: eventos empilham e o GTM processa ao subir.
  window.dataLayer = window.dataLayer || [];
  if (!GTM_ID) return;

  // Noscript body fallback (não custa main-thread)
  const ns = document.createElement('noscript');
  ns.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
  document.body.insertBefore(ns, document.body.firstChild);

  let loaded = false;
  function loadGTM() {
    if (loaded) return;
    loaded = true;
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    const j = document.createElement('script');
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
    document.head.appendChild(j);
    loadClarity();
    // Remove listeners de interação
    ['scroll', 'mousemove', 'touchstart', 'keydown', 'click'].forEach((ev) =>
      window.removeEventListener(ev, loadGTM, { passive: true })
    );
  }

  // Dispara na 1ª interação (sinal de sessão real) OU no idle OU timeout de segurança.
  ['scroll', 'mousemove', 'touchstart', 'keydown', 'click'].forEach((ev) =>
    window.addEventListener(ev, loadGTM, { passive: true, once: false })
  );
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadGTM, { timeout: 4000 });
  } else {
    setTimeout(loadGTM, 3500);
  }
}

/* ── Microsoft Clarity (mapas de calor + gravação de sessão) ── */
/* Carregado junto com o GTM (após 1ª interação / idle / timeout) para não
   pesar no LCP. Se o Project ID estiver vazio, não carrega nada. */
const CLARITY_ID = SITE.analytics.clarityId;
let clarityLoaded = false;
function loadClarity() {
  if (clarityLoaded || !CLARITY_ID) return;
  clarityLoaded = true;
  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1;
    t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', CLARITY_ID);
}

/* ── Push eventos de conversão para dataLayer ── */
/* Eventos de sucesso de formulário que representam um lead qualificado.
   Cada página histórica dispara um nome próprio (*_form_submit / etc.); aqui
   normalizamos tudo para UM evento canônico `generate_lead` — assim há uma
   única conversão para configurar no GTM/GA4/Ads, sem editar 13 páginas. */
const LEAD_SUCCESS_EVENTS = new Set([]);
function isLeadSuccessEvent(event) {
  return event.endsWith('_form_submit') || LEAD_SUCCESS_EVENTS.has(event);
}

function trackEvent(event, params = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });

  // Deriva a conversão canônica a partir de qualquer sucesso de formulário.
  if (isLeadSuccessEvent(event)) {
    const origem = params.origem || params.form_id || event.replace(/_form_submit$/, '');
    window.dataLayer.push({ event: 'generate_lead', origem, page: params.page || location.pathname });
    if (typeof window.clarity === 'function') window.clarity('set', 'lead', origem);
  }

  // Espelha micro-conversões no Clarity como tags de sessão (filtro nas gravações)
  if (typeof window.clarity === 'function') {
    if (event === 'generate_lead') {
      window.clarity('set', 'lead', params.origem || params.form_id || '1');
    } else if (event === 'whatsapp_click' || event === 'bookings_click') {
      window.clarity('set', event, '1');
    }
  }
}

/* ── Rastrear cliques automáticos de conversão ── */
function initConversionTracking() {
  document.addEventListener('click', (e) => {
    const el = e.target.closest('a, button');
    if (!el) return;

    const href = el.getAttribute('href') || '';
    const text = el.textContent.trim().slice(0, 60);

    if (href.includes('wa.me')) {
      trackEvent('whatsapp_click', { link_text: text, page: location.pathname });
    }
    if (href.includes(SITE.cta.href)) {
      trackEvent('cta_click', { link_text: text, page: location.pathname });
    }
    const lower = text.toLowerCase();
    if (SITE.ctaKeywords.some(k => lower.includes(k))) {
      trackEvent('cta_keyword_click', { link_text: text, page: location.pathname });
    }
    if (href.includes('linkedin.com')) {
      trackEvent('linkedin_click', { page: location.pathname });
    }
  });

  // Rastrear profundidade de scroll (25 / 50 / 75 / 100%)
  const scrollMilestones = new Set();
  window.addEventListener('scroll', () => {
    const pct = Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );
    [25, 50, 75, 100].forEach(m => {
      if (pct >= m && !scrollMilestones.has(m)) {
        scrollMilestones.add(m);
        trackEvent('scroll_depth', { percent: m, page: location.pathname });
      }
    });
  }, { passive: true });
}

function initShared(activePath) {
  initGTM();
  injectNav(activePath);
  injectFooter();
  initTrustBar();
  initScrollReveal();
  initCookieBanner();
  initAnchorScroll();
  initConversionTracking();
}
