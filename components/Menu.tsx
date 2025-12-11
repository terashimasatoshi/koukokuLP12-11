import React from 'react';
import { MENU_ITEMS } from '../constants';
import { SectionTitle } from './SectionTitle';
import { FadeIn } from './FadeIn';
import { StoreLinks } from './StoreLinks';

export const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <SectionTitle en="Menu & Price" ja="メニュー・料金" />
        </FadeIn>
        
        <div className="space-y-8">
          {MENU_ITEMS.map((item, index) => (
            <FadeIn key={index} delay={index * 150} direction="up">
              <div 
                className={`bg-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden transition-all hover:scale-[1.02] ${item.isRecommended ? 'border-4 border-pop-green ring-4 ring-pop-green/20' : 'border-2 border-slate-100'}`}
              >
                {item.isRecommended && (
                  <div className="absolute top-0 right-0 bg-pop-green text-white text-sm font-bold px-6 py-2 rounded-bl-3xl shadow-sm">
                    イチオシ！💖
                  </div>
                )}
                
                <h3 className="font-sans text-xl md:text-2xl font-black text-slate-700 mb-2">
                  {item.title}
                </h3>
                
                <p className="text-slate-500 font-medium text-sm mb-6 leading-relaxed bg-slate-50 p-3 rounded-xl inline-block">
                  {item.description}
                </p>
                
                <div className="flex items-end justify-end border-t-2 border-dashed border-slate-200 pt-4">
                  {item.originalPrice && (
                    <span className="text-slate-400 line-through text-sm mr-3 font-bold">
                      ¥{item.originalPrice}
                    </span>
                  )}
                  <span className="text-pop-greenaccent font-black text-3xl md:text-4xl">
                    ¥{item.price}
                    <span className="text-sm font-bold text-slate-400 ml-1">(税込)</span>
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={600} direction="up">
          <div className="mt-16 text-center max-w-md mx-auto">
            <p className="mb-6 font-bold text-lg text-slate-700 bg-pop-yellow/30 inline-block px-6 py-1 rounded-full">
              まずは空き状況をチェック👇
            </p>
            <StoreLinks variant="secondary" />
            <p className="mt-4 text-xs font-bold text-slate-400">
              ※ロング料金なし / シャンプー・ブロー込です！
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};