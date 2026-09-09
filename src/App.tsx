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
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-teal-200 selection:text-teal-900 pb-20 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <About />
        <Testimonials />
        <Location />
      </main>
      <Footer />

      {/* Floating Button Mobile */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <a
          href="https://wa.me/5585988307687"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-[#25D366] text-white px-6 py-4 rounded-full font-bold shadow-[0_8px_30px_rgb(0,0,0,0.2)] active:scale-95 transition-transform"
        >
          <MessageCircle className="w-6 h-6 mr-2" />
          Agendar consulta
        </a>
      </div>
    </div>
  );
}

