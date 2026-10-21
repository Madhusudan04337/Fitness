import React from 'react';
import { motion } from 'motion/react';

const coaches = [
  { name: 'ALEX R.', role: 'Strength Specialist', expertise: 'Powerlifting & HIIT' },
  { name: 'SARAH J.', role: 'Yoga Instructor', expertise: 'Mobility & Mindfulness' },
  { name: 'MARCUS T.', role: 'Nutritionist', expertise: 'Functional Eating' },
];

export default function Coaches() {
  return (
    <section className="py-24 px-6 bg-neutral-900 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-neutral-400 text-xs tracking-widest mb-4 uppercase">Meet the Team</div>
        <h2 className="text-4xl font-bold mb-12">GUIDED BY EXPERTS, <br/>DRIVEN BY YOU.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coaches.map((coach) => (
            <motion.div key={coach.name} className="bg-neutral-950 p-6 border border-neutral-800 rounded-sm" whileHover={{ scale: 1.02, y: -5 }}>
              <div className="w-full h-48 bg-neutral-800 mb-6 rounded-sm flex items-center justify-center text-neutral-600">Coach Photo</div>
              <h3 className="text-xl font-bold">{coach.name}</h3>
              <p className="text-[#FF6B00] text-sm mb-2">{coach.role}</p>
              <p className="text-neutral-400 text-sm">{coach.expertise}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
