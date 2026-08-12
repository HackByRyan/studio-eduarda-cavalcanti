// =====================================================
// CONFIGURAÇÃO CENTRAL — STUDIO EDUARDA CAVALCANTI
//
// Todo o site lê DESTE arquivo. Para editar contato,
// serviços, fotos ou textos, mude apenas aqui.
//
// ⚠️ FOTOS: coloque os arquivos na pasta public/images/ (dev)
//    ou na pasta images/ ao lado do site.html (versão única).
//    com os nomes indicados abaixo. Enquanto a foto
//    real não existir, a página exibe um placeholder
//    elegante no lugar.
// =====================================================

export const site = {
  name: 'Studio Eduarda Cavalcanti',
  shortName: 'Eduarda Cavalcanti',
  tagline: 'Beleza, cuidado e autoestima em um só lugar.',
  city: 'Paulicéia · São Bernardo do Campo - SP',

  // ⚠️⚠️ WHATSAPP — NÚMERO REAL AQUI ⚠️⚠️
  // Apenas dígitos, com DDI (55) + DDD + número.
  // Ex.: (11) 94453-9718 → '5511944539718'
  // TROQUE pelo número real de atendimento do studio.
  whatsapp: '5511944539718',

  instagram: 'https://www.instagram.com/eduardacavalcanti.lash/',
  instagramHandle: '@eduardacavalcanti.lash',

  address: {
    street: 'R. M.M.D.C., 455',
    district: 'Paulicéia',
    city: 'São Bernardo do Campo - SP',
    cep: '09690-000',
    reference: 'Acima da Farmácia Conde',
  },

  // Google Maps — embed do iframe (sem API key, output=embed).
  // Coordenadas confirmadas: Farmácia Conde, R. M.M.D.C., Paulicéia.
  mapEmbedUrl:
    'https://www.google.com/maps?q=-23.6689984,-46.588461&z=17&output=embed',

  // Link "COMO CHEGAR" — abre o local confirmado em nova aba.
  mapsDirectionsUrl: 'https://maps.app.goo.gl/VKoX9zAopvECv6ug7',

  // Números/indicadores de confiança usados na página.
  stats: [
    { value: '+4.000', label: 'atendimentos realizados' },
    { value: '5', label: 'áreas de beleza no studio' },
    { value: '100%', label: 'atendimento por horário marcado' },
  ],

  // -----------------------------------------------------
  // FOTOS — nomes padronizados em public/images/
  // Troque o ARQUIVO (mantendo o nome) para trocar a foto.
  // src: caminho relativo até public/images/ (dev)
  //      ou images/ ao lado do site.html (versão única).
  // position: posição de recorte (object-position).
  // alt: texto alternativo de acessibilidade.
  // -----------------------------------------------------
  images: {
    hero: {
      src: 'images/hero-image.jpg',
      position: '50% 35%',
      alt: 'Studio Eduarda Cavalcanti — beleza e autocuidado',
    },
    eduarda: {
      src: 'images/eduarda.jpg',
      position: '50% 30%',
      alt: 'Eduarda Cavalcanti — especialista em cílios e fundadora do Studio Eduarda Cavalcanti',
    },
    welcome: {
      src: 'images/lashes-02.jpg',
      position: '50% 40%',
      alt: 'Atendimento no Studio Eduarda Cavalcanti',
    },
    trust: {
      src: 'images/lashes-01.jpg',
      position: '50% 40%',
      alt: 'Resultado de cílios no Studio Eduarda Cavalcanti',
    },
  },
}

