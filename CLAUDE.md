# CLAUDE.md — Sandra Maria Eventos (sandramariaeventos.com.br)

Regras permanentes deste repositório. Leia antes de qualquer alteração. Em caso
de conflito com instruções pontuais, **estas regras vencem**, salvo autorização
explícita na sessão.

A fonte da verdade de marca, tom e contato é `brand.json` na raiz. Se algo aqui
divergir do `brand.json`, o `brand.json` está certo — corrija este arquivo.

---

## O que é este projeto

Site do Salão de Festas e Eventos Sandra Maria, em Carapicuíba/SP. O objetivo do site é um só: fazer quem procura espaço para festa consultar a data disponível pelo WhatsApp ou pelo formulário.

- **Segmento:** Locação de salão para festas e eventos empresariais
- **Público:** Quem organiza a festa: família (aniversário, 15 anos, casamento, batizado) e responsável por confraternização de empresa na região de Carapicuíba
- **Dor que resolvemos:** Achar um espaço com data livre, que caiba os convidados, tenha estacionamento e não exija montar tudo do zero
- **Resultado prometido:** Data confirmada num espaço pronto para receber até 150 convidados, com resposta rápida no WhatsApp

**Stack:** HTML/CSS/JS estático, sem framework e sem build. Deploy na Vercel.
Um `css/styles.css` e um `js/components.js` servem o site inteiro.

---

## Identidade visual

| Token CSS | Valor | Uso |
|---|---|---|
| `--ds-cyan` / `--ds-blue-bright` | `#7B1E3A` | Primária, CTA, links, ícones |
| `--ds-navy-light` | `#691931` | Hover, gradientes |
| `--ds-navy` / `--ds-dark-bg` | `#441020` | Fundos escuros: hero de capa, CTA banner, footer |
| `--ds-accent-cyan` | `#E8A6B8` | Acento sobre fundo escuro |
| `--ds-bg` / `--ds-bg-alt` | `#FFFFFF` / `#FAF6F7` | Fundos de página e de seção |
| `--ds-text` / `--ds-text-muted` | `#1E1518` / `#5C5054` | Texto principal e secundário |

- Fontes: **Playfair Display** (display) e **Inter** (corpo).
- Páginas predominantemente claras. Escuro só em CTA banner e footer.
- **Nunca escreva cor literal no HTML.** Use as variáveis `--ds-*`. Se precisa de
  uma cor que não existe como token, o problema é o token, não o HTML.
- Não adicione classe CSS nova sem antes procurar uma equivalente em `styles.css`.

---

## Tom e copy

- Registro: próximo, simples e direto ao ponto (formalidade -1, tecnicidade -2, energia +1, diretividade +2)
- Pessoa: primeira pessoa do plural (nós)
- Vender **resultado**, nunca funcionalidade.
- Idioma: Português do Brasil.
- CTA padrão: "Consultar data". Microcopy: "Respondemos no WhatsApp no mesmo dia.".
- **Proibido escrever:** nenhum termo proibido definido até agora
- Sem promessa irreal, sem clickbait, sem urgência fabricada. Urgência só quando
  há prazo real e verificável.

---

## Regras duras de conteúdo

1. Não citar nome de cliente sem autorização registrada. Sem autorização, use
   "[cliente do setor X]".
2. Nenhum número (economia, prazo, volume) entra no site sem origem verificável.
3. Todo formulário: link para a Política de Privacidade e finalidade clara do
   dado coletado.
4. Não commitar segredo, chave de API ou dado de cliente.
5. Nada de foto de banco de imagens fingindo ser o salão. Só foto real do espaço.
6. Nenhum depoimento no site sem autorização por escrito de quem falou.

---

## Padrões de SEO

- Toda página: title único (≤ 60 chars), meta description (≤ 155 chars), H1 único
  com a keyword alvo, canonical absoluta, Open Graph e Twitter Card.
- JSON-LD: `Organization` em todas; `Service` nas páginas de serviço; `FAQPage`
  onde houver FAQ visível — e o JSON-LD tem que bater com o texto da página.
- Interlinking: artigo do blog aponta para a página de serviço correspondente,
  com anchor text da keyword.
- Performance: Lighthouse mobile ≥ 90 em Performance e SEO. LCP < 2,5s.
  Imagem otimizada, fonte com `display: swap`.
- Rota nova entra no `sitemap.xml` e, se relevante para IA, no `llms.txt`.

---

## Padrões de CRO

- **1 CTA primário por página**, acima da dobra, ancorando no formulário da
  própria página — não em uma página de contato genérica.
- Formulário: no máximo 4 campos. Botão com verbo + benefício, nunca "Enviar".
- Landing de material rico entrega o material **na hora**, sem intervenção humana.
- Prova social perto do formulário.

---

## Convenções de desenvolvimento

- Commits: Conventional Commits (`feat`, `fix`, `chore`, `content`).
- Deploy: Vercel — preview no PR, produção na `main`. Validar o preview antes do merge.
- Não introduzir framework ou dependência sem necessidade clara. O site é estático
  de propósito.
- Antes de alterar layout global, verificar o impacto em todas as rotas.
- Antes de commitar: `node scripts/check-site.mjs`. Se falhar, corrigir — não ignorar.
