import { FaInstagram } from 'react-icons/fa'
import Image from './Image'
import WhatsAppButton from './WhatsAppButton'
import { Reveal } from './motion/Reveal'
import { site, waMessages } from '../config/site'

const credentials = [
  'Especialista em cílios',
  'Mais de 4.000 atendimentos realizados',
  'Cursos e mentorias para Lash Designers',
]

export default function About() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site grid items-center gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
        {/* Foto */}
        <Reveal className="relative mx-auto w-full max-w-sm md:col-span-5 md:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] bg-blush-200/70"
          />
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-35px_rgba(43,32,36,0.45)]">
            <Image
              src={site.images.eduarda.src}
              alt={site.images.eduarda.alt}
              label="Eduarda Cavalcanti"
              position={site.images.eduarda.position}
              className="aspect-[4/5]"
            />
          </div>
        </Reveal>

        {/* Texto */}
        <div className="md:col-span-7">
          <Reveal>
            <span className="eyebrow-pill">A especialista do studio</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-section mt-5 text-balance font-display text-ink-900">
              Prazer, eu sou a Eduarda. 💗
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-pretty text-base text-ink-600 md:text-lg">
              Sou a Eduarda, especialista em cílios e fundadora deste espaço. Ao
              longo de mais de 4.000 atendimentos, descobri o que move o meu
              trabalho: ver cada cliente sair daqui mais confiante, com aquele
              brilho no olhar.
            </p>
            <p className="mt-3 text-pretty text-base text-ink-600 md:text-lg">
              Aqui, eu e a minha equipe cuidamos de você com atenção a cada
              detalhe — porque cada pessoa que chega é única, e o cuidado com ela
              também.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-7 space-y-3">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-700">
                  <span className="mt-1 text-champagne-500" aria-hidden="true">
                    ✦
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton
                message={waMessages.generic}
                label="QUERO AGENDAR"
                className="btn-block-sm"
              />
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md btn-ghost btn-block-sm"
              >
                <FaInstagram className="text-lg" aria-hidden="true" />
                SEGUIR NO INSTAGRAM
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
