import React from 'react';
import { motion } from 'motion/react';

const services = [
  { title: 'PERSONAL TRAINING', description: 'One-on-one coaching, fully focused on your goals, fitness level, and progress.', id: '01', image: '/assets/aistudio/young-fitness-man-studio_d2399ba3.jpg' },
  { title: 'NUTRITION GUIDANCE', description: 'Simple, practical food advice that works in real life. No extremes, just balance.', id: '02', image: '/assets/aistudio/side-view-man-doing-burpees_bcdc0943.jpg' },
  { title: 'STRENGTH & CONDITIONING', description: 'Structured programs to build muscle, boost stamina, and stay injury-free.', id: '03', image: '/assets/aistudio/full-body-portrait-athletic-shirtless-male-doing-biceps-workouts-with-dumbbells-gym-club_7e7045cb.jpg' },
  { title: 'YOGA & FLEXIBILITY', description: 'Find balance in your body and mind with calming, mobility-focused sessions.', id: '04', image: '/assets/aistudio/back-view-woman-doing-yoga-outdoors_fa4801ee.jpg' },
  { title: 'PROGRESS TRACKING', description: 'We track what matters — so you can see how far you have come, and where you are headed next.', id: '05', image: '/assets/aistudio/young-sportive-man-is-doing-exercises-with-dumbbells-empty-gym-club_a3ab2b9a.jpg' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left - Static Hero part */}
        <div className="sticky top-24">
            <div className="text-neutral-400 text-sm mb-4 tracking-widest">OUR SERVICES</div>
            <h2 className="text-5xl font-bold mb-6">NOT JUST WORKOUTS.<br/>A WHOLE APPROACH.</h2>
            <div className="text-neutral-400 text-lg">We provide structured programs for every level.</div>
        </div>

        {/* Right - Sticky scrollable list */}
        <div className="flex flex-col gap-12">
          {services.map((service) => (
            <motion.div key={service.id} className="border-b border-neutral-800 pb-12 last:border-0" whileHover={{ x: 10 }}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-bold text-[#FF6B00]">{service.title}</h3>
                <span className="text-5xl font-mono font-bold text-neutral-700">{service.id}</span>
              </div>
              <p className="text-neutral-300 text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
