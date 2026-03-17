/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from './i18n/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Features from './components/Features';
import PaymentModes from './components/PaymentModes';
import Benefits from './components/Benefits';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import AccessControl from './components/AccessControl';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Support from './components/Support';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans text-[var(--color-body)] selection:bg-[var(--color-primary)] selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Partners />
          <Features />
          <PaymentModes />
          <Benefits />
          <Stats />
          <Pricing />
          <AccessControl />
          <Testimonials />
          <FAQ />
          <Support />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
