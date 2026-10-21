import React from 'react';
import { motion } from 'motion/react';

export default function StickyScrollSection() {
  const items = [
    { title: "THE PHILOSOPHY", desc: "We believe in progress over perfection. Every session is designed to help you build strength, confidence, and resilience on your own terms." },
    { title: "THE SPACE", desc: "An environment curated for focus. No distractions, just high-performance equipment and a community that pushes you." },
    { title: "THE RESULTS", desc: "Measurable growth. Through our structured approach, you'll see changes not just in your physique, but in your daily performance." },
  ];

  return (
    <section className="flex flex-col md:flex-row h-screen bg-neutral-950 overflow-hidden">
      {/* Sticky Left Image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-screen sticky top-0">
        <img 
          src="/assets/aistudio/young-fitness-man-studio_d2399ba3.jpg" 
          alt="Sticky Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Scrolling Right Content */}
      <div className="w-full md:w-1/2 overflow-y-auto scrollbar-hide py-24 px-12">
        <div className="flex flex-col gap-24">
          {items.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ amount: 0.5 }}
              className="min-h-[50vh] flex flex-col justify-center"
            >
              <h2 className="text-5xl font-extrabold mb-6 text-white tracking-tight">{item.title}</h2>
              <p className="text-xl text-neutral-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
