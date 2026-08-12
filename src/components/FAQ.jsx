import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'
import WhatsAppButton from './WhatsAppButton'
import SectionHeading from './SectionHeading'
import { StaggerContainer, StaggerItem } from './motion/Reveal'
import { faq, waMessages } from '../config/site'

function FaqItem({ item, index, open, onToggle }) {
  const isOpen = open === index
  return (
    <div
      className={`overflow-hidden rounded-2xl bg-white ring-1 transition-all duration-500 ${
        isOpen ? 'ring-blush-300/70 shadow-[0_24px_50px_-34px_rgba(209,77,115,0.5)]' : 'ring-ink-900/5'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-xl text-ink-900 md:text-2xl">
          {item.question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen ? 'rotate-45 bg-blush-600 text-white' : 'bg-blush-100 text-blush-600'
          }`}
        >
          <FiPlus aria-hidden="true" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-pretty text-sm text-ink-600 md:text-base">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-cream/70 py-20 md:py-28">
      <div className="container-site max-w-3xl">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Tudo o que você precisa saber antes de agendar."
        />

        <StaggerContainer className="mt-12 space-y-4">
          {faq.map((item, i) => (
            <StaggerItem key={item.question}>
              <FaqItem
                item={item}
                index={i}
                open={open}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <p className="text-sm text-ink-600">
            Não encontrou sua resposta? Fale com a gente no WhatsApp.
          </p>
          <div className="mt-4 flex justify-center">
            <WhatsAppButton
              message={waMessages.generic}
              label="FALAR NO WHATSAPP"
              className="btn-block-sm sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
