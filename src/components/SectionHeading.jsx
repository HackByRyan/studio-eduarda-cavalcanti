import { motion } from 'framer-motion'

/**
 * SectionHeading — cabeçalho padrão de seção (eyebrow + título + subtítulo).
 */
export default function SectionHeading({ eyebrow, title, subtitle, className = '' }) {
  return (
    <div className={`mx-auto flex max-w-2xl flex-col items-center gap-4 text-center ${className}`}>
      {eyebrow ? (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="eyebrow-pill"
        >
          {eyebrow}
        </motion.span>
      ) : null}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-section text-balance font-display text-ink-900"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-pretty text-base text-ink-600 md:text-lg"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  )
}
