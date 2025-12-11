import React, { useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { ChevronDown, CheckCircle2, HelpCircle } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`rounded-3xl shadow-sm border-2 overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white border-pop-green shadow-md' : 'bg-white border-slate-100 hover:border-pop-green/50'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-5 md:p-6 flex items-center justify-between transition-colors"
      >
        <div className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0 font-black text-lg ${isOpen ? 'bg-pop-green text-white' : 'bg-slate-100 text-slate-400'}`}>Q</div>
          <span className="font-bold text-slate-700 text-base md:text-lg leading-snug">{question}</span>
        </div>
        <div className={`shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${isOpen ? 'rotate-180 bg-pop-greenlight text-pop-green' : 'bg-slate-50 text-slate-300'}`}>
          <ChevronDown size={20} strokeWidth={3} />
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 md:p-8 pt-0 border-t-2 border-dashed border-pop-greenlight bg-pop-greenlight/10">
          <div className="flex items-start mt-6">
            <div className="w-10 h-10 rounded-full bg-pop-yellow text-slate-800 flex items-center justify-center mr-4 shrink-0 font-black text-lg shadow-sm">A</div>
            <div className="text-slate-600 text-sm md:text-base font-medium leading-relaxed space-y-4 w-full pt-1">
              {answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 px-4 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <SectionTitle en="Q&A" ja="よくあるご質問" />
        </FadeIn>

        <div className="space-y-6 mb-16">
          <FadeIn delay={100}>
            <FAQItem 
              question="従来の縮毛矯正との違いは？"
              answer={
                <>
                  <p className="font-bold text-pop-greenaccent mb-2">3つの大きな違いがあります！✨</p>
                  <ul className="space-y-4">
                    <li className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                      <h4 className="font-bold text-slate-700 mb-1 flex items-center"><CheckCircle2 size={18} className="mr-2 text-pop-cyan"/> ① ダメージが超少ない！</h4>
                      <p className="text-sm">酸と熱のチカラを使う最新技術で、なんと<span className="font-bold text-pop-green bg-pop-greenlight px-1 rounded">94%のダメージをカット</span>！髪をいじめません。</p>
                    </li>
                    <li className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                      <h4 className="font-bold text-slate-700 mb-1 flex items-center"><CheckCircle2 size={18} className="mr-2 text-pop-cyan"/> ② 仕上がりが超ナチュラル！</h4>
                      <p className="text-sm">ピンピン・カチカチは卒業。風になびくような柔らか〜いストレートになります。</p>
                    </li>
                    <li className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                      <h4 className="font-bold text-slate-700 mb-1 flex items-center"><CheckCircle2 size={18} className="mr-2 text-pop-cyan"/> ③ どんな髪でもOK！</h4>
                      <p className="text-sm">ブリーチ毛やエイジング毛など、今まで断られていた髪でも施術可能です🙆‍♀️</p>
                    </li>
                  </ul>
                </>
              }
              defaultOpen={true}
            />
          </FadeIn>

          <FadeIn delay={200}>
            <FAQItem 
              question="どのくらい持ちますか?"
              answer={
                <>
                  <p className="mb-3">平均して<span className="font-bold text-pop-green text-lg mx-1">3〜6ヶ月</span>持ちます！</p>
                  <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 mb-3">
                    <h4 className="font-bold text-blue-800 text-sm mb-2">長持ちのコツ💡</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-slate-600 ml-1">
                      <li>施術後48時間は髪を結ばない！</li>
                      <li>ホームケアトリートメントを頑張る</li>
                      <li>2〜3ヶ月に1回メンテナンスする</li>
                    </ul>
                  </div>
                  <p className="text-sm font-bold text-slate-500">
                    伸びてきた根元だけの「リタッチ」も人気です！賢く綺麗をキープしましょう✨
                  </p>
                </>
              }
            />
          </FadeIn>

          <FadeIn delay={300}>
             <FAQItem 
              question="ブリーチした髪でも大丈夫？"
              answer={
                 <p>
                   <strong className="text-pop-greenaccent text-lg">はい、大丈夫です！🙆‍♀️</strong><br/>
                   METEOならブリーチ毛でも優しくストレートにできます。「髪が死んでるから無理...」と諦める前にぜひご相談ください！
                   <br/><span className="text-xs text-slate-400 mt-2 block">※ブリーチ直後（1週間以内）は避けたほうがベターです。</span>
                 </p>
              } 
            />
          </FadeIn>
           <FadeIn delay={400}>
             <FAQItem 
              question="痛みやダメージはありますか？"
              answer={
                 <p>
                   <strong className="text-pop-greenaccent">痛みゼロ・ダメージ94%削減です！🚫</strong><br/>
                   ツンとした嫌なニオイもほとんどありません。敏感肌の方も安心して受けていただける優しいお薬です🌿
                 </p>
              } 
            />
          </FadeIn>
          <FadeIn delay={500}>
             <FAQItem 
              question="カラーと同時施術できますか？"
              answer={
                 <p>
                   <strong className="text-pop-greenaccent">もちろんOK！むしろオススメです💖</strong><br/>
                   セットだと<span className="font-bold bg-pop-yellow/50 px-1 rounded">20%OFF</span>になるのでお得ですし、一回で髪が劇的に綺麗になります！
                 </p>
              } 
            />
          </FadeIn>
           <FadeIn delay={600}>
             <FAQItem 
              question="駐車場はありますか？"
              answer={
                 <p>
                   <strong className="text-pop-greenaccent">全店無料駐車場完備です！🚗</strong><br/>
                   高柳店は10台分、花堂店もお店の前に停められます。広めなので駐車が苦手な方もご安心ください♪
                 </p>
              } 
            />
          </FadeIn>
          <FadeIn delay={700}>
             <FAQItem 
              question="子供連れでも大丈夫？"
              answer={
                 <p>
                   <strong className="text-pop-greenaccent">大歓迎です！ママさん応援してます👶</strong><br/>
                   花堂店には<span className="font-bold text-pop-green">キッズルーム</span>もあります！DVDやおもちゃもあるので、お子様も退屈しません♪
                 </p>
              } 
            />
          </FadeIn>
        </div>

        {/* Short Answers Section */}
        <FadeIn delay={900} direction="up">
          <div className="mt-12 pt-12 border-t-2 border-dashed border-slate-200">
            <h3 className="text-center font-bold text-xl text-slate-700 mb-8 bg-slate-100 inline-block px-6 py-2 rounded-full mx-auto block w-fit">
              その他Q&A
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {q: "初めてでも大丈夫？", a: "大歓迎です！丁寧なカウンセリングから始めます✨"},
                {q: "メンズでもOK？", a: "男性も多いですよ！自然なストレートは好印象間違いなし👍"},
                {q: "白髪があっても平気？", a: "問題ありません！白髪染めと同時も可能です。"},
                {q: "支払いは？", a: "カード、電子マネー、QR決済など色々使えます💳"},
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border-2 border-slate-100 flex items-start">
                  <HelpCircle className="text-pop-yellow mr-3 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-700 text-sm mb-1">{item.q}</h4>
                    <p className="text-slate-500 text-sm font-medium">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};