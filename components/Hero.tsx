// components/Hero.tsx
import { trackReservationClick } from '../utils';

export function Hero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[520px] overflow-hidden">
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
      {/* 画像フォールバック（動画が再生されない環境向け） */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero_fallback.jpg"
          alt="Hero"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />

      {/* テキスト */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          {/* 信頼バッジ */}
          <p className="text-white/80 text-sm md:text-base tracking-widest mb-3">
            Hot Pepper Beauty Award 8年連続受賞
          </p>

          {/* メインコピー */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            30代、髪は静かに変わり始める。
          </h1>

          {/* サブコピー */}
          <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed">
            パサつき、うねり、ツヤの減少。<br className="hidden sm:inline" />
            気づいた今が、髪質改善のベストタイミングです。
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#menu"
              className="w-full sm:w-auto rounded-2xl px-6 py-3.5 bg-white/95 hover:bg-white text-gray-900 text-sm font-medium shadow-lg transition-all"
            >
              30代向けメニューを見る
            </a>
            <a
              href="#reserve"
              className="w-full sm:w-auto rounded-2xl px-6 py-3.5 bg-gray-900/80 hover:bg-gray-900 text-white text-sm font-medium shadow-lg border border-white/20 transition-all"
              onClick={() => trackReservationClick('hero')}
            >
              今すぐ予約する
            </a>
          </div>

          {/* 設備訴求 */}
          <p className="mt-6 text-white/70 text-xs md:text-sm">
            🌿 キッズルーム完備・駐車場7台完備
          </p>
        </div>
      </div>
    </section>
  );
}