// -----------------------------------------------------
// WhatsApp — link com mensagem pré-preenchida
// -----------------------------------------------------
export const waLink = (message) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`

export const waMessages = {
  generic: 'Olá! Vim pelo site do Studio Eduarda Cavalcanti e gostaria de agendar um horário. 💗',
  service: (name) =>
    `Olá! Vim pelo site do Studio Eduarda Cavalcanti e gostaria de agendar: ${name}. 💗`,
  final: 'Olá! Vim pelo site do Studio Eduarda Cavalcanti e quero reservar meu horário. 💗',
}

// -----------------------------------------------------
// Navegação
// -----------------------------------------------------
export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Studio', href: '#studio' },
  { label: 'Localização', href: '#localizacao' },
]

// -----------------------------------------------------
// Serviços — descrições genéricas e editáveis.
// (Não inventamos técnicas, preços ou procedimentos.)
// -----------------------------------------------------
export const services = [
  {
    id: 'cilio',
    number: 1,
    name: 'Cílios',
    description:
      'Valorize o seu olhar com cílios lindos, cuidadosamente escolhidos para o seu estilo.',
    image: 'images/cilios_morena.pjg.png',
    position: '50% 40%',
    alt: 'Resultado de alongamento de cílios no Studio Eduarda Cavalcanti',
  },
  {
    id: 'sobrancelhas',
    number: 2,
    name: 'Sobrancelhas',
    description: 'Sobrancelhas alinhadas e naturais que realçam a sua expressão.',
    image: 'images/sobrancelha_pjg-07.png',
    position: '50% 35%',
    alt: 'Sobrancelhas alinhadas no Studio Eduarda Cavalcanti',
  },
  {
    id: 'cabelo',
    number: 3,
    name: 'Cabelo',
    description: 'Cuidados com os fios para um visual renovado e cheio de vida.',
    image: 'images/Cabelo_pjg-2.png',
    position: '50% 30%',
    alt: 'Cuidado com cabelo no Studio Eduarda Cavalcanti',
  },
  {
    id: 'unhas',
    number: 4,
    name: 'Unhas em Gel',
    description: 'Unhas impecáveis, elegantes e prontas para o seu dia a dia.',
    image: 'images/nails-02.jpg',
    position: '50% 55%',
    alt: 'Unhas em gel no Studio Eduarda Cavalcanti',
  },
  {
    id: 'estetica',
    number: 5,
    name: 'Estética',
    description: 'Tratamentos e cuidados que renovam a pele e a autoestima.',
    image: 'images/aesthetics-02.jpg',
    position: '50% 45%',
    alt: 'Tratamento de estética no Studio Eduarda Cavalcanti',
  },
]

// -----------------------------------------------------
// Por que escolher o studio
// -----------------------------------------------------
export const whyUs = [
  {
    icon: 'heart',
    title: 'Atendimento personalizado',
    description: 'Cada cuidado é pensado para o seu momento.',
  },
  {
    icon: 'award',
    title: 'Profissionais especializadas',
    description: 'Uma profissional dedicada em cada área de beleza.',
  },
  {
    icon: 'home',
    title: 'Ambiente acolhedor',
    description: 'Um espaço calmo, bonito e feito para você.',
  },
  {
    icon: 'grid',
    title: 'Diversos serviços no mesmo espaço',
    description: 'Cílios, sobrancelhas, cabelo, unhas e estética.',
  },
  {
    icon: 'star',
    title: 'Experiência e confiança',
    description: '+4.000 atendimentos realizados com carinho.',
  },
  {
    icon: 'pin',
    title: 'Localização em Paulicéia',
    description: 'Fácil de chegar, em São Bernardo do Campo.',
  },
]

// -----------------------------------------------------
// Portfólio / Resultados (galeria tipo masonry)
// -----------------------------------------------------
export const portfolio = [
  { id: 'lashes-01', name: 'Cílios', image: 'images/cilios_pjg-01.png', position: '50% 40%', aspect: 'aspect-[3/4]' },
  { id: 'brows-01', name: 'Sobrancelhas', image: 'images/brows-07.jpg', position: '50% 35%', aspect: 'aspect-square' },
  { id: 'lashes-02', name: 'Cílios', image: 'images/cilios_pjg-02.png', position: '50% 40%', aspect: 'aspect-[3/4]' },
  { id: 'hair-01', name: 'Cabelo', image: 'images/hair-01.jpg', position: '50% 30%', aspect: 'aspect-square' },
  { id: 'nails-01', name: 'Unhas em Gel', image: 'images/unha_pjg-3.png', position: '50% 55%', aspect: 'aspect-[3/4]' },
  { id: 'aesthetics-01', name: 'Estética', image: 'images/aesthetics-01.jpg', position: '50% 45%', aspect: 'aspect-square' },
]

// -----------------------------------------------------
// Experiência do studio
// -----------------------------------------------------
export const experience = {
  title: 'Um espaço pensado para você.',
  subtitle:
    'Da recepção à cadeira, tudo foi pensado para que você se sinta em casa. Um ambiente acolhedor, com profissionais especializadas e diversos serviços em um só lugar.',
  highlights: [
    'Ambiente acolhedor',
    'Profissionais especializadas',
    'Atendimento por horário marcado',
    'Diversos serviços em um só lugar',
  ],
  images: [
    { src: 'images/studio-01.jpg', label: 'Recepção do studio', position: '50% 50%' },
    { src: 'images/studio-02.jpg', label: 'Espaço de atendimento', position: '50% 50%' },
    { src: 'images/brows-01.jpg', label: 'Nosso espaço', position: '50% 50%' },
  ],
}

// -----------------------------------------------------
// FAQ
// -----------------------------------------------------
export const faq = [
  {
    question: 'Como faço para agendar?',
    answer:
      'É simples: clique em qualquer botão de WhatsApp da página e fale diretamente com o studio. Você escolhe o serviço e encontramos o melhor horário para você.',
  },
  {
    question: 'Quais serviços estão disponíveis?',
    answer:
      'Cílios, sobrancelhas, cabelo, unhas em gel e estética — tudo em um só espaço, com profissionais especializadas.',
  },
  {
    question: 'Onde o studio fica?',
    answer:
      'R. M.M.D.C., 455, Paulicéia, São Bernardo do Campo - SP. Ficamos acima da Farmácia Conde.',
  },
  {
    question: 'Preciso agendar com antecedência?',
    answer:
      'Consulte a disponibilidade de horários pelo WhatsApp. Assim você garante o seu momento com calma.',
  },
  {
    question: 'Encontro diferentes profissionais no mesmo studio?',
    answer:
      'Sim! O studio reúne profissionais especializadas em cabelo, unhas, estética e cílios — você cuida de tudo em um único lugar.',
  },
]
