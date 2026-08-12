# Studio Eduarda Cavalcanti — Site

Landing page do studio de beleza em Paulicéia, São Bernardo do Campo - SP.
Feita com **React + Vite + Tailwind CSS v4**, com suporte a build em **arquivo HTML único**.

## Como rodar

```bash
npm install        # instala dependências (uma vez)
npm run dev        # dev server → http://localhost:7777/
npm run build      # build otimizado → dist/
npm run singlefile # build em UM arquivo HTML → dist-single/site.html
npm run lint       # oxlint
```

O porto fixo é **7777** (`strictPort`), definido em `vite.config.js`.

## Comandos úteis

| Ação | Comando |
| --- | --- |
| Editar número de WhatsApp, Instagram, endereço, serviços, FAQ, fotos | editar `src/config/site.js` |
| Trocar uma foto | substituir o arquivo em `public/images/` mantendo o nome |
| Gerar arquivo único (para hospedar no hostinger e.g.) | `npm run singlefile` → `dist-single/site.html` |

> Na versão única, copie a pasta `images/` ao lado do `site.html`.

## Documentação

- [`docs/QUICK-EDIT.md`](docs/QUICK-EDIT.md) — guia rápido: como editar contato, serviços e fotos.
- [`docs/IMAGENS.md`](docs/IMAGENS.md) — ⭐ o que fazer quando receber as fotos do cliente (nomes exatos).
- [`docs/PROJECT-STRUCTURE.md`](docs/PROJECT-STRUCTURE.md) — como o projeto está organizado.

## Estado das fotos (2026-08-11)

Fotos **provisórias** copiadas do Downloads do cliente (substituir pelas finais).
Lista completa em [`docs/IMAGENS.md`](docs/IMAGENS.md).

| Arquivo | Onde aparece | Status |
| --- | --- | --- |
| `hero-image.jpg` | Hero (topo) | ✅ provisória |
| `lashes-01.jpg` | Cílios (serviços/portfólio/confiança) | ✅ provisória |
| `lashes-02.jpg` | "Nosso atendimento" + portfólio | ⚠️ falta — placeholder |
| `brows-01.jpg` | Sobrancelhas | ✅ provisória |
| `hair-01.jpg` | Cabelo | ✅ provisória |
| `nails-01.jpg` | Unhas em gel | ✅ provisória |
| `aesthetics-01.jpg` | Estética | ⚠️ falta — placeholder |
| `eduarda.jpg` | Foto da Eduarda (sobre) | ⚠️ falta — placeholder |
| `studio-01.jpg` | Studio — recepção | ⚠️ falta — placeholder |
| `studio-02.jpg` | Studio — atendimento | ⚠️ falta — placeholder |

As fotos que faltam exibem um **placeholder elegante** com o nome do conteúdo
até a foto real ser adicionada. Para adicionar: coloque o arquivo em
`public/images/` **com o mesmo nome** da tabela.
