import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/**
 * Reveal — anima o conteúdo ao entrar na viewport (uma vez).
 * Uso: <Reveal delay={0.1} className="...">...</Reveal>
 */
export function Reveal({ children, delay = 0, className = '' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/**
 * StaggerContainer — pai que libera os filhos em sequência.
 * Uso: <StaggerContainer className="grid ..."><StaggerItem>...</StaggerItem></StaggerContainer>
 */
export function StaggerContainer({ children, className = '', stagger = 0.08 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduce ? 0 : stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * StaggerItem — item individual dentro de um StaggerContainer.
 */
export function StaggerItem({ children, className = '' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
