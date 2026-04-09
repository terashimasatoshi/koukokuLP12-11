// components/Hero.tsx
// 【Phase D改修】広告Bトーン整合 — 引き算型FV
// 変更理由: 広告B(CPA -24%)の勝因「認知負荷の最小化」をLPに転写
// 削除要素: 権威バッジ→WhyUs, 技術名/数字→Features, 施設情報→FAQ/WhyUs に既存

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
        <div className="max-w-3xl">
          {/* メインコピー — 広告Bのトーンをエコー */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            「なんか変えたい」の答え、
            <br />
            ここにあります。
          </h1>

          {/* サブコピー — 軽やかさ重視、技術名なし */}
          <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed">
            乾かすだけでキマる。peaceの髪質改善。
          </p>

          {/* 価格バッジ */}
          <div className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-400 text-slate-900 px-5 py-2.5 rounded-full shadow-lg">
            <span className="text-sm font-bold">初回限定</span>
            <span className="text-xl md:text-2xl font-black">¥9,900</span>
            <span className="text-sm font-bold">〜</span>
          </div>

          {/* CTA — 1つに絞る (Before/Afterへのアンカー) */}
          <div className="mt-6">
            <a
              href="#cases"
              className="inline-flex items-center justify-center rounded-2xl px-8 py-3.5 bg-white hover:bg-white/90 text-gray-900 text-sm font-bold shadow-lg transition-all gap-2"
            >
              写真で見てみる ↓
            </a>
          </div>
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
