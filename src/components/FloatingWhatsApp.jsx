import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { waLink, waMessages } from '../config/site'

/**
 * FloatingWhatsApp — CTAs flutuantes de agendamento:
 *  • Mobile: barra fixa no rodapé (sempre visível).
 *  • Desktop: botão circular verde no canto inferior direito.
 */
export default function FloatingWhatsApp() {
  const href = waLink(waMessages.final)

  return (
    <>
      {/* Barra fixa — mobile */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-4 bottom-4 z-50 md:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.97 }}
          aria-label="Agendar pelo WhatsApp"
          className="flex items-center justify-center gap-2.5 rounded-full bg-blush-600 py-4 text-sm font-semibold tracking-[0.14em] text-white shadow-[0_20px_50px_-16px_rgba(209,77,115,0.9)]"
        >
          <FaWhatsapp className="text-xl" aria-hidden="true" />
          <span>AGENDAR PELO WHATSAPP</span>
        </motion.a>
      </motion.div>

      {/* Botão circular — desktop */}
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Agendar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-[0_18px_40px_-12px_rgba(37,211,102,0.8)] md:flex"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa opacity-25" aria-hidden="true" />
        <FaWhatsapp className="relative text-2xl" aria-hidden="true" />
      </motion.a>
    </>
  )
}
