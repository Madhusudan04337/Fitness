import React, { useState } from 'react';

const faqs = [
    { question: 'I’M A COMPLETE BEGINNER. CAN I STILL JOIN HYPERFIT?', answer: 'Yes! We cater to all fitness levels, from beginners to experienced athletes.' },
    { question: 'DO I NEED TO BRING ANYTHING FOR MY FIRST SESSION?', answer: 'Just comfortable workout clothes, a water bottle, and a positive attitude.' },
    { question: 'ARE PERSONAL TRAINING SESSIONS INCLUDED IN THE PLANS?', answer: 'It depends on the plan you choose. Check our pricing section for details.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-neutral-950 text-white">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">FREQUENTLY<br/>ASKED QUESTIONS</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-neutral-800 bg-neutral-900">
                        <button 
                            className="w-full text-left p-6 font-bold flex justify-between items-center"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            {faq.question}
                            <span>{openIndex === index ? '-' : '+'}</span>
                        </button>
                        {openIndex === index && (
                            <div className="p-6 pt-0 text-neutral-300">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
