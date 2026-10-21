/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import CompanyTrustAndAbout from './components/CompanyTrustAndAbout';
import Services from './components/Services';
import ServicesShowcase from './components/ServicesShowcase';
import Testimonials from './components/Testimonials';
import Coaches from './components/Coaches';
import FitnessCalculator from './components/FitnessCalculator';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-100 overflow-x-hidden">
      <Header />
      <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}><Hero /></motion.div>
      <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}><CompanyTrustAndAbout /></motion.div>
      <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}><Services /></motion.div>
      <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}><ServicesShowcase /></motion.div>
      <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}><Testimonials /></motion.div>
      <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}><Coaches /></motion.div>
      <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}><FitnessCalculator /></motion.div>
      <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}><FAQ /></motion.div>
      <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}><Footer /></motion.div>
    </div>
  );
}
