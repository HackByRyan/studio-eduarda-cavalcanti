import Image from './Image'
import WhatsAppButton from './WhatsAppButton'
import SectionHeading from './SectionHeading'
import { StaggerContainer, StaggerItem } from './motion/Reveal'
import { experience, waMessages } from '../config/site'

export default function StudioExperience() {
  const [wide, tall, square] = experience.images

  return (
    <section id="studio" className="scroll-mt-24 bg-cream/70 py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="O studio"
          title={experience.title}
          subtitle={experience.subtitle}
        />

        {/* Colagem de fotos */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          <figure className="relative col-span-2 overflow-hidden rounded-3xl">
            <Image
              src={wide.src}
              alt="Recepção do Studio Eduarda Cavalcanti"
              label={wide.label}
              position={wide.position}
              className="aspect-[16/10]"
            />
          </figure>
          <figure className="relative overflow-hidden rounded-3xl">
            <Image
              src={tall.src}
              alt="Espaço de atendimento do Studio Eduarda Cavalcanti"
              label={tall.label}
              position={tall.position}
              className="aspect-[3/4] md:aspect-auto md:h-full"
            />
          </figure>
          <figure className="relative overflow-hidden rounded-3xl">
            <Image
              src={square.src}
              alt="Ambiente do Studio Eduarda Cavalcanti"
              label={square.label}
              position={square.position}
              className="aspect-square md:aspect-auto md:h-full"
            />
          </figure>
        </div>

        {/* Destaques */}
        <StaggerContainer className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          {experience.highlights.map((item) => (
            <StaggerItem key={item}>
              <span className="rounded-full bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-ink-700 ring-1 ring-ink-900/10">
                {item}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10 flex justify-center">
          <WhatsAppButton message={waMessages.generic} className="btn-block-sm" />
        </div>
      </div>
    </section>
  )
}
