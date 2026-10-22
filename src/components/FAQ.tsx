import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: 'I’M A COMPLETE BEGINNER. CAN I STILL JOIN HYPERFIT?',
    answer: 'Absolutely! Beginners are always welcome. Our personal coaches walk you through proper form, safe lifting techniques, and customize every workout to your starting fitness level.',
  },
  {
    question: 'DO I NEED TO BOOK SESSIONS IN ADVANCE?',
    answer: 'To ensure our gym floor is never overcrowded and equipment is always readily available, we recommend reserving your preferred workout time in our mobile app.',
  },
  {
    question: 'ARE RECOVERY AMENITIES INCLUDED IN STANDARD MEMBERSHIPS?',
    answer: 'Yes! Access to our dry cedar sauna, cold plunge tubs, and recovery lounge is included in all memberships.',
  },
  {
    question: 'HOW DOES HYPERFIT COMPARE TO CONVENTIONAL COMMERCIAL GYMS?',
    answer: 'Unlike crowded commercial gyms, we cap our active member count so you never wait for equipment. You receive dedicated attention from experienced coaches in a clean, welcoming environment.',
  },
  {
    question: 'WHAT SHOULD I BRING TO MY FIRST VISIT?',
    answer: 'Just wear comfortable workout clothes, athletic shoes, and bring a water bottle. We provide complimentary shower amenities, clean towels, and secure lockers.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 lg:py-24 px-6 bg-[var(--theme-bg)] text-[var(--theme-text-main)] overflow-hidden transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[var(--theme-accent)] text-xs font-mono tracking-[0.25em] mb-2 uppercase font-semibold"
          >
            COMMON QUESTIONS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl sm:text-5xl font-black tracking-tight"
          >
            FREQUENTLY <span className="text-[var(--theme-accent)]">ASKED</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="text-[var(--theme-text-muted)] text-sm mt-2 font-light"
          >
            Everything you need to know about joining and training with Hyperfit.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[var(--theme-accent)] bg-[var(--theme-surface)] shadow-md'
                    : 'border-[var(--theme-border)] bg-[var(--theme-surface)] hover:border-[var(--theme-accent)]/50'
                }`}
              >
                <button
                  className="w-full text-left p-6 font-bold flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`font-heading text-base sm:text-lg tracking-wide ${isOpen ? 'text-[var(--theme-accent)]' : 'text-[var(--theme-text-main)]'}`}>
                    {faq.question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-sm shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] font-black'
                        : 'bg-[var(--theme-bg)] text-[var(--theme-text-muted)] border border-[var(--theme-border)]'
                    }`}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-6 pt-1 text-[var(--theme-text-muted)] text-sm leading-relaxed border-t border-[var(--theme-border)] mt-1"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
