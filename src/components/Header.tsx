import React from 'react';
import { motion } from 'motion/react';

export default function Header() {
  const hoverEffect = { hover: { scale: 1.05 }, tap: { scale: 0.95 } };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800/50">
      <motion.a href="/" className="font-heading text-2xl font-black tracking-tighter text-white whitespace-nowrap shrink-0" whileHover={{ scale: 1.05 }}>
        HYPER<span className="text-[#FF6B00]">FIT</span>
      </motion.a>
      <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10 font-mono text-[11px] font-bold text-neutral-300 tracking-[0.2em] uppercase">
        {["ABOUT", "SERVICES", "PRICING", "TESTIMONIALS", "FAQ"].map(item => (
          <motion.a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#FF6B00] transition-colors whitespace-nowrap shrink-0" {...hoverEffect}>
            {item}
          </motion.a>
        ))}
      </nav>
      <div className="flex items-center gap-3 shrink-0">
        <motion.a href="#services" className="font-heading px-7 py-2.5 text-xs font-black text-black bg-white rounded-full hover:bg-[#FF6B00] hover:text-white transition-all whitespace-nowrap shrink-0 tracking-wider" {...hoverEffect}>
          GET STARTED
        </motion.a>
      </div>
    </header>
  );
}
