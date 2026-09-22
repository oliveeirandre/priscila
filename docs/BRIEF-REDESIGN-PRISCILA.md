# Brief de Redesign - Priscila Bertolaccini
**Nível:** Senior / Master · Site de autoridade high-ticket 
**Status:** Documento mestre (fonte da verdade) 
**Domínio atual:** https://pribertolaccini.com.br/ 
**Repo:** SITE_PRISCILA (GitHub Pages) 
**Última atualização:** 2026-09-22 

> Este arquivo é a referência única do projeto. 
> Decisões de produto, marca, conteúdo, assets e técnico vivem aqui. 
> O site atual (estilo Linktree) permanece no ar até o go-live.

### Ponto de restauração visual

| Item | Valor |
|------|--------|
| Tag Git | `backup/pre-fase-a-2026-09-22` |
| Commit visual base | `e12d0bf` |
| Uso | Voltar ao visual da Home/landing antes da Fase A |

**Depois do restore (2026-09-22):** reaplicamos só melhorias **sem mudar a cara da Home/landing**: CTA “Agendar horário”, vídeos na grade Mega/Cortes, WebP `1276`, FAQ schema invisível, NAP no schema da Home, eventos `click_maps` / `view_trabalhos`.

**FAQ schema (o que é):** dados JSON-LD no `<head>` para o Google entender perguntas e respostas. **Não aparece na tela.** Diferente de uma seção FAQ visível (que foi revertida de propósito).

**Brief “atualizado”:** só este arquivo de documentação (status, restore, o que foi reaplicado). Não muda o site.

---

## 1. Objetivo do projeto

Substituir o site tipo Linkfly/Linktree por um **site de marca de autor** que:

1. Atraia a **cliente certa** (público com condição de pagar salão high-ticket).
2. Mostre o trabalho dela de forma **impecável**.
3. Destaque serviços na ordem de prioridade real.
4. Maximize **agendamentos via WhatsApp** (avaliação onde o serviço exige).
5. Performe em **Instagram** (bio) e **Google** (busca local).
6. Posicione Priscila no nível das outras profissionais sênior do Les Amis - pela **especialização + prova**, não por anos de mercado.

### Não-objetivos (v1)
- Agenda online / e-commerce / blog genérico / área de aluna.
- Tabela de preços aberta.
- Manter estética de lista de links.

---

## 2. Contexto de negócio

| Item | Conteúdo |
|------|----------|
| Profissional | Priscila Bertolaccini |
| Tempo de mercado | ~2 anos (não usar como headline de prova) |
| Salão | Les Amis Campinas - alto padrão, Nova Campinas |
| Concorrência interna | 3 cabeleireiras renomadas (10+ anos) no mesmo salão |
| Aquisição | Instagram dela + Google (busca local) |
| Ticket | High ticket · avaliação presencial como porta de entrada |
| Diferencial | Especialização (Mega Hair em 1º) + resultado documentado + ambiente Les Amis + credencial Kérastase + prova social (Alexandra Richter) |

### Posicionamento (narrativa mestre)

> Especialista em **Mega Hair** e **Mechas** no Les Amis Nova Campinas - transformações sob medida, com padrão de salão de alto nível.

**Não competir em:** anos de carreira. 
**Competir em:** especialização, resultado, processo, ambiente, prova social.

---

## 3. Decisões travadas (Fase 0)

