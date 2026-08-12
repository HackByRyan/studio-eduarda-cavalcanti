# Estrutura do Projeto

```
site-eduarda/
├─ index.html                     # SEO, Open Graph, Schema.org, fonts
├─ package.json                   # scripts: dev / build / singlefile / lint / preview
├─ vite.config.js                 # config principal (porta 7777, plugins)
├─ vite.singlefile.config.js      # build em arquivo HTML único → dist-single/
├─ .oxlintrc.json                 # lint (vazio — usa regras padrão do oxlint)
├─ README.md                      # visão geral + status das fotos
├─ docs/
│  ├─ QUICK-EDIT.md               # como editar contato, serviços e fotos
│  ├─ IMAGENS.md                  # ⭐ nomes exatos das fotos e onde colocá-las
│  └─ PROJECT-STRUCTURE.md        # este arquivo
├─ public/
│  └─ images/                     # FOTOS do site (são copiadas direto para o build)
│     ├─ LEIA-ME.md               # manifest: quais fotos colocar e com qual nome
│     ├─ hero-image.jpg           #   Hero (cílios) ✅ provisória
│     ├─ lashes-01.jpg            #   Resultado de cílios ✅ provisória
│     ├─ brows-01.jpg             #   Sobrancelhas ✅ provisória
│     ├─ hair-01.jpg              #   Cabelo ✅ provisória
│     ├─ nails-01.jpg             #   Unhas em gel ✅ provisória
│     ├─ lashes-02.jpg            #   ⚠️ faltando → placeholder
│     ├─ aesthetics-01.jpg        #   ⚠️ faltando → placeholder
│     ├─ eduarda.jpg              #   ⚠️ faltando → placeholder
│     ├─ studio-01.jpg            #   ⚠️ faltando → placeholder
│     └─ studio-02.jpg            #   ⚠️ faltando → placeholder
├─ src/
│  ├─ main.jsx                    # entrada do React
│  ├─ App.jsx                     # monta as seções em ordem
│  ├─ index.css                   # Tailwind v4, tokens de cor, classes utilitárias
│  ├─ config/
│  │  └─ site.js                  # ⭐ CONFIG CENTRAL: contato, serviços, FAQ, fotos
│  └─ components/
│     ├─ Navbar.jsx               # topo + menu de navegação
│     ├─ Hero.jsx                 # seção inicial (título + foto principal)
│     ├─ Services.jsx             # os 5 serviços (lê services do config)
│     ├─ Portfolio.jsx            # galeria de resultados (masonry)
│     ├─ About.jsx                # sobre a Eduarda (foto eduarda.jpg)
│     ├─ Welcome.jsx              # "seu momento de se cuidar"
│     ├─ TrustStats.jsx           # por que escolher + autoridade (+4.000)
│     ├─ StudioExperience.jsx     # experiência do espaço
│     ├─ Location.jsx             # mapa + endereço + botão como chegar
│     ├─ FAQ.jsx                  # perguntas frequentes
│     ├─ FinalCTA.jsx             # chamada final (agendar)
│     ├─ Footer.jsx               # rodapé
│     ├─ FloatingWhatsApp.jsx     # botão flutuante de WhatsApp
│     ├─ WhatsAppButton.jsx       # botão de WhatsApp reutilizável
│     ├─ TextButton.jsx           # link com estilo de texto
│     ├─ SectionHeading.jsx       # título de seção (eyebrow + título)
│     ├─ Image.jsx                # imagem com placeholder quando falta o arquivo
│     ├─ SmoothScroll.jsx         # rolagem suave (Lenis)
│     └─ motion/
│        └─ Reveal.jsx            # animações de entrada (framer-motion)
└─ dist/                          # build normal (npm run build)
└─ dist-single/                   # build single-file (npm run singlefile)
```

## Fluxo de dados

1. `src/config/site.js` é a **única fonte de verdade** (WhatsApp, Instagram,
   endereço, serviços, FAQ, caminhos de fotos).
2. Os componentes de `src/components/` leem desse config e renderizam.
3. As fotos ficam em `public/images/` e são referenciadas por caminho relativo
   (`images/lashes-01.jpg`). No build normal são copiadas para `dist/`; na
   versão single-file ficam ao lado do `site.html`.

## Ordem das seções na página

Definida em `src/App.jsx` (mantém esta ordem):

| # | Seção | Componente | âncora |
| --- | --- | --- | --- |
| 1 | Início (Hero) | `Hero.jsx` | `#inicio` |
| 2 | O seu momento | `Welcome.jsx` | — |
| 3 | Serviços | `Services.jsx` | `#servicos` |
| 4 | Por que escolher / Confiança | `TrustStats.jsx` | — |
| 5 | Resultados (galeria) | `Portfolio.jsx` | `#resultados` |
| 6 | Sobre a Eduarda | `About.jsx` | — |
| 7 | Studio | `StudioExperience.jsx` | `#studio` |
| 8 | Localização (mapa) | `Location.jsx` | `#localizacao` |
| 9 | FAQ | `FAQ.jsx` | — |
| 10 | Chamada final | `FinalCTA.jsx` | — |

Sempre acompanhados de `Navbar.jsx` (topo), `Footer.jsx` (rodapé),
`FloatingWhatsApp.jsx` (botão flutuante) e `SmoothScroll.jsx` (rolagem suave).

## Como o placeholder de foto funciona

O componente `src/components/Image.jsx`:

- se o arquivo **não existir** ou falhar ao carregar (`onError`), mostra um
  **placeholder elegante** com o nome do conteúdo;
- aplica `object-cover` + `object-position` (vindo do config) e a classe
  `img-enhance` (realce sutil de brilho/contraste/saturação definida no CSS).

## Observações

- Não há roteamento (landing page de página única — sem React Router).
- `public/` só contém `images/` hoje.
- Para trocar uma foto, substitua o arquivo **mantendo o nome** ou atualize o
  caminho no config — nenhum outro arquivo precisa mudar.
