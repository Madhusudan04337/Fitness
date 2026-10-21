import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  const hoverEffect = { hover: { scale: 1.05 }, tap: { scale: 0.95 } };
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center text-white bg-neutral-950">
      <img src="/assets/aistudio/young-beautiful-woman-doing-exercise-with-bar-gym-athletic-girl-doing-workout-fitness-center-dark-background-gym-dressed-sport-clothes_7870b930.jpg" alt="Hero background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="relative z-10 flex flex-col items-center">
        <div className="text-sm text-neutral-400 mb-6 tracking-[0.2em] uppercase">
          Index: 001 // Athletic Architecture // No Pressure. No Hype.
        </div>
        <h1 className="text-8xl font-extrabold tracking-tighter mb-6 leading-none">
          TRAIN LIKE<br />
          <span className="text-[#FF6B00]">YOU</span> PERFORM
        </h1>
        <p className="text-xl text-neutral-300 max-w-2xl mb-10 leading-relaxed">
          Just simple, effective workouts tailored to your goals — guided by real people who care.
        </p>
        <div className="flex items-center justify-center gap-6">
          <motion.button className="px-10 py-4 bg-[#FF6B00] text-black font-bold rounded-sm text-lg hover:bg-[#FFA500] transition-colors" {...hoverEffect}>
            CONTACT US
          </motion.button>
          <motion.button className="px-10 py-4 border border-neutral-700 text-white font-bold rounded-sm text-lg hover:bg-neutral-800 transition-colors" {...hoverEffect}>
            WATCH VIDEO
          </motion.button>
        </div>
      </div>
    </section>
  );
}
