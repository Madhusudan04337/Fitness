import React from 'react';

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-8 px-6 py-4 border-b border-neutral-800 bg-neutral-950">
      <a href="/" className="text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0">
        HYPERFIT
      </a>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
        <a href="#about" className="hover:text-white transition-colors whitespace-nowrap shrink-0">ABOUT</a>
        <a href="#services" className="hover:text-white transition-colors whitespace-nowrap shrink-0">SERVICES</a>
        <a href="#pricing" className="hover:text-white transition-colors whitespace-nowrap shrink-0">PRICING</a>
        <a href="#testimonials" className="hover:text-white transition-colors whitespace-nowrap shrink-0">TESTIMONIALS</a>
        <a href="#faq" className="hover:text-white transition-colors whitespace-nowrap shrink-0">FAQ</a>
      </nav>
      <div className="flex items-center gap-3 shrink-0">
        <a href="#join" className="px-4 py-2 text-xs font-bold text-black bg-[#FF6B00] rounded-sm hover:bg-[#FFA500] transition-colors whitespace-nowrap shrink-0">
          JOIN NOW
        </a>
      </div>
    </header>
  );
}
