// components/Hero.tsx
// 【Phase D-4】店舗別予約CTA — 花堂メイン + 高柳サブ
// 花堂 > 高柳 の視覚的階層で Hick's Law を回避しつつ即予約導線を確保
import { SALON_INFO, trackBookingClick } from '../constants';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full h-[75vh] min-h-[560px] overflow-hidden">
      {/* ヒーロー背景画像 */}
      <img
        src="/hero.webp"
        alt="髪質改善の仕上がり"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
        loading="eager"
        width={800}
        height={800}
      />
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />

      {/* テキスト */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-3xl w-full">
          {/* メインコピー — 広告Bのトーンをエコー */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            「なんか変えたい」の答え、
            <br />
            ここにあります。
          </h1>

          {/* サブコピー */}
          <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed">
            乾かすだけでキマる。peaceの髪質改善。
          </p>

          {/* 店舗別予約CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch justify-center gap-3 max-w-lg mx-auto">
            {/* 花堂店 — メイン */}
            <a
              href={SALON_INFO.bookingUrls.hanando}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackBookingClick('hanando')}
              className="relative flex-1 flex flex-col items-center justify-center bg-gradient-to-r from-pop-greenaccent to-pop-green text-white rounded-2xl px-6 py-4 shadow-lg hover:brightness-110 hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
            >
              <span className="absolute -top-2.5 -right-2 bg-pop-yellow text-slate-900 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md">
                おすすめ
              </span>
              <span className="text-xs font-bold opacity-90 tracking-wider">花堂店</span>
              <span className="text-sm font-bold mt-0.5 text-white/80">初回限定 ¥9,900〜</span>
              <span className="text-base font-black mt-1 flex items-center">
                空席確認・予約 <ChevronRight size={18} className="ml-0.5" />
              </span>
            </a>

            {/* 高柳店 — サブ */}
            <a
              href={SALON_INFO.bookingUrls.takayanagi}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackBookingClick('takayanagi')}
              className="flex-1 flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white rounded-2xl px-6 py-4 hover:bg-white/20 hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
            >
              <span className="text-xs font-bold opacity-90 tracking-wider">高柳店</span>
              <span className="text-sm font-bold mt-0.5 text-white/70">ご新規 全メニュー 20% OFF</span>
              <span className="text-base font-black mt-1 flex items-center">
                空席確認・予約 <ChevronRight size={18} className="ml-0.5" />
              </span>
            </a>
          </div>

          {/* 注記 */}
          <p className="mt-3 text-white/50 text-[11px]">
            ※¥9,900は花堂店限定の特別価格です
          </p>
        </div>
      </div>

      {/* スクロール誘導 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
