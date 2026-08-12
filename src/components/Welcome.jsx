import { Reveal } from './motion/Reveal'
import Image from './Image'
import TextButton from './TextButton'
import { waLink, waMessages, site } from '../config/site'

const highlights = [
  'Atendimento por horário marcado',
  'Espaço acolhedor e pensado no seu conforto',
  'Profissionais que cuidam de cada detalhe',
]

export default function Welcome() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-site grid items-center gap-10 md:grid-cols-2 md:gap-8 lg:gap-16">
        {/* Imagem com moldura decorativa */}
        <Reveal className="relative order-2 mx-auto w-full max-w-md md:order-1 md:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-blush-300/60"
          />
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-35px_rgba(43,32,36,0.4)]">
            <Image
              src={site.images.welcome.src}
              alt={site.images.welcome.alt}
              label="Nosso atendimento"
              position={site.images.welcome.position}
              className="aspect-[4/5]"
            />
          </div>
        </Reveal>

        {/* Texto */}
        <div className="order-1 md:order-2">
          <Reveal>
            <span className="eyebrow-pill">O seu momento</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-section mt-5 text-balance font-display text-ink-900">
              Seu momento de se cuidar começa aqui. 💗
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-pretty text-base text-ink-600 md:text-lg">
              Beleza vai muito além da aparência. É aquele instante de pausa na
              rotina, o cuidado com você e a confiança que volta junto com o
              sorriso no espelho.
            </p>
            <p className="mt-3 text-pretty text-base text-ink-600 md:text-lg">
              Cuidar de você não é um luxo — é um momento só seu. E ele começa aqui.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-7 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-700">
                  <span
                    className="mt-1 text-champagne-500"
                    aria-hidden="true"
                  >
                    ✦
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9">
              <TextButton href={waLink(waMessages.generic)}>QUERO AGENDAR</TextButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
