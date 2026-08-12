import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import WhatsAppButton from './WhatsAppButton'
import { navLinks, waMessages } from '../config/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ivory/85 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="container-site flex items-center justify-between gap-4 py-4">
        <a href="#inicio" className="font-display text-2xl leading-none text-ink-900">
          <span className="text-blush-600">Studio</span> Eduarda Cavalcanti
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm uppercase tracking-[0.16em] text-ink-600 transition-colors hover:text-blush-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <WhatsAppButton message={waMessages.generic} size="sm" label="AGENDAR" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-100 bg-white text-ink-900 md:hidden"
        >
          {open ? <FiX className="text-xl" aria-hidden="true" /> : <FiMenu className="text-xl" aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-ivory md:hidden"
          >
            <ul className="container-site flex flex-col gap-1 pb-6 pt-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-sm uppercase tracking-[0.16em] text-ink-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <WhatsAppButton message={waMessages.generic} className="btn-block-sm" />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
