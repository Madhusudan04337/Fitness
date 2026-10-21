import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function FitnessCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    if (weight && height) {
      const h = parseFloat(height) / 100;
      setBmi(parseFloat(weight) / (h * h));
    }
  };

  return (
    <section className="py-24 px-6 bg-neutral-950 text-white border-y border-neutral-900">
      <div className="max-w-2xl mx-auto text-center p-10 bg-neutral-900 border border-neutral-800 rounded-sm">
        <h2 className="text-3xl font-bold mb-8 tracking-tighter">FITNESS METRICS TOOL</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex flex-col gap-2 text-left">
            <label className="text-xs text-neutral-400 font-bold uppercase tracking-widest">Weight (kg)</label>
            <input type="number" placeholder="75" className="p-4 bg-neutral-950 border border-neutral-800 rounded-sm focus:border-[#FF6B00] outline-none transition-colors" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div className="flex flex-col gap-2 text-left">
            <label className="text-xs text-neutral-400 font-bold uppercase tracking-widest">Height (cm)</label>
            <input type="number" placeholder="178" className="p-4 bg-neutral-950 border border-neutral-800 rounded-sm focus:border-[#FF6B00] outline-none transition-colors" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
        </div>
        <motion.button onClick={calculateBMI} className="w-full bg-[#FF6B00] text-black px-6 py-4 font-bold rounded-sm text-lg hover:bg-[#FFA500] transition-colors" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>Calculate BMI</motion.button>
        {bmi && (
          <div className="mt-8 p-6 bg-neutral-950 border border-neutral-800 rounded-sm">
            <div className="text-sm text-neutral-400 mb-1">YOUR RESULT</div>
            <div className="text-5xl font-extrabold text-[#FF6B00]">{bmi.toFixed(1)}</div>
          </div>
        )}
      </div>
    </section>
  );
}
