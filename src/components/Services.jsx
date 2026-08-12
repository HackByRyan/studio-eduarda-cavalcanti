import Image from './Image'
import TextButton from './TextButton'
import SectionHeading from './SectionHeading'
import { StaggerContainer, StaggerItem } from './motion/Reveal'
import { services, waLink, waMessages } from '../config/site'

function ServiceCard({ service, featured }) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_-36px_rgba(43,32,36,0.4)] ring-1 ring-ink-900/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_36px_70px_-36px_rgba(209,77,115,0.45)] ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className={`grid h-full ${featured ? 'md:grid-cols-2' : ''}`}>
        <div
          className={`relative overflow-hidden ${
            featured
              ? 'aspect-[16/10] md:aspect-auto md:min-h-[380px] lg:min-h-[420px]'
              : 'aspect-[4/5]'
          }`}
        >
          <span
            className="absolute left-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 font-display text-lg text-ink-900 shadow-sm backdrop-blur"
            aria-hidden="true"
          >
            0{service.number}
          </span>
          <Image
            src={service.image}
            alt={service.alt}
            label={service.name}
            position={service.position}
            className="absolute inset-0"
            imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        </div>

        <div
          className={`flex flex-col ${
            featured ? 'justify-center p-7 md:p-9' : 'p-6'
          }`}
        >
          <h3
            className={`font-display text-ink-900 ${
              featured ? 'text-3xl md:text-4xl' : 'text-2xl'
            }`}
          >
            {service.name}
          </h3>
          <p
            className={`mt-2 text-pretty text-ink-600 ${
              featured ? 'text-base' : 'text-sm'
            }`}
          >
            {service.description}
          </p>
          <div className={`mt-auto ${featured ? 'pt-7' : 'pt-5'}`}>
            <TextButton href={waLink(waMessages.service(service.name))}>
              Agendar
            </TextButton>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Services() {
  const [featured, ...rest] = services

  return (
    <section id="servicos" className="scroll-mt-24 bg-cream/70 py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Nossos serviços"
          title="Encontre o cuidado que combina com você."
          subtitle="Cílios, sobrancelhas, cabelo, unhas em gel e estética — tudo em um só espaço, com profissionais especializadas."
        />

        <StaggerContainer className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          <StaggerItem className={featured ? 'md:col-span-2' : ''}>
            <ServiceCard service={featured} featured />
          </StaggerItem>
          {rest.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
