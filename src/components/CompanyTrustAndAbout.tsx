import React from 'react';
import { motion } from 'motion/react';
import { Award, Dumbbell, Users } from 'lucide-react';

export default function CompanyTrustAndAbout() {
  const brands = ["INVERT", "STARI", "CIRCLE", "AMARA", "NEXUS"];
  const features = [
    { icon: Award, title: "10+", subtitle: "YEARS OF EXPERIENCE" },
    { icon: Dumbbell, title: "5000+", subtitle: "TRAINING SESSIONS" },
    { icon: Users, title: "140+", subtitle: "OFFLINE & ONLINE EVENTS" },
  ];

  return (
    <section id="about" className="py-12 lg:py-16 px-6 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <div className="text-neutral-500 text-xs tracking-widest mb-4 uppercase">TRUSTED BY ENTERPRISE ATHLETES & LEADERS</div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 text-neutral-400 font-bold text-sm md:text-base">
          {brands.map((brand, i) => (
            <span key={brand} className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              {i === 2 && <span className="w-2 h-2 rounded-full bg-[#FF6B00]"></span>}
              {brand}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-10">
        <div className="text-[#FF6B00] font-mono text-xs md:text-sm tracking-[0.25em] uppercase mb-2 font-semibold">Not Just a Gym.</div>
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black mb-4 tracking-tight">A PLACE TO BELONG.</h2>
        <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
          We're more than just a gym. We're a space built for every kind of journey — whether you're just starting or looking to push your limits. Here, it's not about perfection. It's about progress, your way.
        </p>
      </div>

      <div className="max-w-4xl mx-auto border border-neutral-800 rounded-full p-6 flex items-center justify-between mb-16 bg-neutral-900/40 backdrop-blur-sm">
        {features.map((feature, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-4 px-4">
              <feature.icon className="w-8 h-8 text-[#FF6B00]" />
              <div className="text-left">
                <div className="font-heading text-2xl font-black text-white">{feature.title}</div>
                <div className="text-neutral-400 font-mono text-xs tracking-wider">{feature.subtitle}</div>
              </div>
            </div>
            {i < features.length - 1 && <div className="h-12 w-px bg-neutral-800"></div>}
          </React.Fragment>
        ))}
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
        {/* Left Column - Large Card */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="group relative overflow-hidden rounded-xl h-[400px] md:h-[500px] border border-neutral-800"
        >
          <img src="/assets/aistudio/young-fitness-man-studio_d2399ba3.jpg" alt="Indiranagar Performance Hub" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8">
            <div className="font-heading text-white font-black text-2xl tracking-tight mb-1">INDIRANAGAR PERFORMANCE HUB</div>
            <div className="text-neutral-300 text-sm font-mono text-neutral-400">Precision mechanical barbells & Olympic platforms</div>
          </div>
        </motion.div>

        {/* Right Column - Stacked Cards */}
        <div className="flex flex-col gap-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-xl h-[242px] border border-neutral-800"
          >
            <img src="/assets/aistudio/full-body-portrait-athletic-shirtless-male-doing-biceps-workouts-with-dumbbells-gym-club_7e7045cb.jpg" alt="Mindful Movement" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
              <div className="font-heading text-[#FF6B00] font-black text-lg tracking-wider mb-0.5">MINDFUL MOVEMENT</div>
              <div className="text-xs text-neutral-400 font-mono">Dynamic mobility & joint longevity</div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-xl h-[242px] border border-neutral-800"
          >
            <img src="/assets/aistudio/young-sportive-man-is-doing-exercises-with-dumbbells-empty-gym-club_a3ab2b9a.jpg" alt="Restoration & Recovery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
              <div className="font-heading text-[#FF6B00] font-black text-lg tracking-wider mb-0.5">RESTORATION & RECOVERY</div>
              <div className="text-xs text-neutral-400 font-mono">Infrared saunas & pneumatic compression</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
