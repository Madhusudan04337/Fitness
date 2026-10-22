/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CompanyTrustAndAbout from './components/CompanyTrustAndAbout';
import Services from './components/Services';
import ServicesShowcase from './components/ServicesShowcase';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Coaches from './components/Coaches';
import FeedbackSection from './components/FeedbackSection';
import FitnessCalculator from './components/FitnessCalculator';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FoldSection from './components/FoldSection';
import DesktopPageNav from './components/DesktopPageNav';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--theme-bg)] font-sans text-[var(--theme-text-main)] overflow-x-hidden transition-colors duration-300">
        {/* Fixed Header with Glassmorphism & Theme Switcher */}
        <Header />

        {/* Floating Desktop Page Navigator HUD */}
        <DesktopPageNav />

        {/* Main Page Stack */}
        <main className="relative flex flex-col w-full">
          {/* Page 01: Hero Cover */}
          <Hero />

          {/* Section 01: About & Indiranagar Hub */}
          <FoldSection
            id="about"
            pageIndex={1}
            totalPages={5}
            category="About Us"
            title="A Place to Belong"
          >
            <CompanyTrustAndAbout />
          </FoldSection>

          {/* Section 02: Services Matrix & Community Ecosystem */}
          <FoldSection
            id="services"
            pageIndex={2}
            totalPages={5}
            category="Training & Recovery"
            title="Our Services"
          >
            <Services />
            <ServicesShowcase />
          </FoldSection>

          {/* Section 03: Pricing Protocols */}
          <FoldSection
            id="pricing"
            pageIndex={3}
            totalPages={5}
            category="Memberships"
            title="Transparent Pricing"
          >
            <Pricing />
          </FoldSection>

          {/* Section 04: Member Stories & Coaches */}
          <FoldSection
            id="testimonials"
            pageIndex={4}
            totalPages={5}
            category="Athlete Voices & Coaches"
            title="Member Stories"
          >
            <Testimonials />
            <div id="coaches">
              <Coaches />
            </div>
            <div id="feedback">
              <FeedbackSection />
            </div>
          </FoldSection>

          {/* Section 05: Intelligence, Tools & Global Hubs */}
          <FoldSection
            id="faq"
            pageIndex={5}
            totalPages={5}
            category="FAQ & Support"
            title="Frequently Asked Questions"
          >
            <FAQ />
            <div id="calculator">
              <FitnessCalculator />
            </div>
            <div id="contact">
              <Footer />
            </div>
          </FoldSection>
        </main>
      </div>
    </ThemeProvider>
  );
}
