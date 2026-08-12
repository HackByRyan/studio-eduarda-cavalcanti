import { motion } from 'framer-motion'
import { FaInstagram } from 'react-icons/fa'
import Image from './Image'
import SectionHeading from './SectionHeading'
import { portfolio, site } from '../config/site'

export default function Portfolio() {
  return (
    <section id="resultados" className="scroll-mt-24 bg-cream/70 py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Resultados"
          title="Resultados que falam por si."
          subtitle="Um pouco do cuidado e da dedicação de cada atendimento. Veja mais no nosso Instagram."
        />

        {/* Galeria em masonry */}
        <div className="mt-14 columns-2 gap-4 md:columns-3 md:gap-5">
          {portfolio.map((item, i) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl md:mb-5"
            >
              <div className={item.aspect}>
                <Image
                  src={item.image}
                  alt={`${item.name} — resultado no Studio Eduarda Cavalcanti`}
                  label={item.name}
                  position={item.position}
                  className="absolute inset-0"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
              </div>

              {/* Legenda no hover (desktop) */}
              <figcaption className="absolute inset-x-0 bottom-0 hidden bg-linear-to-t from-ink-900/70 to-transparent px-5 pb-4 pt-16 text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:block">
                <span className="font-display text-xl italic">{item.name}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* CTA Instagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 text-center"
        >
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-md btn-ghost"
          >
            <FaInstagram className="text-lg" aria-hidden="true" />
            VER MAIS NO INSTAGRAM
          </a>
          <p className="mt-4 text-sm text-ink-500">
            Acompanhe {site.instagramHandle} e veja os bastidores do studio.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
