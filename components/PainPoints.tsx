import React from 'react';
import { PAIN_POINTS } from '../constants';
import { SectionTitle } from './SectionTitle';
import { Frown } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const PainPoints: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pop-green/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pop-cyan/10 rounded-full blur-2xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <FadeIn>
          <SectionTitle en="Problem" ja="こんなお悩みありませんか？" />
        </FadeIn>
        
        <div className="bg-pop-greenlight/50 p-6 md:p-10 rounded-[2.5rem] border-4 border-dashed border-pop-green/30">
          <ul className="space-y-4">
            {PAIN_POINTS.map((point, index) => (
              <FadeIn key={index} delay={index * 100} direction="left">
                <li className="flex items-center bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow hover:scale-[1.02] transform duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pop-greenlight flex items-center justify-center mr-4 text-pop-greenaccent">
                    <Frown size={24} strokeWidth={2.5} />
                  </div>
                  <span className="text-base md:text-lg font-bold text-slate-600 leading-snug">
                    {point}
                  </span>
                </li>
              </FadeIn>
            ))}
          </ul>
          
          <FadeIn delay={600} direction="zoom">
            <div className="mt-10 text-center">
              <div className="inline-block bg-white px-8 py-6 rounded-[2rem] shadow-xl border-4 border-pop-yellow transform rotate-1">
                <p className="font-sans text-xl md:text-2xl text-slate-800 leading-relaxed font-bold">
                  その悩み、<br className="md:hidden"/>
                  <span className="text-pop-greenaccent text-3xl mx-1 bg-pop-yellow/30 px-2 rounded">METEO（メテオ）</span>
                  が<br/>解決します！🎉
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};