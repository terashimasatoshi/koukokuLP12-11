import React from 'react';
import { Check } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { FadeIn } from './FadeIn';

export const Diagnosis: React.FC = () => {
  const checkList = [
    "雨の日は髪がボサボサ...憂鬱になる",
    "年齢とともにツヤが消えた気がする",
    "毎朝アイロンとの戦いに疲れた",
    "ブリーチしてるけどストレートにしたい！",
    "「いかにも矯正」なピンピン髪はイヤ！",
    "トリートメントの効果がすぐ消えちゃう"
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-pop-yellow/20 to-white">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <SectionTitle en="Check List" ja="あなたはいくつ当てはまる？" />
        </FadeIn>
        
        <FadeIn delay={200} direction="zoom">
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border-8 border-pop-yellow/20">
            <h3 className="text-center text-xl font-bold text-slate-700 mb-8 bg-pop-yellow/30 inline-block px-6 py-2 rounded-full mx-auto">
              Check it out! 👇
            </h3>
            
            <ul className="space-y-4">
              {checkList.map((item, index) => (
                <FadeIn key={index} delay={index * 100 + 400} direction="left">
                  <li className="flex items-center p-3 hover:bg-pop-greenlight/50 transition-colors rounded-2xl cursor-default group">
                    <div className="w-8 h-8 rounded-full bg-pop-green flex items-center justify-center text-white mr-4 shadow-md group-hover:scale-110 transition-transform">
                      <Check size={20} strokeWidth={4} />
                    </div>
                    <span className="text-slate-700 text-lg font-bold">{item}</span>
                  </li>
                </FadeIn>
              ))}
            </ul>

            <div className="mt-12 text-center">
              <FadeIn delay={1000} direction="up">
                <div className="bg-pop-cyan/20 p-6 rounded-3xl inline-block">
                  <p className="font-sans text-xl md:text-2xl text-slate-800 font-bold leading-relaxed">
                    ひとつでも当てはまったら...<br/>
                    <span className="text-pop-greenaccent text-3xl">METEO</span> の出番です！✨
                  </p>
                </div>
                <p className="mt-6 text-slate-500 font-medium">
                  peaceで理想のツヤ髪を手に入れませんか？
                </p>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};