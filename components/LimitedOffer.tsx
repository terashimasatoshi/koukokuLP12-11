import React from 'react';
import { FadeIn } from './FadeIn';
import { StoreLinks } from './StoreLinks';
import { SALON_INFO, trackBookingClick } from '../constants';
import { Sparkles, MousePointerClick, Tag, Clock } from 'lucide-react';

export const LimitedOffer: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pop-green via-pop-greenaccent to-teal-600 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
         <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-white blur-[80px] animate-pulse"></div>
         <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-pop-yellow blur-[60px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn duration={1000} direction="zoom">
          <div className="text-center mb-12">
            <div className="inline-block bg-pop-yellow text-slate-800 font-black px-6 py-2 rounded-full mb-6 transform -rotate-2 shadow-lg text-lg">
              WEB予約限定キャンペーン🎁
            </div>
            <h2 className="font-sans text-3xl md:text-5xl font-black text-white drop-shadow-md">
              今だけの特別プライス
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Campaign 1: General New Customer (All Stores) */}
          <FadeIn delay={200} direction="right" className="h-full">
            <div className="bg-white/10 backdrop-blur-md border-4 border-dashed border-white/50 rounded-[2.5rem] p-8 h-full flex flex-col relative overflow-hidden shadow-xl hover:bg-white/20 transition-colors group">
              <div className="absolute top-0 right-0 bg-pop-greenlight text-pop-greenaccent font-bold text-xs px-4 py-2 rounded-bl-2xl z-20">
                全店舗共通
              </div>
              
              <div className="flex items-center mb-4">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-pop-green mr-4 shadow-sm group-hover:scale-110 transition-transform">
                    <Sparkles size={24} />
                 </div>
                 <div>
                    <h3 className="text-xl font-black text-white">ご新規様限定</h3>
                    <p className="text-sm font-medium text-white/80">初めての方へ特別オファー</p>
                 </div>
              </div>

              <div className="bg-white p-6 rounded-3xl mb-6 text-center transform rotate-1 group-hover:rotate-0 transition-transform duration-300 shadow-lg">
                 <p className="text-slate-500 font-bold text-sm mb-1">全メニュー対象</p>
                 <p className="text-5xl md:text-6xl font-black text-pop-greenaccent tracking-tighter drop-shadow-sm">
                   20% OFF
                 </p>
              </div>
              
              <div className="space-y-3 mb-8 bg-black/10 p-4 rounded-2xl">
                 <p className="text-white font-bold text-sm flex justify-between border-b border-white/20 pb-2">
                   <span>METEO美髪矯正 & カット</span>
                   <span className="opacity-60 line-through">¥27,500</span>
                 </p>
                 <p className="text-pop-yellow font-black text-2xl text-right">
                   👉 ¥22,000
                 </p>
              </div>

              <StoreLinks variant="light" className="mt-auto" />
            </div>
          </FadeIn>

          {/* Campaign 2: Hanando Exclusive (Special Coupon) */}
          <FadeIn delay={400} direction="left" className="h-full">
            <div className="bg-gradient-to-br from-white to-orange-50 border-4 border-pop-yellow rounded-[2.5rem] p-8 h-full flex flex-col relative overflow-hidden shadow-2xl transform lg:scale-105 z-10">
              {/* Stripe Pattern */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pop-yellow via-orange-400 to-pop-yellow animate-pulse"></div>
              
              <div className="absolute top-4 right-4 animate-bounce">
                <span className="bg-red-500 text-white font-black text-xs px-3 py-1 rounded-full shadow-md">
                  衝撃プライス🔥
                </span>
              </div>

              <div className="flex flex-col items-start mb-6">
                 <span className="bg-slate-800 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                   花堂店 限定
                 </span>
                 <h3 className="text-2xl md:text-3xl font-black text-slate-800 leading-tight">
                   METEOカラー<br/>
                   <span className="text-lg font-bold text-slate-500">+ トリートメント</span>
                 </h3>
              </div>

              <div className="bg-white border-2 border-red-100 rounded-3xl p-6 mb-6 shadow-inner text-center relative overflow-hidden">
                <div className="absolute top-[-10px] left-[-10px] bg-red-100 text-red-500 font-bold text-[10px] px-3 py-2 rounded-br-xl">
                  Special Price
                </div>
                <div className="flex items-end justify-center">
                  <span className="text-slate-400 line-through font-bold text-lg mr-2 mb-2">¥19,800</span>
                  <span className="text-red-500 font-black text-6xl leading-none tracking-tighter">
                    ¥9,900
                  </span>
                </div>
                <p className="text-red-500 font-bold text-xs mt-2">※シャンプー・ブロー込 / ロング料金なし</p>
              </div>

              <div className="bg-orange-100/50 p-4 rounded-2xl mb-8 flex items-start">
                 <Tag className="text-orange-500 w-5 h-5 mr-2 mt-1 shrink-0" />
                 <p className="text-slate-700 text-sm font-medium leading-relaxed">
                   花堂店だけの特別企画！話題のMETEOカラーとトリートメントが<span className="font-bold text-red-500 text-lg bg-white px-1 rounded mx-1">半額</span>で体験できます。この機会をお見逃しなく！
                 </p>
              </div>

              <div className="mt-auto">
                <a 
                  href={SALON_INFO.bookingUrls.hanando}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackBookingClick('hanando')}
                  className="group relative flex items-center justify-center w-full bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-full py-4 px-6 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors"></div>
                  <div className="flex flex-col items-center relative z-10">
                    <span className="text-[10px] font-bold tracking-widest opacity-80 mb-0.5">花堂店限定クーポンを使う</span>
                    <span className="text-lg font-black flex items-center">
                      空席確認・予約 <MousePointerClick size={20} className="ml-2 group-hover:rotate-12 transition-transform" />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={600} direction="up">
          <p className="mt-12 text-center text-xs font-medium text-white/80 bg-black/10 inline-block px-4 py-2 rounded-full mx-auto block w-fit">
            ※定員に達し次第終了となる場合がございます。ご予約はお早めに。
          </p>
        </FadeIn>
      </div>
    </section>
  );
};