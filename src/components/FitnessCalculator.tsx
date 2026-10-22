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
    if (val < 18.5) return { label: 'UNDERWEIGHT', color: 'text-blue-400', tip: 'Focus on nutritious, calorie-dense foods and progressive strength training to build healthy muscle.' };
    if (val < 25) return { label: 'HEALTHY WEIGHT', color: 'text-emerald-500', tip: 'Healthy balance! Focus on regular strength training, cardiovascular fitness, and good recovery habits.' };
    if (val < 30) return { label: 'OVERWEIGHT', color: 'text-[var(--theme-accent)]', tip: 'Focus on high-protein nutrition, consistent weight training, and 20 to 30 minutes of daily movement.' };
    return { label: 'HIGH BMI', color: 'text-red-400', tip: 'Focus on sustainable lifestyle adjustments, guided low-impact exercise, and steady, manageable daily progress.' };
  };

  const category = bmi ? getCategory(bmi) : null;

  return (
    <section id="calculator" className="py-16 lg:py-24 px-6 bg-[var(--theme-bg)] text-[var(--theme-text-main)] overflow-hidden transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        {/* Header Block */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[var(--theme-accent)] text-xs font-mono tracking-[0.25em] mb-2 uppercase font-semibold"
          >
            FITNESS TOOLS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl sm:text-5xl font-black tracking-tight"
          >
            BMI <span className="text-[var(--theme-accent)]">CALCULATOR</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="text-[var(--theme-text-muted)] text-sm mt-2 font-light"
          >
            Calculate your Body Mass Index and receive actionable guidance for your training goals.
          </motion.p>
        </div>

        {/* Interactive Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="p-8 sm:p-10 rounded-2xl bg-[var(--theme-surface)] border border-[var(--theme-border)] shadow-xl backdrop-blur-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col gap-2 text-left"
            >
              <label className="text-xs text-[var(--theme-text-muted)] font-mono font-bold uppercase tracking-wider">Weight (kg)</label>
              <input
                type="number"
                placeholder="75"
                className="p-4 bg-[var(--theme-bg)] border border-[var(--theme-border)] rounded-xl focus:border-[var(--theme-accent)] outline-none text-[var(--theme-text-main)] text-lg font-mono transition-colors"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col gap-2 text-left"
            >
              <label className="text-xs text-[var(--theme-text-muted)] font-mono font-bold uppercase tracking-wider">Height (cm)</label>
              <input
                type="number"
                placeholder="178"
                className="p-4 bg-[var(--theme-bg)] border border-[var(--theme-border)] rounded-xl focus:border-[var(--theme-accent)] outline-none text-[var(--theme-text-main)] text-lg font-mono transition-colors"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </motion.div>
          </div>

          <motion.button
            onClick={calculateBMI}
            className="font-mono w-full bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] px-6 py-4 font-black rounded-xl text-sm tracking-widest uppercase hover:brightness-110 transition-all cursor-pointer shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            CALCULATE YOUR BMI
          </motion.button>

          {bmi && category && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 p-6 rounded-xl bg-[var(--theme-bg)] border border-[var(--theme-border)] flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div>
                <div className="text-xs font-mono text-[var(--theme-text-muted)] mb-1">YOUR BMI</div>
                <div className="text-5xl font-black text-[var(--theme-accent)] font-mono tracking-tight">{bmi.toFixed(1)}</div>
                <div className={`text-xs font-mono font-bold mt-1 ${category.color}`}>
                  {category.label}
                </div>
              </div>
              <div className="flex-1 sm:border-l sm:border-[var(--theme-border)] sm:pl-6 text-left">
                <div className="text-xs font-mono text-[var(--theme-text-muted)] uppercase tracking-wider mb-1">TRAINING TIP</div>
                <p className="text-[var(--theme-text-main)] text-sm leading-relaxed">{category.tip}</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
