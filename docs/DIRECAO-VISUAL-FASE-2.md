# Direção Visual - Fase 2
**Projeto:** Priscila Bertolaccini 
**Status:** ✅ Aprovada (2026-09-20) · Hero B · mobile `top: 69%` · traço curto 
**Preview local:** `docs/fase-2/preview-hero.html` (abrir no navegador) 
**Fonte de verdade de produto:** `BRIEF-REDESIGN-PRISCILA.md`

---

## 1. Conceito visual (1 frase)

**Quiet luxury de salão** - luz natural, neutros quentes do Les Amis, tipografia editorial, prova fotográfica real. Sem cara de Linktree, sem template de beleza genérico.

### Mood (referências de clima - não copiar layout)
- Editorial de beauty / campanhas Kérastase (calma, brilho, negativo)
- Interiores Les Amis: creme, madeira clara, sheer, ouro suave nos espelhos
- Retratos dela (blazer bege + estúdio preto) = dois polos: calor humano × autoridade técnica

### O que explicitamente evitamos
- Roxo/indigo gradient “IA”
- Cream + serif + terracota clichê
- Dark mode com glow
- Pills demais, cards no hero, badges flutuantes
- Inter / Roboto / Arial como display

---

## 2. Tokens (CSS variables propostas)

```css
:root {
 /* Superfície */
 --color-bg: #F7F3EE; /* creme salão */
 --color-bg-elevated: #FFFCF8;
 --color-bg-dark: #1C1A18; /* só blocos de contraste / footer */

 /* Texto */
 --color-text: #1C1A18;
 --color-text-muted: #6B6560;
 --color-text-on-dark: #F7F3EE;

 /* Marca / acento (discreto) */
 --color-accent: #8A7355; /* champagne / bronze do madeira+ouro */
 --color-accent-soft: #C4B09A;
 --color-line: rgba(28, 26, 24, 0.12);

 /* CTA */
 --color-cta: #1C1A18;
 --color-cta-text: #F7F3EE;
 --color-cta-hover: #3A3530;

 /* Tipografia */
 --font-display: "Cormorant Garamond", "Playfair Display", Georgia, serif;
 --font-body: "Manrope", "DM Sans", system-ui, sans-serif;

 /* Escala tipo (mobile → desktop) */
 --text-hero: clamp(2.4rem, 6vw, 4.25rem);
 --text-h2: clamp(1.75rem, 3.5vw, 2.5rem);
 --text-body: clamp(1rem, 1.2vw, 1.125rem);
 --text-small: 0.875rem;

 /* Espaço */
 --space-1: 0.5rem;
 --space-2: 1rem;
 --space-3: 1.5rem;
 --space-4: 2.5rem;
 --space-5: 4rem;
 --space-6: 7rem;
 --page-pad: clamp(1.25rem, 4vw, 3.5rem);
 --max-width: 72rem;

 /* Forma */
 --radius-none: 0;
 --radius-sm: 2px; /* quase sem radius - premium */
 --shadow-soft: 0 20px 50px rgba(28, 26, 24, 0.08);

 /* Motion */
 --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
 --dur-1: 400ms;
 --dur-2: 800ms;
}
```

### Tipografia - papéis
| Papel | Fonte | Uso |
|-------|--------|-----|
| Display | Cormorant Garamond (400/500 italic/600) | Nome, H1, títulos de seção |
| Body | Manrope (400/500/600) | Texto, nav, CTA |

---

## 3. Hero definitivo (aprovado)

**Layout do texto no hero:** alinhado à **esquerda**. Desktop: ancorado na base. Mobile: bloco absoluto com `top: 69%` (nome logo abaixo do peito na Hero B). Traço curto (`2rem` / `2.5rem`) sob o nome, à esquerda.

| Elemento | Conteúdo |
|----------|----------|
| Visual | `IMG_0708` · backup `0706`/`0707` |
| Título (marca) | **Priscila Bertolaccini** |
| Texto de apoio | **O cabelo certo revela a sua melhor versão: mais luminosa, mais confiante, inconfundivelmente você. Do espelho ao olhar de quem te encontra.** |
| CTA primário | **Agendar horário** → WhatsApp |
| CTA secundário | Ver trabalhos |
| Motion | Fade-up do texto · Ken Burns sutil na foto |

### Por que essa copy
- Mantém o eixo: **melhor versão da cliente**.
- Mais longa para equilibrar visualmente o nome grande + CTAs.
- Glamour leve (luminosa, confiante, espelho) sem slogan engessado.

### Variação alternativa
*Mais do que um novo visual: o cabelo que revela a sua melhor versão, com brilho, movimento e a elegância de quem se sente completa.*

### SEO (não compete com o visual)
- `<title>` e meta description continuam com Mega Hair / Mechas / Campinas.
- H1 visual = nome. Keywords nas seções seguintes e titles de página.

### WhatsApp
- Home / global: `Olá Priscila, vim pelo site e quero agendar um horário no Les Amis.`
- Mega / Mechas / Henna: pode manter “avaliação de [serviço]” na mensagem daquela página.

### O que NÃO vai no hero
Segundo título longo, endereço, lista de serviços, stats, badges, cards, nome de cliente.

---

## 4. Sistema de seções (ritmo)

1. **Hero** - foto full-bleed, texto editorial 
2. **Especialidades** - 4 linhas tipográficas + link (sem card) 
3. **Resultados** - grid assimétrico (2/3 + 1/3), fotos edge-to-edge 
4. **Experiência** - `1274`/`1275` + texto de avaliação 
5. **Sobre** - retrato + Kérastase (1 imagem) 
6. **Salão** - fachada + CTA Maps 
7. **Footer** - mínimo + WhatsApp 

Prova `1269`/`1270`: entra no grid de **Resultados** (sem legenda de nome).

---

## 5. Motions (só 3, intencionais)

1. Hero: texto sobe com fade 
2. Resultados: imagens revelam no scroll (opacity + 12px Y) 
3. CTA: hover com transição de fundo (sem bounce)

Sem parallax agressivo, sem confetes, sem Lottie decorativo.

---

## 6. Critérios de aprovação da Fase 2

- [x] Hero B na Home (`IMG_0708`)
- [x] Tipografia ok (Cormorant + Manrope)
- [x] Tokens de cor definidos
- [x] Hierarquia: nome como título · texto de apoio · CTA **Agendar horário**
- [x] Mobile: posição `top: 69%` aprovada
- [x] Traço curto sob o nome (não full-width)

**Próximo → Fase 3:** build na branch `redesign`.

---

## 7. Relação com o brief

Qualquer mudança de copy/estrutura → atualizar `BRIEF-REDESIGN-PRISCILA.md`. 
Este arquivo manda em **visual**. O brief manda em **produto**.
