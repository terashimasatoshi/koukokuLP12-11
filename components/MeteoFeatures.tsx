import React from 'react';
import { SectionTitle } from './SectionTitle';
import { FadeIn } from './FadeIn';

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ number, title, description, image, color }) => (
  <div className="flex flex-col md:flex-row bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group rounded-[2rem]">
    <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
      <div className={`absolute top-4 left-4 ${color} text-white w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl shadow-md z-10 rotate-12 group-hover:rotate-0 transition-transform duration-300`}>
        {number}
      </div>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
    </div>
    <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
      <h3 className="font-sans text-2xl font-black text-slate-700 mb-4 pb-4 border-b-2 border-dashed border-slate-100">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed text-base font-medium">
        {description}
      </p>
    </div>
  </div>
);

export const MeteoFeatures: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionTitle en="Features" ja="METEOのスゴいところ" />
        </FadeIn>

        <div className="space-y-10">
          <FadeIn direction="right" delay={0}>
            <FeatureCard 
              number="01"
              title="94%ダメージ削減！魔法の「酸熱融合」"
              description="従来の縮毛矯正はもう古い？METEOは酸と熱のパワーで髪の結合を強化！ダメージの原因を極限までカットして、髪を守りながらストレートにします。"
              image="/images/features/feauter1.webp"
              color="bg-pop-green"
            />
          </FadeIn>

          <FadeIn direction="left" delay={100}>
            <FeatureCard 
              number="02"
              title="ブリーチ毛もOK！あきらめないで"
              description="「傷んでるから無理...」と断られた経験ありませんか？METEOなら、ハイダメージ毛や年齢とともに細くなった髪でも優しく施術できます！"
              image="/images/features/feauter2.webp"
              color="bg-pop-cyan"
            />
          </FadeIn>

          <FadeIn direction="right" delay={100}>
            <FeatureCard 
              number="03"
              title="「地毛？」って聞かれる自然な仕上がり"
              description="シャキーン！とした不自然な真っ直ぐさはありません。もともと髪が綺麗な人のような、柔らか〜い質感に仕上がります。"
              image="/images/features/feauter3.webp"
              color="bg-pop-yellow text-slate-800"
            />
          </FadeIn>

          <FadeIn direction="left" delay={100}>
            <FeatureCard 
              number="04"
              title="あなただけの「特製レシピ」"
              description="髪の状態は十人十色。peaceでは、画一的な施術はしません！あなたの髪質に合わせたオーダーメイドの薬剤調合で、ベストな美髪へ導きます。"
              image="/images/features/feauter4.webp"
              color="bg-pop-purple"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
