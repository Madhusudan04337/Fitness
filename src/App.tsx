/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-100">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
