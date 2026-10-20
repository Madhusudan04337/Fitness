import React from 'react';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 px-6 text-center text-white bg-neutral-950">
      <div className="text-sm text-neutral-400 mb-4 tracking-widest">
        INDEX: 001 // ATHLETIC ARCHITECTURE // NO PRESSURE. NO HYPE.
      </div>
      <h1 className="text-6xl font-bold tracking-tighter mb-4">
        TRAIN LIKE<br />
        <span className="text-[#FF6B00]">YOU</span> PERFORM
      </h1>
      <p className="text-lg text-neutral-300 max-w-xl mb-8">
        Just simple, effective workouts tailored to your goals — guided by real people who care.
      </p>
      <div className="flex items-center gap-4">
        <button className="px-6 py-3 bg-[#FF6B00] text-black font-bold rounded-sm hover:bg-[#FFA500] transition-colors">
          CONTACT US
        </button>
        <button className="px-6 py-3 border border-neutral-700 text-white font-bold rounded-sm hover:bg-neutral-800 transition-colors">
          WATCH VIDEO
        </button>
      </div>
    </section>
  );
}
