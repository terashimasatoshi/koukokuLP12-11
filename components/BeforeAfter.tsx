// components/BeforeAfter.tsx
import Image from "next/image";

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

export default function BeforeAfter() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
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
                <Image
                  src={c.beforeSrc}
                  alt={`${c.title} Before`}
                  width={720}
                  height={900}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-slate-700 px-3 py-1 text-sm font-semibold text-white">
                  Before
                </span>
              </div>

              {/* After */}
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={c.afterSrc}
                  alt={`${c.title} After`}
                  width={720}
                  height={900}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  priority
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
    </section>
  );
}