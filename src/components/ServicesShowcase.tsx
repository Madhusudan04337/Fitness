import React from 'react';
import { motion } from 'motion/react';

const features = [
  { id: '01', title: 'COMMUNITY EVENTS', description: 'Join weekly group sessions and connect with fellow members in our vibrant community.' },
  { id: '02', title: 'VIRTUAL WORKSHOPS', description: 'Expert-led online workshops covering everything from mental health to recovery techniques.' },
  { id: '03', title: 'MEMBERSHIP PERKS', description: 'Enjoy exclusive discounts on partner products, gear, and wellness services.' },
];

export default function ServicesShowcase() {
  return (
    <section className="py-24 px-6 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side - Hero Content */}
        <div>
          <div className="text-neutral-400 text-xs tracking-widest mb-4 uppercase">Beyond the gym</div>
          <h2 className="text-5xl font-bold mb-6">A WHOLE <br/> <span className="text-[#FF6B00]">LIFE</span> APPROACH.</h2>
          <p className="text-neutral-400 mb-8 max-w-md">We believe fitness is just one piece of the puzzle. Discover how our holistic approach supports your overall well-being.</p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-[#FF6B00] text-black font-bold rounded-sm">LEARN MORE</button>
            <button className="px-6 py-3 border border-neutral-700 text-white font-bold rounded-sm">READ OUR BLOG</button>
          </div>
        </div>

        {/* Right Side - List */}
        <div className="flex flex-col gap-6">
          {features.map((feature) => (
            <motion.div key={feature.id} className="border-b border-neutral-800 pb-8 last:border-0" whileHover={{ x: 10 }}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <span className="text-4xl font-mono font-bold text-neutral-700">{feature.id}</span>
              </div>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
