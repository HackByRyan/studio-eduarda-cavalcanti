import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { waLink } from '../config/site'

/**
 * WhatsAppButton — CTA principal de agendamento.
 * Toda a página usa este botão para conversão.
 *
 * variant: 'primary' (rosa) | 'white' | 'wa' (verde) | 'ghost'
 * size:    'sm' | 'md' | 'lg'
 */
export default function WhatsAppButton({
  message,
  label = 'AGENDAR PELO WHATSAPP',
  variant = 'primary',
  size = 'md',
  className = '',
  ariaLabel,
}) {
  const href = waLink(message)
  const btnClass = `btn btn-${size} btn-${variant}`

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel || label}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={`${btnClass} ${className}`}
    >
      <FaWhatsapp className="text-[1.15em]" aria-hidden="true" />
      <span>{label}</span>
    </motion.a>
  )
}
