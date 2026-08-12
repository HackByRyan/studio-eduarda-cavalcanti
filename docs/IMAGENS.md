# Guia de Fotos — IMAGENS

> **Regra de ouro:** para uma foto aparecer, basta colocar o arquivo em
> `public/images/` com **exatamente** o nome da tabela abaixo. Pronto, sem
> mexer em código.

O site **não quebra** se faltar foto: mostra um placeholder elegante com o
nome do conteúdo até o arquivo existir.

## Onde colocar

```
site-eduarda/public/images/<nome-exato>.jpg
```

Arquivos aceitos: `.jpg`, `.jpeg`, `.png`, `.webp`.

## Fotos que o site usa (10)

| # | Nome do arquivo | Onde aparece | Conteúdo sugerido | Orientação |
| --- | --- | --- | --- | --- |
| 1 | `hero-image.jpg` | Topo da página (Hero) | Melhor foto de resultado (ex.: olhar com cílios) | Vertical (3:4) |
| 2 | `lashes-01.jpg` | Serviço Cílios + Portfólio + seção Confiança | Resultado de **cílios** | Vertical |
| 3 | `lashes-02.jpg` | "Nosso atendimento" + Portfólio | Resultado de **cílios** (ou atendimento) | Vertical |
| 4 | `brows-01.jpg` | Serviço Sobrancelhas + Portfólio | Resultado de **sobrancelhas** | Vertical |
| 5 | `hair-01.jpg` | Serviço Cabelo + Portfólio | Resultado de **cabelo** | Vertical |
| 6 | `nails-01.jpg` | Serviço Unhas em Gel + Portfólio | Resultado de **unhas** | Vertical |
| 7 | `aesthetics-01.jpg` | Serviço Estética + Portfólio | Tratamento/resultado de **estética** | Vertical |
| 8 | `eduarda.jpg` | Seção "Sobre" (foto da Eduarda) | Foto da **Eduarda** | Vertical (3:4) |
| 9 | `studio-01.jpg` | Seção "Studio" | **Recepção** do studio | Qualquer |
| 10 | `studio-02.jpg` | Seção "Studio" | **Espaço de atendimento** | Qualquer |

### Fotos opcionais (o site não usa hoje)

- `nails-02.jpg`, `aesthetics-02.jpg` — se o cliente mandar mais fotos de
  unhas/estética, dá para usar; aí é só apontar no config (`src/config/site.js`).

## Status atual

| Nome | Status |
| --- | --- |
| `hero-image.jpg` | ✅ provisória (da pasta Downloads) — **substituir** |
| `lashes-01.jpg` | ✅ provisória (Downloads) — **substituir** |
| `lashes-02.jpg` | ⚠️ faltando — placeholder |
| `brows-01.jpg` | ✅ provisória (Downloads) — **substituir** |
| `hair-01.jpg` | ✅ provisória (Downloads) — **substituir** |
| `nails-01.jpg` | ✅ provisória (Downloads) — **substituir** |
| `aesthetics-01.jpg` | ⚠️ faltando — placeholder |
| `eduarda.jpg` | ⚠️ faltando — placeholder |
| `studio-01.jpg` | ⚠️ faltando — placeholder |
| `studio-02.jpg` | ⚠️ faltando — placeholder |

> As provisórias foram copiadas do seu Downloads para o site já ficar bonito.
> Quando o cliente mandar as fotos finais, **substitua o arquivo mantendo o
> nome** — nada mais precisa mudar.

## Dicas

- **Retrato (vertical)** funciona melhor — as fotos do site usam recorte
  `object-cover` em molduras 3:4 / quadradas.
- Se a foto aparecer "cortada errada" (ex.: mostrando o lugar errado), ajuste
  o recorte no config `position` (ex.: `50% 35%` → `50% 20%` para subir o foco).
- Nome com acento/espacço (ex.: `unhas correta.jpg`) **não** funciona — use os
  nomes exatos da tabela.
- O site aplica um realce leve (`img-enhance`: brilho/contraste/saturação
  sutis) em todas as fotos.

## Ao mudar de máquina / publicar

- Na versão normal (`npm run build`): as fotos vão junto para `dist/images/`.
- Na versão arquivo único (`npm run singlefile`): copie a pasta `images/`
  para **perto do** `dist-single/site.html`.