| Tema | Decisão |
|------|---------|
| Serviços (ordem) | 1 Mega Hair → 2 Mechas → 3 Henna (camuflagem de branco) → 4 Cortes |
| Morena Iluminada | **Dentro de Mechas** (subtipo / prova) |
| Penteado social | **Fora** do site novo |
| Progressiva / hidratação como oferta | **Fora** (salvo menção técnica futura) |
| CTA único | **Agendar horário** → WhatsApp (universal). “Avaliação” só no copy de Mega Hair / Mechas / Henna (processo). |
| Agenda online | **Não** |
| Preço | **Invisível** · “Investimento sob avaliação presencial” |
| Tracking | Manter GA + Meta Pixel nos CTAs (como hoje) |
| WhatsApp | Mesmo número do site atual: `https://wa.me/+5535998171030` |
| Staging | Branch `redesign` - domínio atual intocado até go-live |
| Tipografia no site | Sem traço longo (`:` / em dash) em **nenhum** texto do site. Usar ponto, vírgula ou dois-pontos. |
| Materiais extras | Trabalhar com o lote atual; henna/cortes com galeria menor se preciso |
| NOA (`IMG_1273`) | **Fora do lançamento** (logo NOA no avental = risco de confusão de marca) |
| Atriz / prova social | Fotos `1269` + `1270` **sim** no site. **Não citar o nome** (Alexandra Richter fica só no brief interno). `1272` não é esse atendimento. |

---

## 4. URLs e contatos oficiais

| Tipo | URL / dado |
|------|------------|
| Site | https://pribertolaccini.com.br/ |
| Instagram dela | https://www.instagram.com/prisbertolaccini/ |
| Instagram salão | https://www.instagram.com/lesamiscampinas/ |
| Google Maps - Les Amis | Place Les Amis Campinas (usar link limpo do Maps, não photosphere) |
| Google - ficha dela | Priscila Bertolaccini - Cabeleireira em Campinas |
| WhatsApp | `+55 35 99817-1030` → `wa.me/+5535998171030` |
| Bio IG (referência) | MEGA HAIR • MECHAS • HENNA • CORTE · Care Coach @kerastase_official · Campinas/SP · Agende aqui |

### Mensagem WhatsApp (padrão)

**Home / global**
```
Olá Priscila, vim pelo site e quero agendar um horário no Les Amis.
```

**Páginas Mega Hair / Mechas / Henna**
```
Olá Priscila, vim pelo site e quero agendar uma avaliação de [SERVIÇO] no Les Amis.
```

**Cortes**
```
Olá Priscila, vim pelo site e quero agendar um horário de corte no Les Amis.
```

---

## 5. Arquitetura do site (Sitemap)

| Página | URL | Job da página |
|--------|-----|----------------|
| Home | `/` | Desejo + prova + CTA |
| Serviços | `/servicos` | Hub dos 4 pilares (Mega → Mechas → Henna → Cortes) + mídia |
| Trabalhos | `/trabalhos` | Portfólio |
| Feedback | `/feedback` | Prova social (prints) |
| Sobre | `/sobre` | Confiança + método + Kérastase |
| Salão & Contato | `/salao-contato` | Les Amis + Maps + WhatsApp |

> **2026-09-22:** landings `/mega-hair`, `/mechas`, `/henna-camuflagem-de-branco`, `/cortes` foram **removidas**. Conteúdo e vídeos ficam em `/servicos/`. URLs antigas passam a 404.

### Navegação
`Priscila Bertolaccini` · Serviços · Trabalhos · Feedback · Sobre · Localização · **Agendar horário**

Mobile: CTA sticky **Agendar horário**.

### Regra da 1ª dobra (todas as páginas principais)
Só: **marca (nome)** · 1 frase de apoio · CTA · 1 visual dominante. 
Sem segundo título longo, cards, stats ou endereço na primeira viewport.

---

## 6. Assets - inventário e curadoria

**Pasta fonte:** `IMAGENS Q ELA ME MANDOU/` 
**Política:** A = lançamento · B = reserva · C = não usar (ou só com ajuste)

### 6.1 Curadoria A (entra no lançamento)

#### Marca / ela
| Arquivo | Uso |
|---------|-----|
| `IMG_1260` / `IMG_1262` | Hero / Sobre - ela em ação (blazer bege) |
| `IMG_0708` | Mega Hair - autoridade (wefts) |
| `IMG_6662` | Sobre - retrato editorial |
| `IMG_8383` | Sobre - Care Coach Kérastase (prêmio) |

