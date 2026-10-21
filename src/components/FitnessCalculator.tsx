import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function FitnessCalculator() {
  const [weight, setWeight] = useState('75');
  const [height, setHeight] = useState('178');
  const [bmi, setBmi] = useState<number | null>(23.7);

  const calculateBMI = () => {
    if (weight && height) {
      const h = parseFloat(height) / 100;
      setBmi(parseFloat(weight) / (h * h));
    }
  };

  const getCategory = (val: number) => {
    if (val < 18.5) return { label: 'UNDERWEIGHT', color: 'text-blue-400', tip: 'Focus on hypercaloric nutrient density & progressive overload.' };
    if (val < 25) return { label: 'NORMAL / OPTIMAL', color: 'text-emerald-400', tip: 'Prime biomechanical baseline. Perfect for athletic hypertrophy.' };
    if (val < 30) return { label: 'ATHLETIC / OVERWEIGHT', color: 'text-[#FF6B00]', tip: 'Common in muscular lifters. Monitor body fat percentage via DEXA.' };
    return { label: 'HIGH MASS', color: 'text-red-400', tip: 'Target zone-2 aerobic conditioning & structured caloric deficit.' };
  };

  const category = bmi ? getCategory(bmi) : null;

  return (
    <section id="calculator" className="py-12 lg:py-16 px-6 bg-neutral-950 text-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-neutral-500 text-xs font-mono tracking-[0.25em] mb-2 uppercase">TELEMETRY // PHYSIOLOGY ENGINE</div>
          <h2 className="font-heading text-4xl sm:text-5xl font-black tracking-tight">
            FITNESS METRICS <span className="text-[#FF6B00]">TOOL</span>
          </h2>
          <p className="text-neutral-400 text-sm mt-2 font-mono text-neutral-400">Instant BMI calculation calibrated to athletic body profiles.</p>
        </div>

        <div className="p-8 sm:p-10 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs text-neutral-400 font-mono font-bold uppercase tracking-wider">Weight (kg)</label>
              <input
                type="number"
                placeholder="75"
                className="p-4 bg-neutral-950 border border-neutral-800 rounded-lg focus:border-[#FF6B00] outline-none text-white text-lg font-mono transition-colors"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs text-neutral-400 font-mono font-bold uppercase tracking-wider">Height (cm)</label>
              <input
                type="number"
                placeholder="178"
                className="p-4 bg-neutral-950 border border-neutral-800 rounded-lg focus:border-[#FF6B00] outline-none text-white text-lg font-mono transition-colors"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
          </div>

          <motion.button
            onClick={calculateBMI}
            className="font-mono w-full bg-[#FF6B00] text-black px-6 py-4 font-black rounded-lg text-sm tracking-widest uppercase hover:bg-[#FFA500] transition-colors cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            CALCULATE METRICS // RUN TELEMETRY
          </motion.button>

          {bmi && category && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-6 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div>
                <div className="text-xs font-mono text-neutral-500 mb-1">CALCULATED SCORE</div>
                <div className="text-5xl font-black text-[#FF6B00] font-mono tracking-tight">{bmi.toFixed(1)}</div>
                <div className={`text-xs font-mono font-bold mt-1 ${category.color}`}>
                  STATUS: {category.label}
                </div>
              </div>
              <div className="flex-1 sm:border-l sm:border-neutral-900 sm:pl-6 text-left">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">COACH RECOMMENDATION</div>
                <p className="text-neutral-300 text-sm leading-relaxed">{category.tip}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
