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
        <div className="text-[#FF6B00] text-sm tracking-widest mb-4">NOT JUST A GYM.</div>
        <h2 className="text-5xl font-bold mb-6">A PLACE TO BELONG.</h2>
        <p className="text-neutral-400 text-lg">
          We're more than just a gym. We're a space built for every kind of journey — whether you're just starting or looking to push your limits. Here, it's not about perfection. It's about progress, your way.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <div key={i} className="p-8 bg-neutral-900 border border-neutral-800 rounded-sm flex flex-col items-center">
            <feature.icon className="w-8 h-8 text-[#FF6B00] mb-6" />
            <div className="text-5xl font-bold mb-2">{feature.title}</div>
            <div className="text-neutral-400 text-sm tracking-widest">{feature.subtitle}</div>
          </div>
        ))}
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
        {/* Left Column - Large Card */}
        <div className="relative bg-neutral-800 border border-neutral-700 rounded-sm h-[400px] md:h-[500px] flex flex-col justify-end p-6">
          <div className="text-white font-bold text-xl">INDIRANAGAR PERFORMANCE HUB</div>
          <div className="text-neutral-400 text-sm">Precision mechanical barbells & Olympic platforms</div>
        </div>

        {/* Right Column - Stacked Cards */}
        <div className="flex flex-col gap-4">
          <div className="relative bg-neutral-800 border border-neutral-700 rounded-sm h-[242px] flex flex-col justify-end p-6">
            <div className="text-[#FF6B00] font-bold text-sm mb-1">MINDFUL MOVEMENT</div>
          </div>
          <div className="relative bg-neutral-800 border border-neutral-700 rounded-sm h-[242px] flex flex-col justify-end p-6">
            <div className="text-[#FF6B00] font-bold text-sm mb-1">RESTORATION & RECOVERY</div>
          </div>
        </div>
      </div>
    </section>
  );
}
