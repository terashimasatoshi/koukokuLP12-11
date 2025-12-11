import React from 'react';
import { SectionTitle } from './SectionTitle';
import { STYLISTS } from '../constants';
import { FadeIn } from './FadeIn';

export const Stylists: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-pop-cyan/5">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionTitle en="Stylist" ja="私たちにお任せください！" />
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {STYLISTS.map((stylist, index) => (
            <FadeIn key={index} delay={index * 200} direction="up">
              <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg flex flex-col md:flex-row hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-white">
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-pop-green/50 to-transparent opacity-50"></div>
                  <img 
                    src={stylist.image} 
                    alt={stylist.name} 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-8 md:w-3/5 flex flex-col justify-center">
                  <p className="text-pop-greenaccent text-xs font-black tracking-widest mb-2 bg-pop-greenlight inline-block px-2 py-1 rounded self-start">
                    {stylist.role}
                  </p>
                  <h3 className="font-sans text-2xl text-slate-800 font-black mb-4">{stylist.name}</h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6 bg-slate-50 p-4 rounded-2xl relative">
                     <span className="absolute -top-2 -left-2 text-3xl">❝</span>
                    {stylist.message}
                  </p>
                  <div className="mt-auto pt-4 border-t-2 border-dashed border-slate-100 text-right">
                     <p className="text-xs font-bold text-slate-400">※指名料なし</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};