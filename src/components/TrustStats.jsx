import {
  FiAward,
  FiGrid,
  FiHeart,
  FiHome,
  FiMapPin,
  FiStar,
} from 'react-icons/fi'
import Image from './Image'
import WhatsAppButton from './WhatsAppButton'
import SectionHeading from './SectionHeading'
import { StaggerContainer, StaggerItem } from './motion/Reveal'
import { whyUs, waMessages, site } from '../config/site'

const icons = {
  heart: FiHeart,
  award: FiAward,
  home: FiHome,
  grid: FiGrid,
  star: FiStar,
  pin: FiMapPin,
}

export default function TrustStats() {
  return (
    <section className="py-20 md:py-28">
      {/* Por que escolher */}
      <div className="container-site">
        <SectionHeading
          eyebrow="Por que escolher"
          title="Por que escolher o Studio Eduarda Cavalcanti?"
        />

        <StaggerContainer className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item) => {
            const Icon = icons[item.icon] || FiStar
            return (
              <StaggerItem key={item.title}>
                <div className="group flex h-full flex-col rounded-3xl bg-white p-7 shadow-[0_20px_50px_-34px_rgba(43,32,36,0.4)] ring-1 ring-ink-900/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-34px_rgba(209,77,115,0.45)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blush-100 text-blush-600 transition-colors duration-500 group-hover:bg-blush-600 group-hover:text-white">
                    <Icon className="text-xl" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600">{item.description}</p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>

      {/* Autoridade / prova social */}
      <div className="mt-20 bg-ink-900 md:mt-28">
        <div className="container-site grid items-center gap-12 py-16 md:grid-cols-2 md:gap-10 md:py-24 lg:gap-16">
          <div>
            <span className="eyebrow-pill !bg-white/10 !text-champagne-300">
              Confiança que você pode sentir
            </span>
            <div className="text-stat mt-7 flex items-end gap-4">
              <span className="font-display text-ivory">+4.000</span>
              <span className="pb-2 text-sm uppercase tracking-[0.2em] text-ink-300">
                atendimentos
                <br />
                realizados
              </span>
            </div>
            <p className="mt-6 max-w-lg text-pretty text-base text-ink-300 md:text-lg">
              Uma trajetória construída com cuidado, dedicação e amor pelo que
              fazemos. Cada cliente que passa por aqui sai querendo voltar.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full border border-champagne-400/40 px-4 py-2 text-xs uppercase tracking-[0.18em] text-champagne-300">
                Especialista em cílios
              </span>
              <span className="rounded-full border border-champagne-400/40 px-4 py-2 text-xs uppercase tracking-[0.18em] text-champagne-300">
                Cursos e mentorias para Lash Designers
              </span>
            </div>

            <div className="mt-9 flex flex-col items-start">
              <WhatsAppButton
                message={waMessages.generic}
                variant="white"
                size="lg"
                className="btn-block-sm"
              />
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 h-28 w-28 rounded-3xl bg-blush-500/30"
            />
            <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-white/10">
              <Image
                src={site.images.trust.src}
                alt={site.images.trust.alt}
                label="Resultado de cílios"
                position={site.images.trust.position}
                className="aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
