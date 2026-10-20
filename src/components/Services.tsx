import React from 'react';

const services = [
  { title: 'PERSONAL TRAINING', description: 'One-on-one coaching, fully focused on your goals, fitness level, and progress.', id: '01' },
  { title: 'NUTRITION GUIDANCE', description: 'Simple, practical food advice that works in real life. No extremes, just balance.', id: '02' },
  { title: 'STRENGTH & CONDITIONING', description: 'Structured programs to build muscle, boost stamina, and stay injury-free.', id: '03' },
  { title: 'YOGA & FLEXIBILITY', description: 'Find balance in your body and mind with calming, mobility-focused sessions.', id: '04' },
  { title: 'PROGRESS TRACKING', description: 'We track what matters — so you can see how far you have come, and where you are headed next.', id: '05' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
            <div className="text-neutral-400 text-sm mb-2">OUR SERVICES</div>
            <h2 className="text-4xl font-bold mb-4">NOT JUST WORKOUTS.<br/>A WHOLE APPROACH.</h2>
            <div className="text-neutral-400">[ 01 - 05 SERVICES MATRIX ]</div>
        </div>
        <div className="flex flex-col gap-6">
          {services.map((service) => (
            <div key={service.id} className="flex items-center justify-between p-6 border border-neutral-800 bg-neutral-900 rounded-sm">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-[#FF6B00]">{service.title}</h3>
                <p className="text-neutral-300">{service.description}</p>
              </div>
              <div className="text-4xl font-mono font-bold text-neutral-600 ml-8">{service.id}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
