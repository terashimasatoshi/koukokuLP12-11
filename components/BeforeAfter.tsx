// components/BeforeAfter.tsx
// 【改善版】id属性追加、セクションタイトル追加
type CaseItem = {
  title: string;
  beforeSrc: string;
  afterSrc: string;
};

const CASES: CaseItem[] = [
  {
    title: "ハイダメージ毛",
    beforeSrc: "/images/cases/left_before.webp",
    afterSrc: "/images/cases/left_after.webp",
  },
  {
    title: "エイジングうねり",
    beforeSrc: "/images/cases/mid_before.webp",
    afterSrc: "/images/cases/mid_after.webp",
  },
  {
    title: "クセ・広がり",
    beforeSrc: "/images/cases/right_before.webp",
    afterSrc: "/images/cases/right_after.webp",
  },
];

export function BeforeAfter() {
  return (
    <section id="cases" className="mx-auto max-w-6xl px-4 py-12 scroll-mt-20">
      {/* セクションタイトル追加 */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
          施術例<span className="text-pop-green">ビフォーアフター</span>
        </h2>
        <p className="mt-2 text-slate-600 text-sm md:text-base">
          30代〜50代のお客様の変化をご覧ください
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {CASES.map((c) => (
          <article
            key={c.title}
            className="rounded-3xl bg-white/70 p-4 shadow-lg ring-1 ring-black/5"
          >
            <h3 className="mx-auto mb-4 w-fit rounded-full bg-white px-6 py-2 text-lg font-semibold text-slate-700 shadow">
              {c.title}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {/* Before */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={c.beforeSrc}
                  alt={`${c.title} Before`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full bg-slate-700 px-3 py-1 text-sm font-semibold text-white">
                  Before
                </span>
              </div>

              {/* After */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={c.afterSrc}
                  alt={`${c.title} After`}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <span className="absolute left-3 top-3 rounded-full bg-emerald-700 px-3 py-1 text-sm font-semibold text-white">
                  After
                </span>
              </div>
            </div>

            <p className="mt-6 rounded-2xl bg-sky-50 px-5 py-4 text-center text-slate-700">
              乾かすだけで <span className="font-semibold text-emerald-700">ぷるぷる</span> の艶髪へ ✨
            </p>
          </article>
        ))}
      </div>

      {/* CTAボタン追加 */}
      <div className="mt-8 text-center">
        <a
          href="#reserve"
          className="inline-flex items-center gap-2 bg-pop-green hover:bg-pop-green/90 text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all"
        >
          この効果を体験する（¥9,900〜）
        </a>
      </div>
    </section>
  );
}
