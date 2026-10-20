import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-400 py-12 px-6 border-t border-neutral-900">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-white font-bold mb-4">HYPERFIT</h3>
          <p className="text-sm">Engineered for extreme performance, progressive strength conditioning, and uncompromising recovery. Transform your physical threshold.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">LOCATIONS</h4>
          <div className="text-sm mb-4">
            <div className="font-bold text-white">BANGALORE, INDIA</div>
            <div>Level 4, Zenith Tower, Indiranagar</div>
          </div>
          <div className="text-sm">
            <div className="font-bold text-white">DUBAI, UAE</div>
            <div>Marina Gate II, Dubai Marina</div>
          </div>
        </div>
        <div>
            <h4 className="text-white font-bold mb-4">EXPLORE</h4>
            <ul className="text-sm space-y-2">
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Training Programs</a></li>
                <li><a href="#pricing">Memberships</a></li>
            </ul>
        </div>
        <div>
            <h4 className="text-white font-bold mb-4">NEWSLETTER</h4>
            <input type="email" placeholder="Enter email" className="w-full bg-neutral-900 p-2 text-sm text-white mb-2" />
            <button className="bg-[#FF6B00] text-black text-sm font-bold w-full py-2">SUBSCRIBE</button>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-neutral-900 text-xs text-center">
        © 2025 HYPERFIT INC. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
