import React from 'react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-neutral-950 text-white">
        <div className="max-w-5xl mx-auto">
            <div className="text-neutral-400 text-sm mb-2">TESTIMONIALS</div>
            <h2 className="text-4xl font-bold mb-4">BECAUSE STAYING FIT<br/>SHOULD FEEL GOOD.</h2>
            <p className="text-neutral-400 mb-12">Just a place where you can grow — your way.</p>

            <div className="p-8 border border-neutral-800 bg-neutral-900 rounded-sm">
                <div className="font-bold text-lg mb-1">DEEPA KHAN</div>
                <div className="text-sm text-neutral-400 mb-4">May 29, 2024</div>
                <p className="text-lg italic text-neutral-200 mb-4">"When I joined, I was nervous. But the trainers never made me feel behind or out of place. They understood my goals and gave me the space to grow."</p>
                <div className="text-[#FF6B00]">★★★★★</div>
            </div>
        </div>
    </section>
  );
}
