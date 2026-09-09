/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-teal-200 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <About />
        <Testimonials />
        <Location />
      </main>
      <Footer />

      {/* Floating WhatsApp Balloon */}
      <a
        href="https://wa.me/5585988307687"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar consulta pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-teal-700 hover:bg-teal-800 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-teal-400/40"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
      </a>
    </div>
  );
}

