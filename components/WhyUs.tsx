import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Award, Leaf, Beaker, Baby } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const WhyUs: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionTitle en="Why peace" ja="peaceが選ばれる理由" />
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Reason 1 */}
          <FadeIn delay={100} direction="up">
            <div className="text-center p-8 bg-pop-greenlight/30 rounded-[2rem] hover:bg-pop-greenlight hover:-translate-y-2 transition-all duration-300 h-full border-2 border-transparent hover:border-pop-green">
              <div className="w-20 h-20 mx-auto mb-6 bg-pop-green text-white rounded-full flex items-center justify-center shadow-lg animate-wiggle">
                <Award size={40} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">8年連続アワード受賞</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                ホットペッパービューティーアワード8年連続受賞！沢山のお客様に愛されている証です🏆
              </p>
            </div>
          </FadeIn>

          {/* Reason 2 */}
          <FadeIn delay={200} direction="up">
            <div className="text-center p-8 bg-green-50 rounded-[2rem] hover:bg-green-100 hover:-translate-y-2 transition-all duration-300 h-full border-2 border-transparent hover:border-green-300">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-400 text-white rounded-full flex items-center justify-center shadow-lg">
                <Leaf size={40} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Organic × Science</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                頭皮に優しい「オーガニック」と、最新の「髪質改善」の良いとこ取り！🌿
              </p>
            </div>
          </FadeIn>

           {/* Reason 3 */}
           <FadeIn delay={300} direction="up">
            <div className="text-center p-8 bg-blue-50 rounded-[2rem] hover:bg-blue-100 hover:-translate-y-2 transition-all duration-300 h-full border-2 border-transparent hover:border-blue-300">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-400 text-white rounded-full flex items-center justify-center shadow-lg">
                <Beaker size={40} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">完全オーダーメイド</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                マニュアル対応は一切ナシ！あなたの「今」の髪にベストな薬剤を調合します🧪
              </p>
            </div>
          </FadeIn>

          {/* Reason 4 */}
          <FadeIn delay={400} direction="up">
            <div className="text-center p-8 bg-pop-yellow/10 rounded-[2rem] hover:bg-pop-yellow/20 hover:-translate-y-2 transition-all duration-300 h-full border-2 border-transparent hover:border-pop-yellow">
              <div className="w-20 h-20 mx-auto mb-6 bg-pop-yellow text-slate-800 rounded-full flex items-center justify-center shadow-lg">
                <Baby size={40} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">キッズルーム完備</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                ママだって綺麗になりたい！お子様連れでも安心のキッズルーム完備（花堂店）👶
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};