#### Mega Hair
| Arquivo | Uso |
|---------|-----|
| `IMG_0768` | Antes/depois (ouro) |
| `IMG_1268.MOV` | Processo + resultado (melhor vídeo técnico) |
| `IMG_0706` / `IMG_0707` | Ela + weft + vitrine |
| `IMG_0696` / `IMG_0700` | Estúdio - produto premium |
| `IMG_0401.MP4` ou `IMG_0392.MP4` | Clip curto marca (comprimir, mudo) |

#### Mechas / Morena Iluminada
| Arquivo | Uso |
|---------|-----|
| `IMG_0361`, `IMG_0365` | Resultados salão |
| `IMG_1266`, `IMG_1267` | Resultados editoriais |
| `IMG_0874`, `IMG_1172` | Acabamento (mãos elevando cabelo) |

#### Cortes (lote reforçado)
| Arquivo | Uso |
|---------|-----|
| `IMG_1276` | Resultado bob / ondas (converter HEIF→WebP) |
| `IMG_1272.MOV` | Processo genérico: lavagem → corte → finalização (mudo) - **não** é Alexandra Richter |
| `IMG_1240` | Detalhe técnico (mãos + ferramenta) |

#### Experiência / Les Amis
| Arquivo | Uso |
|---------|-----|
| `IMG_6664` | Fachada Les Amis |
| `IMG_1274` | Interior wide |
| `IMG_1275` | Espera / avaliação |

#### Prova social - cliente destaque (fotos sem nome)
| Arquivo | Uso |
|---------|-----|
| `IMG_1269` | Priscila + cliente (prova social visual) |
| `IMG_1270` | Resultado / retrato da cliente |

> **Interno:** cliente = Alexandra Richter. 
> **No site:** **não citar o nome**. Usar só como prova visual (portfolio / “resultado”). 
> `IMG_1272.MOV` = outro atendimento - não associar a essas fotos.

#### Autoridade produto (1 bloco só)
| Arquivo | Uso |
|---------|-----|
| `IMG_7220` **ou** `IMG_9497` | Kérastase - não os dois juntos |

### 6.2 Curadoria B (reserva)
`1258`, `1259`, `1261`, `1263`, `1264`, `1243`, `0764`, vídeos longos da sessão weft (`0391`, `0394`, `0395`, `0398`, `0399`, `0436`), `7232.MOV`, pares redundantes de studio.

### 6.3 Curadoria C (fora / cuidado)
| Arquivo | Motivo |
|---------|--------|
| `IMG_1273.MOV` | Logo **NOA** dominante no avental - confusão de marca |
| Excesso de takes Kérastase | Site vende serviço, não prateleira |

### 6.4 Prova social - fotos sem nome (diretrizes)

**Objetivo:** elevar status pela imagem, sem claim de celebridade.

**Como usar (10/10):**
- Tratar `1269` / `1270` como **resultado de portfolio** (igual aos outros trabalhos).
- Preferir `1269` quando a narrativa é a profissional (ela aparece na foto).
- Sem legenda com nome. Sem bloco “famosas”. Sem menção pública à identidade.
- `1272` não entra nessa história.

**Não fazer:**
- Citar Alexandra Richter (ou qualquer nome) no site, alt text público chamativo, ou Open Graph.
- Headline “cabeleireira das famosas”.

**Pendência nome:** ~~citação~~ → **decidido: não citar**.

### 6.5 Processamento técnico de mídia (obrigatório)

| Tipo | Regra |
|------|--------|
| Fotos | WebP/AVIF · maior lado ~1600 - 2000px · compressão visual sem banding |
| Vídeos | H.264 · 1080p vertical · corte 8 - 15s quando possível · **sem áudio** · alvo &lt; 8 - 12 MB |
| HEIF (`1276`) | Converter para JPEG/WebP antes do build |
| Autoplay | `muted` · `playsinline` · `loop` quando for ambient |

---

## 7. Copy - outlines aprováveis

