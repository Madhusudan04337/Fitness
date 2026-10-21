import React, { useState } from 'react';

const faqs = [
  {
    question: 'I’M A COMPLETE BEGINNER. CAN I STILL JOIN HYPERFIT?',
    answer: 'Absolutely. Every new member begins with an individual 1-on-1 movement and posture screen with a senior coach to establish your baseline before touching a loaded barbell.',
  },
  {
    question: 'DO I NEED TO BOOK SESSIONS IN ADVANCE?',
    answer: 'Yes, to maintain our strict floor capacity limits (max 12 athletes per zone) and ensure zero wait times for Olympic platforms and racks, all workouts are booked via the Hyperfit app.',
  },
  {
    question: 'ARE RECOVERY AMENITIES INCLUDED IN STANDARD MEMBERSHIPS?',
    answer: 'All full memberships include access to Finnish dry saunas, cold plunge immersion tanks (calibrated to 8°C), and pneumatic compression boot lounges.',
  },
  {
    question: 'HOW DOES HYPERFIT COMPARE TO CONVENTIONAL COMMERCIAL GYMS?',
    answer: 'Commercial gyms rely on overcrowded memberships with minimal supervision. Hyperfit is a private performance hub engineered with Eleiko equipment, scientific periodization, and high coach-to-member ratios.',
  },
  {
    question: 'WHAT SHOULD I BRING TO MY FIRST ONBOARDING SESSION?',
    answer: 'Flat-soled training shoes or lifting shoes, breathable athletic wear, and a water bottle. We supply fresh towels, electrolyte hydration stations, and locker amenities.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 lg:py-16 px-6 bg-neutral-950 text-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-neutral-500 text-xs font-mono tracking-[0.25em] mb-2 uppercase">INTELLIGENCE // FREQUENTLY ASKED</div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            FREQUENTLY <span className="text-[#FF6B00]">ASKED</span>
          </h2>
          <p className="text-neutral-400 text-sm mt-2">Everything you need to know before stepping onto the Hyperfit floor.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#FF6B00]/60 bg-neutral-900/90 shadow-lg'
                    : 'border-neutral-800/80 bg-neutral-900/40 hover:border-neutral-700'
                }`}
              >
                <button
                  className="w-full text-left p-6 font-bold flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`text-base sm:text-lg tracking-wide ${isOpen ? 'text-[#FF6B00]' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-sm shrink-0 transition-colors ${
                      isOpen ? 'bg-[#FF6B00] text-black font-black' : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-neutral-300 text-sm leading-relaxed border-t border-neutral-800/60 mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
