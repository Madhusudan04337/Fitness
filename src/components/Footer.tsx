import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-950 text-neutral-400 py-12 px-6 border-t border-neutral-900">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-heading text-white font-black text-xl mb-4 tracking-tight">
            HYPER<span className="text-[#FF6B00]">FIT</span>
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed font-light">
            Engineered for extreme performance, progressive strength conditioning, and uncompromising recovery. Transform your physical threshold.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-white font-black text-sm tracking-wider uppercase mb-4">LOCATIONS</h4>
          <div className="text-sm mb-4">
            <div className="font-mono font-bold text-white text-xs">BANGALORE, INDIA</div>
            <div className="text-xs text-neutral-400 mt-0.5">Level 4, Zenith Tower, Indiranagar</div>
          </div>
          <div className="text-sm">
            <div className="font-mono font-bold text-white text-xs">DUBAI, UAE</div>
            <div className="text-xs text-neutral-400 mt-0.5">Marina Gate II, Dubai Marina</div>
          </div>
        </div>
        <div>
            <h4 className="font-heading text-white font-black text-sm tracking-wider uppercase mb-4">EXPLORE</h4>
            <ul className="text-sm space-y-2.5 font-mono text-xs">
                <li><a href="#about" className="hover:text-[#FF6B00] transition-colors">01 // About Us</a></li>
                <li><a href="#services" className="hover:text-[#FF6B00] transition-colors">02 // Training Matrix</a></li>
                <li><a href="#coaches" className="hover:text-[#FF6B00] transition-colors">03 // Master Faculty</a></li>
                <li><a href="#calculator" className="hover:text-[#FF6B00] transition-colors">04 // Metrics Tool</a></li>
            </ul>
        </div>
        <div>
            <h4 className="font-heading text-white font-black text-sm tracking-wider uppercase mb-4">NEWSLETTER</h4>
            <input type="email" placeholder="Enter athlete email" className="w-full bg-neutral-900 border border-neutral-800 p-2.5 text-xs text-white mb-2 rounded font-mono focus:border-[#FF6B00] outline-none" />
            <button className="font-mono bg-[#FF6B00] hover:bg-[#FFA500] text-black text-xs font-black w-full py-2.5 rounded uppercase tracking-wider transition-colors cursor-pointer">SUBSCRIBE // DISPATCH</button>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-neutral-900 text-xs font-mono text-center text-neutral-500">
        © 2025 HYPERFIT INC. ALL RIGHTS RESERVED. ATHLETIC ARCHITECTURE.
      </div>
    </footer>
  );
}
