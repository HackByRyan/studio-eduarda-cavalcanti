import { motion } from 'framer-motion'
import { FaMapMarkerAlt } from 'react-icons/fa'
import WhatsAppButton from './WhatsAppButton'
import { Reveal } from './motion/Reveal'
import { site, waMessages } from '../config/site'

function MapPanel() {
  if (site.mapEmbedUrl) {
    return (
      <iframe
        title="Mapa — Studio Eduarda Cavalcanti"
        src={site.mapEmbedUrl}
        className="h-full min-h-[320px] w-full border-0 md:min-h-[340px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    )
  }

  return (
    <div className="relative flex h-full min-h-[320px] flex-col items-center justify-center gap-4 bg-linear-to-br from-blush-100 via-cream to-blush-200 p-8 text-center md:min-h-[340px]">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-blush-600 text-white shadow-lg shadow-blush-600/30">
        <FaMapMarkerAlt className="text-2xl" aria-hidden="true" />
      </span>
      <div>
        <p className="font-display text-2xl text-ink-900">Mapa do Studio</p>
        <p className="mt-2 text-sm text-ink-500">
          Cole o link do Google Maps em{' '}
          <code className="rounded bg-white/70 px-1.5 py-0.5 text-xs text-blush-700">
            src/config/site.js
          </code>{' '}
          para exibir o mapa aqui.
        </p>
      </div>
    </div>
  )
}

export default function Location() {
  return (
    <section id="localizacao" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-site grid items-stretch gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
        {/* Endereço */}
        <div>
          <Reveal>
            <span className="eyebrow-pill">Onde estamos</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-section mt-5 text-balance font-display text-ink-900">
              Estamos esperando por você. 📍
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <address className="mt-8 not-italic">
              <p className="text-address font-display text-ink-900">
                {site.address.street}
              </p>
              <p className="mt-1 text-lg text-ink-700">{site.address.district}</p>
              <p className="text-lg text-ink-700">{site.address.city}</p>
              <p className="mt-1 text-sm text-ink-500">CEP {site.address.cep}</p>
              <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-blush-100 px-4 py-2 text-sm font-medium text-blush-700">
                <span aria-hidden="true">✦</span> {site.address.reference}
              </p>
            </address>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <motion.a
                href={site.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn btn-md btn-primary btn-block-sm"
              >
                <FaMapMarkerAlt className="text-[1.1em]" aria-hidden="true" />
                COMO CHEGAR
              </motion.a>
              <WhatsAppButton
                message={waMessages.generic}
                label="FALAR NO WHATSAPP"
                variant="ghost"
                className="btn-block-sm"
              />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-sm text-ink-500">
              Atendimento por horário marcado — envie uma mensagem antes de vir.
            </p>
          </Reveal>
        </div>

        {/* Mapa / painel */}
        <Reveal delay={0.1} className="overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-40px_rgba(43,32,36,0.5)] ring-1 ring-ink-900/5">
          <MapPanel />
        </Reveal>
      </div>
    </section>
  )
}
