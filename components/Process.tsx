import React from 'react';
import { SectionTitle } from './SectionTitle';
import { PROCESS_STEPS } from '../constants';
import { FadeIn } from './FadeIn';

export const Process: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-pop-greenlight/20">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <SectionTitle en="Process" ja="施術の流れ" />
        </FadeIn>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-dashed bg-slate-300 transform md:-translate-x-1/2 rounded-full" style={{ backgroundImage: 'linear-gradient(to bottom, transparent 50%, #cbd5e1 50%)', backgroundSize: '1px 20px' }}></div>

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Number Bubble */}
                <FadeIn delay={index * 100} className="absolute left-4 md:left-1/2 transform -translate-x-1/2 md:translate-x-[-50%] z-10 w-full md:w-auto flex justify-start md:justify-center">
                   <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-white font-black text-lg md:text-xl ${index % 2 === 0 ? 'bg-pop-green' : 'bg-pop-cyan'}`}>
                    {step.step}
                  </div>
                </FadeIn>

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}`}>
                   <FadeIn 
                      direction={index % 2 === 0 ? 'right' : 'left'} 
                      delay={index * 150}
                    >
                     <div className="bg-white p-6 rounded-[2rem] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <h3 className="font-bold text-lg text-slate-800 mb-2 border-b-2 border-slate-100 pb-2 inline-block">
                          {step.title}
                        </h3>
                        <p className="text-sm font-medium text-slate-500 leading-relaxed">
                          {step.description}
                        </p>
                     </div>
                   </FadeIn>
                </div>
                
                {/* Spacer */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};