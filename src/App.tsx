/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
import FoldSection from './components/FoldSection';
import DesktopPageNav from './components/DesktopPageNav';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-100 overflow-x-hidden selection:bg-[#FF6B00] selection:text-black">
      {/* Fixed Header with Glassmorphism */}
      <Header />

      {/* Floating Desktop Page Navigator HUD */}
      <DesktopPageNav />

      {/* Main Page Stack: Each section folds like turning pages in an editorial dossier */}
      <main className="relative flex flex-col w-full">
        {/* Page 01: Hero Cover */}
        <Hero />

        {/* Page 02: About & Indiranagar Hub */}
        <FoldSection
          id="about"
          pageIndex={2}
          totalPages={9}
          category="Philosophy & Space"
          title="A Place to Belong"
          nextId="services"
          nextLabel="FOLD TO SERVICES MATRIX"
        >
          <CompanyTrustAndAbout />
        </FoldSection>

        {/* Page 03: Services Matrix */}
        <FoldSection
          id="services"
          pageIndex={3}
          totalPages={9}
          category="Training Suite"
          title="01 - 05 Services Matrix"
          nextId="showcase"
          nextLabel="FOLD TO BEYOND THE GYM"
        >
          <Services />
        </FoldSection>

        {/* Page 04: Lifestyle & Ecosystem */}
        <FoldSection
          id="showcase"
          pageIndex={4}
          totalPages={9}
          category="Lifestyle Ecosystem"
          title="Beyond The Gym"
          nextId="testimonials"
          nextLabel="FOLD TO MEMBER VOICES"
        >
          <ServicesShowcase />
        </FoldSection>

        {/* Page 05: Member Stories */}
        <FoldSection
          id="testimonials"
          pageIndex={5}
          totalPages={9}
          category="Athletic Proof"
          title="Member Voices"
          nextId="coaches"
          nextLabel="FOLD TO MASTER FACULTY"
        >
          <Testimonials />
        </FoldSection>

        {/* Page 06: Master Faculty */}
        <FoldSection
          id="coaches"
          pageIndex={6}
          totalPages={9}
          category="Master Faculty"
          title="Athletic Directors"
          nextId="calculator"
          nextLabel="FOLD TO METRICS TOOL"
        >
          <Coaches />
        </FoldSection>

        {/* Page 07: Performance Metric */}
        <FoldSection
          id="calculator"
          pageIndex={7}
          totalPages={9}
          category="Telemetry"
          title="Physiology Engine"
          nextId="faq"
          nextLabel="FOLD TO FREQUENTLY ASKED"
        >
          <FitnessCalculator />
        </FoldSection>

        {/* Page 08: Intelligence & FAQ */}
        <FoldSection
          id="faq"
          pageIndex={8}
          totalPages={9}
          category="Intelligence"
          title="Frequently Asked"
          nextId="contact"
          nextLabel="FOLD TO GLOBAL HUBS"
        >
          <FAQ />
        </FoldSection>

        {/* Page 09: Global Hubs & Footer */}
        <FoldSection
          id="contact"
          pageIndex={9}
          totalPages={9}
          category="Global Hubs"
          title="Bangalore & Dubai"
          showBottomArrow={false}
        >
          <Footer />
        </FoldSection>
      </main>
    </div>
  );
}
