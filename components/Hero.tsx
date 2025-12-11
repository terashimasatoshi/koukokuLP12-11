// components/Hero.tsx
export function Hero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[520px] overflow-hidden">
      {/* 背景動画（ある場合） */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"      // public/videos/hero.mp4
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero_poster.jpg" // 任意
      />

      {/* 画像フォールバック（動画が再生されない環境向け） */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero_fallback.jpg" // 任意
          alt="Hero"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30" />

      {/* テキスト */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            髪の“今”を、美しく更新する。
          </h1>
          <p className="mt-4 text-white/90 text-base md:text-lg">
            METEO × カラーケアで、質感・色持ち・艶を最適化。あなた専用の設計で。
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#menu"
              className="rounded-2xl px-5 py-3 bg-white/90 hover:bg-white text-gray-900 text-sm font-medium shadow"
            >
              メニューを見る
            </a>
            <a
              href="#reserve"
              className="rounded-2xl px-5 py-3 bg-gray-900/70 hover:bg-gray-900 text-white text-sm font-medium shadow border border-white/20"
            >
              予約する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