### 7.1 Home

**SEO**
- Title: `Priscila Bertolaccini | Mega Hair e Mechas em Campinas`
- Description: `Especialista em Mega Hair, mechas e camuflagem de branco no Les Amis Nova Campinas. Agende sua avaliação.`

**1ª dobra**
- Título / marca: **Priscila Bertolaccini** 
- Texto de apoio: **O cabelo certo revela a sua melhor versão: mais luminosa, mais confiante, inconfundivelmente você. Do espelho ao olhar de quem te encontra.**  
- CTA: **Agendar horário** · Ver trabalhos 
- Visual: Hero B (`0708`)

**Seções**
1. Especialidades - Mega Hair / Mechas / Henna / Cortes (1 linha cada) 
2. Resultados - grid A + link Trabalhos 
3. Prova social visual (`1269`/`1270`) - **sem nome** 
4. Avaliação / diagnóstico no Les Amis - processo (onde couber) + “investimento sob avaliação” nos serviços complexos 
5. Sobre (curto) + Kérastase 
6. Les Amis Nova Campinas - Maps 

### 7.2 Modelo de serviço (template) - Mechas

**SEO**
- Title: `Mechas e Morena Iluminada em Campinas | Priscila Bertolaccini`
- Description: `Mechas personalizadas e Morena Iluminada no Les Amis Nova Campinas. Agende sua avaliação.`

**Estrutura**
1. H1 + frase + CTA + visual full-bleed 
2. Para quem é 
3. Olhar técnico 
4. Como funciona (avaliação → diagnóstico → execução) + microcopy de investimento 
5. Galeria 
6. CTA final com WhatsApp pré-preenchido 

**H1 Mechas:** Mechas e Morena Iluminada em Campinas 
**Frase:** Luz e dimensão sob medida - do natural ao mais marcado - com acabamento de salão de alto padrão.

### 7.3 Direção das outras páginas de serviço

| Página | H1 | Ângulo |
|--------|----|--------|
| Mega Hair | Mega Hair em Campinas | Naturalidade, densidade, comprimento; `1268` + `0768` |
| Henna | Henna e camuflagem de branco em Campinas | Discrição, raiz natural; galeria curta + CTA forte |
| Cortes | Cortes em Campinas | Visagismo e movimento; `1276` + `1272` |

### 7.4 Microcopy de preço (todas as páginas de serviço)

> Cada projeto é único. O investimento é definido na avaliação presencial no Les Amis.

### 7.5 Sobre (direção)
- Quem é + Les Amis 
- Ordem de especialidade 
- Care Coach Kérastase 
- Método: avaliação → diagnóstico → execução sob medida 
- CTA 

---

## 8. Direção visual (guardrails)

Ver documento dedicado: **[`DIRECAO-VISUAL-FASE-2.md`](./DIRECAO-VISUAL-FASE-2.md)** 
Preview: **[`fase-2/preview-hero.html`](./fase-2/preview-hero.html)**

### Princípios
- Uma composição por viewport (especialmente a primeira). 
- Marca como sinal hero - não só no nav. 
- Tipografia: Cormorant Garamond + Manrope. 
- Fundo com atmosfera (foto/luz/textura) - não flat único. 
- Hero full-bleed com trabalho/ambiente real. 
- Cards só onde há interação. 
- 2 - 3 motions intencionais (não decorativos). 
- Mobile-first (tráfego Instagram).

### Evitar (vieses genéricos de IA)
- Roxo/indigo gradient genérico 
- Cream + serif + terracota clichê 
- Dark luxury com glow genérico 
- Pills demais, multi-shadow, emoji 

### Paleta / tokens
Definidos em `DIRECAO-VISUAL-FASE-2.md` (`#F7F3EE`, `#1C1A18`, `#8A7355`, …).

---

## 9. SEO & schema

