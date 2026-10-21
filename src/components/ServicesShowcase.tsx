import React from 'react';
import { motion } from 'motion/react';

const features = [
  { id: '01', title: 'COMMUNITY EVENTS', description: 'Join weekly group sessions and connect with fellow members in our vibrant community.' },
  { id: '02', title: 'VIRTUAL WORKSHOPS', description: 'Expert-led online workshops covering everything from mental health to recovery techniques.' },
  { id: '03', title: 'MEMBERSHIP PERKS', description: 'Enjoy exclusive discounts on partner products, gear, and wellness services.' },
];

export default function ServicesShowcase() {
  return (
    <section id="showcase" className="py-12 lg:py-16 px-6 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side - Hero Content */}
        <div>
          <div className="text-neutral-500 text-xs font-mono tracking-[0.25em] mb-3 uppercase">Beyond the Gym // Lifestyle</div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 tracking-tight leading-[1.05]">
            A WHOLE <br />
            <span className="text-[#FF6B00]">LIFE</span> APPROACH.
          </h2>
          <p className="text-neutral-400 mb-8 max-w-md text-base md:text-lg leading-relaxed">
            We believe structured training is the foundation, but high-impact recovery, nutritional discipline, and community form the actual ecosystem of human performance.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#coaches"
              className="px-7 py-3.5 bg-[#FF6B00] text-black font-bold rounded-sm text-xs tracking-wider uppercase hover:bg-[#FFA500] transition-colors"
            >
              MEET OUR COACHES
            </a>
            <a
              href="#testimonials"
              className="px-7 py-3.5 border border-neutral-700 bg-neutral-900/60 text-white font-bold rounded-sm text-xs tracking-wider uppercase hover:bg-neutral-800 transition-colors"
            >
              MEMBER VOICES
            </a>
          </div>
        </div>

        {/* Right Side - List */}
        <div className="flex flex-col gap-5">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="group p-6 rounded-xl border border-neutral-800/80 bg-neutral-900/40 hover:bg-neutral-900/80 transition-all cursor-default"
              whileHover={{ x: 8, borderColor: 'rgba(255,107,0,0.4)' }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-black text-white group-hover:text-[#FF6B00] transition-colors">
                  {feature.title}
                </h3>
                <span className="text-4xl font-mono font-bold text-neutral-700 group-hover:text-white transition-colors">
                  {feature.id}
                </span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
