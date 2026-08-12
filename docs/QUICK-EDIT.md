# Guia Rápido — QUICK-EDIT

Tudo que muda com frequência está **centralizado** em um único arquivo:

```
src/config/site.js
```

Rode o projeto e veja a mudança ao vivo:

```bash
npm run dev   # abre http://localhost:7777/
```

---

## 1. Número do WhatsApp

Em `src/config/site.js`:

```js
whatsapp: '5511944539718',
```

Somente dígitos, com DDI + DDD + número:
`(11) 94453-9718` → `5511944539718`.

## 2. Instagram

```js
instagram: 'https://www.instagram.com/eduardacavalcanti.lash/',
instagramHandle: '@eduardacavalcanti.lash',
```

## 3. Endereço e mapa

```js
address: {
  street: 'R. M.M.D.C., 455',
  district: 'Paulicéia',
  city: 'São Bernardo do Campo - SP',
  cep: '09690-000',
  reference: 'Acima da Farmácia Conde',
},
mapEmbedUrl: 'https://www.google.com/maps?q=-23.6689984,-46.588461&z=17&output=embed',
mapsDirectionsUrl: 'https://maps.app.goo.gl/VKoX9zAopvECv6ug7',
```

## 4. Serviços (lista de 5)

Em `src/config/site.js`, o array `services`:

```js
{
  id: 'cilio',        // identificador
  number: 1,
  name: 'Cílios',
  description: 'Valorize o seu olhar...',
  image: 'images/lashes-01.jpg',  // foto (public/images/)
  position: '50% 40%',            // posição do recorte
  alt: 'Resultado de...',
},
```

## 5. Fotos (como trocar)

1. Coloque a foto em `public/images/` com o **mesmo nome** já usado.
2. Se o nome não existir, você pode:
   - mudar o caminho no config (ex.: `images/lashes-01.jpg`), **ou**
   - renomear o arquivo para o nome esperado.

Enquanto a foto não existir, o site mostra um **placeholder** dizendo o que trocar.

> As fotos usadas no topo da página (Hero), na seção "Sobre", "Nosso atendimento"
> e "Confiança" também estão no config, dentro de `site.images`.

> ⭐ **Recebeu as fotos do cliente?** Veja [`IMAGENS.md`](IMAGENS.md) — a lista
> com os nomes exatos e onde cada foto aparece.

## 6. FAQ

```js
export const faq = [
  { question: '...', answer: '...' },
]
```

Mantenha as respostas sincronizadas com o JSON-LD do `index.html`
(seções `FAQPage` e `BeautySalon`).

## 7. Menus / textos fixos

- Navegação: `navLinks` em `src/config/site.js`.
- Textos dentro das seções (títulos, parágrafos): ficam nos componentes em
  `src/components/`.

## Versão "arquivo único" (single-file)

Para enviar ao cliente / hospedar:

```bash
npm run singlefile
```

O resultado sai em `dist-single/site.html` (CSS e JS embutidos).
Copie a pasta `images/` ao lado do arquivo HTML.
