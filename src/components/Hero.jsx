import Image from './Image'
import WhatsAppButton from './WhatsAppButton'
import { Reveal } from './motion/Reveal'
import { site, waMessages } from '../config/site'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 lg:pt-36">
      {/* Blobs decorativos */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-40 h-[560px] w-[560px] animate-[float_8s_ease-in-out_infinite] rounded-full bg-blush-300/40 blur-3xl" />
        <div className="absolute -bottom-48 -left-32 h-[480px] w-[480px] animate-[float_10s_ease-in-out_infinite] rounded-full bg-champagne-200/50 blur-3xl" />
      </div>

      <div className="container-site grid items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
        {/* Texto */}
        <div className="order-2 md:order-1">
          <Reveal>
            <span className="eyebrow-pill">{site.city}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-hero mt-6 text-balance font-display text-ink-900">
              Seu brilho começa <em className="italic text-blush-600">aqui.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-pretty text-base text-ink-600 md:text-lg">
              {site.tagline} Cílios, sobrancelhas, cabelo, unhas em gel e estética
              em um só lugar.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <WhatsAppButton
                message={waMessages.generic}
                size="lg"
                className="btn-block-sm"
              />
              <a href="#servicos" className="btn btn-lg btn-ghost btn-block-sm">
                VER SERVIÇOS
              </a>
            </div>
          </Reveal>
        </div>

        {/* Imagem */}
        <div className="order-1 md:order-2">
          <Reveal delay={0.1} className="relative mx-auto w-full max-w-md md:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-blush-300/60"
            />
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-35px_rgba(43,32,36,0.45)]">
              <Image
                src={site.images.hero.src}
                alt={site.images.hero.alt}
                label="Studio Eduarda Cavalcanti"
                position={site.images.hero.position}
                eager
                className="aspect-[4/5] md:aspect-[16/10] lg:aspect-[3/4]"
              />
            </div>

            {/* Badge flutuante */}
            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white/90 px-5 py-3 shadow-lg backdrop-blur">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush-100 text-lg text-blush-600">
                ✦
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-900">
                  Atendimento
                </p>
                <p className="text-sm text-ink-600">por horário marcado</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
