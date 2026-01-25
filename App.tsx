// App.tsx
// 【改善版】BeforeAfterをHero直下に移動（効果を先に見せる）
import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { BeforeAfter } from './components/BeforeAfter';
import { MeteoFeatures } from './components/MeteoFeatures';
import { Diagnosis } from './components/Diagnosis';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { Menu } from './components/Menu';
import { LimitedOffer } from './components/LimitedOffer';
import { Testimonials } from './components/Testimonials';
import { SalonInfo } from './components/SalonInfo';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { FAQ } from './components/FAQ';
import { SALON_INFO } from './constants';
import { Calendar } from 'lucide-react';
import { trackReservationClick } from './utils';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-700 bg-white selection:bg-pop-green selection:text-white">
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-lg border-b border-white/50 shadow-sm">
         <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="font-sans text-xl md:text-2xl font-black text-slate-800 tracking-tighter">
              <a href="#" className="flex items-center">
                peace
                <span className="ml-2 w-2 h-2 bg-pop-green rounded-full"></span>
              </a>
            </div>
            
            {/* Header Booking Buttons */}
            <div className="flex space-x-2">
              <a 
                href={SALON_INFO.bookingUrls.takayanagi}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackReservationClick('header', '高柳店')}
                className="group relative overflow-hidden bg-pop-green text-white px-4 py-2 rounded-full hover:shadow-lg transition-all active:scale-95"
              >
                <div className="flex flex-col items-center leading-none">
                  <span className="text-[10px] font-bold opacity-90 mb-0.5">高柳店</span>
                  <span className="text-xs md:text-sm font-black flex items-center">
                    予約 <Calendar size={12} className="ml-1 group-hover:animate-bounce" />
                  </span>
                </div>
              </a>
              <a 
                href={SALON_INFO.bookingUrls.hanando}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackReservationClick('header', '花堂店')}
                className="group relative overflow-hidden bg-slate-800 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all active:scale-95"
              >
                 <div className="flex flex-col items-center leading-none">
                  <span className="text-[10px] font-bold opacity-90 mb-0.5">花堂店</span>
                  <span className="text-xs md:text-sm font-black flex items-center">
                    予約 <Calendar size={12} className="ml-1 group-hover:animate-bounce" />
                  </span>
                </div>
              </a>
            </div>
         </div>
      </header>

      <main className="flex-grow pt-16">
        <Hero />
        {/* ★改善: BeforeAfterをHero直下に移動（効果を先に見せる）★ */}
        <BeforeAfter />
        <PainPoints />
        <MeteoFeatures />
        <Diagnosis />
        <WhyUs />
        <Process />
        <Menu />
        <LimitedOffer />
        <Testimonials />
        <FAQ />
        <SalonInfo />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
