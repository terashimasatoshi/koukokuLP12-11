// components/Hero.tsx
// 【改善版】価格表示追加、結果訴求コピー、CTA文言改善
import { trackReservationClick } from '../utils';
import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full h-[75vh] min-h-[560px] overflow-hidden">
      {/* 背景動画 */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero_poster.jpg"
      />
      {/* 画像フォールバック */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero_fallback.jpg"
          alt="Hero"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />

      {/* テキスト */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          {/* 信頼バッジ - デザイン改善 */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-medium mb-4">
            <Sparkles size={14} className="text-yellow-300" />
            Hot Pepper Beauty Award 8年連続受賞
          </div>

          {/* メインコピー - 結果訴求に変更 */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            乾かすだけで、まとまる髪へ。
          </h1>

          {/* サブコピー - 希望訴求 + 技術名 */}
          <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed">
            30代からのうねり・パサつき、諦めないで。<br className="hidden sm:inline" />
            94%ダメージ削減のMETEO髪質改善で叶えます。
          </p>

          {/* ★価格バッジ - 新規追加（最重要改善）★ */}
          <div className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-400 text-slate-900 px-5 py-2.5 rounded-full shadow-lg">
            <span className="text-sm font-bold">初回限定</span>
            <span className="text-xl md:text-2xl font-black">¥9,900</span>
            <span className="text-sm font-bold">〜</span>
          </div>

          {/* CTA - 文言改善 */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#cases"
              className="w-full sm:w-auto rounded-2xl px-6 py-3.5 bg-white hover:bg-white/90 text-gray-900 text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>✨</span>
              ビフォーアフターを見る
            </a>
            <a
              href=""#reserve""
              className="w-full sm:w-auto rounded-2xl px-6 py-3.5 bg-pop-green hover:bg-pop-green/90 text-white text-sm font-bold shadow-lg transition-all"
              onClick={() => trackReservationClick('hero')}
            >
              ¥9,900〜のメニューを見る
            </a>
          </div>

          {/* 設備訴求 - 当日予約OK追加 */}
          <p className="mt-5 text-white/70 text-xs md:text-sm">
            🌿 キッズルーム完備・駐車場7台完備・当日予約OK
          </p>
        </div>
      </div>

      {/* スクロール誘導 - 新規追加 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