- Canonical por página · `sitemap.xml` · `robots.txt` 
- Schema: `HairSalon` / `Person` + `OfferCatalog` (4 serviços) 
- FAQ schema nas páginas de serviço (objeções reais) 
- NAP consistente com Maps do Les Amis 
- Core Web Vitals: LCP otimizado (hero leve) 
- Keywords locais: Campinas / Nova Campinas por serviço 

---

## 10. Conversão & analytics

### Funil
Instagram/Google → página → prova → **Agendar horário** → WhatsApp → fechamento 
(Em Mega/Mechas/Henna o fluxo interno ainda passa por diagnóstico/avaliação.)

### Eventos mínimos
- `page_view` (por rota) 
- `cta_whatsapp` (com `service`, `page`) 
- `view_trabalhos` 
- `click_maps` 
- Origem quando possível (UTM do Instagram)

### Pixel / GA
Reaproveitar IDs atuais do `index.html` (GTAG `G-Q21BVTZ1GJ`, Pixel `1248965447324084`) salvo rotação futura.

---

## 11. Técnico & deploy

| Tema | Decisão |
|------|---------|
| Site atual | Intocado em `main` até go-live |
| Desenvolvimento | Branch `redesign` (+ preview) |
| Stack v1 | HTML estático multipágina + CSS/JS próprios (GitHub Pages) · performance/SEO primeiro · sem framework |
| Go-live | Cutover único do domínio + bio IG → Home nova |
| Pós-launch | 14 dias de monitoramento de CTAs WhatsApp |

---

## 12. Plano de fases

| Fase | Entrega | Status |
|------|---------|--------|
| 0 | Travas de negócio | ✅ Fechada |
| 0.5 | Curadoria de assets + prova social | ✅ Fotos sem citar nome |
| 1 | Sitemap + copy outlines | ✅ Neste documento |
| 2 | Moodboard + tokens + hero visual | ✅ Aprovada · Hero B · mobile 69% · traço curto |
| 3 | Build no staging (`redesign`) | 🔄 Estrutura multipágina no ar local · polish + vídeos pendentes |
| 4 | QA conversão / performance / mobile | ⬜ |
| 5 | Go-live | ⬜ |

---

## 13. Pendências (bloqueiam 10/10 total)

1. ~~Nome da atriz~~ → Alexandra Richter (só interno). 
2. ~~Citar nome no site?~~ → **Não** · fotos `1269`/`1270` sim. 
3. ~~`1272` é o mesmo atendimento?~~ → **Não**. 
4. ~~Renomear/converter `IMG_1276` (arquivo HEIC com extensão .JPEG).~~ → `resultado-bob-ondas-castanho.webp` (1080px, mobile). 
5. ~~Headline longa~~ → nome + apoio curto. 
6. ~~CTA avaliação global~~ → **Agendar horário**.

---

## 14. Critérios de aceite do lançamento

- [ ] Site não parece Linktree 
- [ ] 1ª dobra = uma composição de marca 
- [ ] Hierarquia Mega Hair → Mechas → Henna → Cortes clara 
- [ ] CTA único **Agendar horário** (WhatsApp) em todas as páginas críticas
- [ ] “Avaliação” só onde o serviço exige (copy Mega/Mechas/Henna), não no botão global
- [ ] Sem preço numérico; processo de avaliação explícito 
- [ ] Les Amis + Maps + Instagrams corretos 
- [ ] Vídeos mudos e leves 
- [ ] Prova social só visual (`1269`/`1270`) - **sem nome** no site
- [ ] Pixel/GA disparando em `cta_whatsapp` 
- [ ] Domínio antigo substituído só após QA no staging 
- [ ] Mobile impecável (fluxo Instagram → WhatsApp)

---

## 15. O que sai do site atual

- Layout estilo Linkfly/lista de botões como produto principal 
- Penteado social como oferta 
- Morena Iluminada como serviço separado (vira parte de Mechas) 
- Qualquer oferta diluidora fora dos 4 pilares 

---

*Documento mestre. Alterações relevantes devem atualizar este arquivo antes de virar código.*
