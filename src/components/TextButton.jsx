import { motion } from 'framer-motion'

/**
 * TextButton — link-CTA com seta, usado nos cards de serviço
 * e em textos que apontam para o WhatsApp.
 */
export default function TextButton({ href, children, className = '' }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={`inline-flex items-center gap-2 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-blush-600 transition-colors hover:text-blush-800 ${className}`}
    >
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </motion.a>
  )
}
