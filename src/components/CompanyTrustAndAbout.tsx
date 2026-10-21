import React from 'react';
import { Award, Dumbbell, Users } from 'lucide-react';

export default function CompanyTrustAndAbout() {
  const brands = ["INVERT", "STARI", "CIRCLE", "AMARA", "NEXUS"];
  const features = [
    { icon: Award, title: "10+", subtitle: "YEARS OF EXPERIENCE" },
    { icon: Dumbbell, title: "5000+", subtitle: "TRAINING SESSIONS" },
    { icon: Users, title: "140+", subtitle: "OFFLINE & ONLINE EVENTS" },
  ];

  return (
    <section className="py-24 px-6 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <div className="text-neutral-500 text-xs tracking-widest mb-6">TRUSTED BY ENTERPRISE LEADERS</div>
        <div className="flex flex-wrap justify-center gap-8 text-neutral-400 font-bold">
          {brands.map((brand, i) => (
            <span key={brand} className="flex items-center gap-2">
              {i === 2 && <span className="w-2 h-2 rounded-full bg-[#FF6B00]"></span>}
              {brand}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="text-[#FF6B00] text-sm tracking-[0.2em] uppercase mb-4 font-semibold">Not Just a Gym.</div>
        <h2 className="text-6xl font-extrabold mb-6 tracking-tight">A PLACE TO BELONG.</h2>
        <p className="text-neutral-400 text-xl leading-relaxed max-w-2xl mx-auto">
          We're more than just a gym. We're a space built for every kind of journey — whether you're just starting or looking to push your limits. Here, it's not about perfection. It's about progress, your way.
        </p>
      </div>

      <div className="max-w-4xl mx-auto border border-neutral-800 rounded-full p-6 flex items-center justify-between mb-16 bg-neutral-900/50">
        {features.map((feature, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-4 px-4">
              <feature.icon className="w-8 h-8 text-neutral-400" />
              <div className="text-left">
                <div className="text-xl font-bold">{feature.title}</div>
                <div className="text-neutral-400 text-xs tracking-widest">{feature.subtitle}</div>
              </div>
            </div>
            {i < features.length - 1 && <div className="h-12 w-px bg-neutral-800"></div>}
          </React.Fragment>
        ))}
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
        {/* Left Column - Large Card */}
        <div className="relative overflow-hidden rounded-sm h-[400px] md:h-[500px]">
          <img src="/assets/aistudio/young-fitness-man-studio_d2399ba3.jpg" alt="Indiranagar Performance Hub" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
            <div className="text-white font-bold text-xl">INDIRANAGAR PERFORMANCE HUB</div>
            <div className="text-neutral-300 text-sm">Precision mechanical barbells & Olympic platforms</div>
          </div>
        </div>

        {/* Right Column - Stacked Cards */}
        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden rounded-sm h-[242px]">
            <img src="/assets/aistudio/full-body-portrait-athletic-shirtless-male-doing-biceps-workouts-with-dumbbells-gym-club_7e7045cb.jpg" alt="Mindful Movement" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <div className="text-[#FF6B00] font-bold text-sm mb-1">MINDFUL MOVEMENT</div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-sm h-[242px]">
            <img src="/assets/aistudio/young-sportive-man-is-doing-exercises-with-dumbbells-empty-gym-club_a3ab2b9a.jpg" alt="Restoration & Recovery" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <div className="text-[#FF6B00] font-bold text-sm mb-1">RESTORATION & RECOVERY</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
