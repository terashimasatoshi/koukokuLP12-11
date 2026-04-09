// App.tsx
// 【Phase D-5】ヘッダーをロゴのみに簡素化 (FloatingCTAと重複排除)
import React, { Suspense, lazy } from 'react';
import { Hero } from './components/Hero';
import { BeforeAfter } from './components/BeforeAfter';

// ファーストビュー以下のコンポーネントを遅延読み込み
const PainPoints = lazy(() => import('./components/PainPoints').then(m => ({ default: m.PainPoints })));
const MeteoFeatures = lazy(() => import('./components/MeteoFeatures').then(m => ({ default: m.MeteoFeatures })));
const Diagnosis = lazy(() => import('./components/Diagnosis').then(m => ({ default: m.Diagnosis })));
const WhyUs = lazy(() => import('./components/WhyUs').then(m => ({ default: m.WhyUs })));
const Process = lazy(() => import('./components/Process').then(m => ({ default: m.Process })));
const Menu = lazy(() => import('./components/Menu').then(m => ({ default: m.Menu })));
const LimitedOffer = lazy(() => import('./components/LimitedOffer').then(m => ({ default: m.LimitedOffer })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const SalonInfo = lazy(() => import('./components/SalonInfo').then(m => ({ default: m.SalonInfo })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const FloatingCTA = lazy(() => import('./components/FloatingCTA').then(m => ({ default: m.FloatingCTA })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-700 bg-white selection:bg-pop-green selection:text-white overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-lg border-b border-white/50 shadow-sm">
         <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center">
            <div className="font-sans text-xl md:text-2xl font-black text-slate-800 tracking-tighter">
              <a href="#" className="flex items-center">
                peace
                <span className="ml-2 w-2 h-2 bg-pop-green rounded-full"></span>
              </a>
            </div>
         </div>
      </header>

      <main className="flex-grow pt-16">
        <Hero />
        {/* ★改善: BeforeAfterをHero直下に移動（効果を先に見せる）★ */}
        <BeforeAfter />
        <Suspense fallback={null}>
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
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <FloatingCTA />
      </Suspense>
    </div>
  );
}

export default App;
