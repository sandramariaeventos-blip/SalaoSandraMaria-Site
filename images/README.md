# Imagens pendentes

O HTML já referencia os arquivos abaixo. Enquanto eles não existirem, o navegador
apenas ignora (favicon) ou o compartilhamento fica sem miniatura (og-image).

## Obrigatórios antes de publicar

| Arquivo | Tamanho | Usado em |
|---|---|---|
| `favicon.ico` | 32×32 | todas as páginas |
| `favicon-16x16.png` | 16×16 | todas as páginas |
| `favicon-32x32.png` | 32×32 | todas as páginas |
| `favicon-192.png` | 192×192 | `site.webmanifest` |
| `favicon-512.png` | 512×512 | `site.webmanifest` |
| `apple-touch-icon.png` | 180×180 | iOS |
| `og-image.png` | 1200×630 | WhatsApp, Facebook, Twitter |
| `brand/favicon.svg` | vetor | navegador moderno |

Gerador rápido: https://realfavicongenerator.net (sobe uma imagem quadrada, baixa o pacote).

## Fotos do salão (já publicadas)

Convertidas para `.webp` (qualidade 80, largura máxima 1600px).

| Arquivo | Onde aparece |
|---|---|
| `salao-casamento-montado.webp` | hero da home, galeria de `/espaco`, `/eventos/aniversario-15-anos` |
| `salao-mesas-lustre.webp` | galeria de `/espaco`, `/eventos/corporativo` |
| `salao-passarela-cerimonia.webp` | galeria de `/espaco`, `/eventos/casamento` |
| `mesa-decoracao.webp` | galeria de `/espaco`, `/eventos/batizado-cha-de-bebe` |
| `cozinha-apoio.webp` | galeria de `/espaco` |
| `bar-balcao.webp` | galeria de `/espaco` |

Atenção: `salao-mesas-lustre.webp` e `bar-balcao.webp` vieram com marca d'água
"casamentos.com.br". Trocar por versões sem marca quando houver o original.

Faltando na cobertura: fachada e estacionamento.

## Opcionais

- `brand/logo.svg` — quando existir, reativar o `<img class="navbar__logo-mark">` em `js/components.js`
  (hoje o logotipo é só texto).
