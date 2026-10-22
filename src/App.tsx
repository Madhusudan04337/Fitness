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

          {/* Page 02: About & Indiranagar Hub */}
          <FoldSection
            id="about"
            pageIndex={2}
            totalPages={10}
            category="About Us"
            title="A Place to Belong"
            nextId="services"
            nextLabel="SCROLL TO SERVICES"
          >
            <CompanyTrustAndAbout />
          </FoldSection>

          {/* Page 03: Services Matrix */}
          <FoldSection
            id="services"
            pageIndex={3}
            totalPages={10}
            category="Training & Recovery"
            title="Our Services"
            nextId="showcase"
            nextLabel="SCROLL TO COMMUNITY"
          >
            <Services />
          </FoldSection>

          {/* Page 04: Lifestyle & Ecosystem */}
          <FoldSection
            id="showcase"
            pageIndex={4}
            totalPages={10}
            category="Community & Wellness"
            title="Beyond The Gym"
            nextId="pricing"
            nextLabel="SCROLL TO PRICING"
          >
            <ServicesShowcase />
          </FoldSection>

          {/* Page 05: Pricing Protocols */}
          <FoldSection
            id="pricing"
            pageIndex={5}
            totalPages={10}
            category="Memberships"
            title="Transparent Pricing"
            nextId="testimonials"
            nextLabel="SCROLL TO MEMBER STORIES"
          >
            <Pricing />
          </FoldSection>

          {/* Page 06: Member Stories */}
          <FoldSection
            id="testimonials"
            pageIndex={6}
            totalPages={10}
            category="Community Reviews"
            title="Member Stories"
            nextId="coaches"
            nextLabel="SCROLL TO COACHES"
          >
            <Testimonials />
          </FoldSection>

          {/* Page 07: Master Faculty */}
          <FoldSection
            id="coaches"
            pageIndex={7}
            totalPages={10}
            category="Trainers"
            title="Our Coaches"
            nextId="calculator"
            nextLabel="SCROLL TO BMI CALCULATOR"
          >
            <Coaches />
          </FoldSection>

          {/* Page 08: Performance Metric */}
          <FoldSection
            id="calculator"
            pageIndex={8}
            totalPages={10}
            category="Health Tools"
            title="BMI Calculator"
            nextId="faq"
            nextLabel="SCROLL TO FAQ"
          >
            <FitnessCalculator />
          </FoldSection>

          {/* Page 09: Intelligence & FAQ */}
          <FoldSection
            id="faq"
            pageIndex={9}
            totalPages={10}
            category="Help & Support"
            title="Frequently Asked Questions"
            nextId="contact"
            nextLabel="SCROLL TO CONTACT"
          >
            <FAQ />
          </FoldSection>

          {/* Page 10: Global Hubs & Footer */}
          <FoldSection
            id="contact"
            pageIndex={10}
            totalPages={10}
            category="Locations"
            title="Bangalore & Dubai"
            showBottomArrow={false}
          >
            <Footer />
          </FoldSection>
        </main>
      </div>
    </ThemeProvider>
  );
}
