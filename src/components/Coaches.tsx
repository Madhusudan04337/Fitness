import React from 'react';
import { motion } from 'motion/react';

const coaches = [
  {
    name: 'ALEX RIVERA',
    role: 'HEAD OF STRENGTH',
    expertise: 'Olympic Weightlifting & Neuromuscular Periodization',
    credentials: 'CSCS • 12+ Yrs Coaching',
    image: '/assets/aistudio/handsome-man-is-engaged-gym_62bdbfe3.jpg',
  },
  {
    name: 'SARAH JENKINS',
    role: 'MOBILITY & RECOVERY LEAD',
    expertise: 'Joint Decompression, Vinyasa & Fascial Release',
    credentials: 'FRCms • 500hr RYT Certified',
    image: '/assets/aistudio/fitness-girl-practising-yoga_a5ad19ea.jpg',
  },
  {
    name: 'MARCUS THORNE',
    role: 'METABOLIC CONDITIONING',
    expertise: 'VO2 Max Calibration, Anaerobic Threshold & Hypertrophy',
    credentials: 'EXOS Performance Specialist',
    image: '/assets/aistudio/muscular-sportsman-building-biceps-with-dumbbell_23f81afc.jpg',
  },
];

export default function Coaches() {
  return (
    <section id="coaches" className="py-12 lg:py-16 px-6 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="text-neutral-500 text-xs font-mono tracking-[0.25em] mb-2 uppercase">MASTER FACULTY // ATHLETIC DIRECTORS</div>
            <h2 className="font-heading text-4xl sm:text-5xl font-black tracking-tight">
              GUIDED BY EXPERTS,<br />
              <span className="text-[#FF6B00]">DRIVEN BY YOU.</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-sm mt-3 md:mt-0 font-mono">
            Every coach on the Hyperfit floor holds collegiate or international sports-science credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coaches.map((coach) => (
            <motion.div
              key={coach.name}
              className="group rounded-2xl border border-neutral-800/80 bg-neutral-900/40 hover:bg-neutral-900/90 overflow-hidden transition-all duration-300"
              whileHover={{ y: -8, borderColor: 'rgba(255,107,0,0.5)' }}
            >
              <div className="relative w-full h-72 overflow-hidden bg-neutral-900">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/80 border border-neutral-700/80 backdrop-blur-sm text-[10px] font-mono text-[#FF6B00] font-bold">
                  {coach.credentials}
                </div>
              </div>

              <div className="p-6 pt-2">
                <div className="text-[#FF6B00] font-mono text-xs font-bold tracking-wider mb-1 uppercase">
                  {coach.role}
                </div>
                <h3 className="font-heading text-2xl font-black text-white mb-2 tracking-tight">{coach.name}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{coach.expertise}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
