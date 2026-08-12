import WhatsAppButton from './WhatsAppButton'
import { Reveal } from './motion/Reveal'
import { site, waMessages } from '../config/site'

export default function FinalCTA() {
  return (
    <section className="container-site py-20 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-blush-800 via-blush-600 to-blush-500 px-5 py-16 text-center shadow-[0_50px_100px_-50px_rgba(142,46,78,0.7)] sm:rounded-[2.5rem] sm:px-10 md:px-16 md:py-24 lg:py-28">
          {/* Decorações */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full border border-white/25"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full border border-white/15"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[10%] top-[16%] text-lg text-white/50"
          >
            ✦
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[14%] right-[12%] text-sm text-white/40"
          >
            ✦
          </span>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-big text-balance font-display text-white">
              Seu próximo momento de beleza começa aqui. ✨
            </h2>
            <p className="mt-5 text-pretty text-base text-white/85 md:text-lg">
              Escolha seu serviço e fale com a gente para encontrar o melhor
              horário para você.
            </p>
            <div className="mt-9 flex justify-center">
              <WhatsAppButton
                message={waMessages.final}
                variant="white"
                size="lg"
                className="btn-block-sm max-w-sm"
              />
            </div>
            <p className="mt-6 text-[11px] uppercase leading-relaxed tracking-[0.18em] text-white/70 md:text-xs">
              Atendimento por horário marcado · {site.city}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
