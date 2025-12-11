import React from 'react';
import { REVIEWS } from '../constants';
import { SectionTitle } from './SectionTitle';
import { Star } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionTitle en="Voice" ja="お客様からの嬉しい声" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <div className="relative pt-8 h-full">
                {/* Avatar placeholder */}
                <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white font-bold text-xl z-10 ${index === 0 ? 'bg-pop-green' : index === 1 ? 'bg-pop-cyan' : 'bg-pop-yellow text-slate-700'}`}>
                  {review.age.substring(0,2)}
                </div>

                <div className="bg-pop-greenlight/20 p-8 pt-12 rounded-[2.5rem] shadow-sm flex flex-col h-full border border-pop-greenlight relative">
                   {/* Chat triangle */}
                   <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-pop-greenlight/20"></div>

                  <div className="flex items-center justify-center mb-4">
                    <div className="flex text-pop-yellow drop-shadow-sm">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 font-medium text-sm leading-7 text-center mb-4 flex-grow">
                    "{review.content}"
                  </p>
                  <p className="text-center text-xs font-bold text-slate-400">
                    — {review.age}女性 —
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};