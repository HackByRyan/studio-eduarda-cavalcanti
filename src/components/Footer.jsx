import { FaInstagram, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { services, site, waLink, waMessages } from '../config/site'

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-300">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12 md:gap-10 md:py-24">
        {/* Marca + endereço */}
        <div className="md:col-span-5">
          <p className="font-display text-3xl text-ivory">
            <span className="text-blush-400">Studio</span> Eduarda Cavalcanti
          </p>
          <p className="mt-4 max-w-sm text-pretty text-sm text-ink-300">{site.tagline}</p>
          <p className="mt-5 flex items-start gap-2 text-sm text-ink-300">
            <FaMapMarkerAlt className="mt-0.5 text-blush-400" aria-hidden="true" />
            <span>
              {site.address.street}, {site.address.district} — {site.address.city}
              <br />
              {site.address.cep} · {site.address.reference}
            </span>
          </p>
        </div>

        {/* Serviços */}
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.2em] text-champagne-300">Serviços</p>
          <ul className="mt-5 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.id}>{s.name}</li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.2em] text-champagne-300">Contato</p>
          <div className="mt-5 flex flex-col items-start gap-3">
            <a
              href={waLink(waMessages.generic)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-white"
            >
              <FaWhatsapp className="text-wa" aria-hidden="true" /> WhatsApp
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-white"
            >
              <FaInstagram className="text-blush-400" aria-hidden="true" /> {site.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-ink-500 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Studio Eduarda Cavalcanti. Todos os direitos reservados.</p>
          <p className="uppercase tracking-[0.2em]">{site.city}</p>
        </div>
      </div>
    </footer>
  )
}
