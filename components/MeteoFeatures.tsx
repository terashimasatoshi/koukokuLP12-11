// components/MeteoFeatures.tsx

type Feature = {
  title: string;
  desc: string;
  src: string;
};

const FEATURES: Feature[] = [
  {
    title: "ダメージ補修 × ツヤ",
    desc: "METEOの補修でしなやか&うるおい。色持ちもUP。",
    src: "/images/features/f1.webp",
  },
  {
    title: "うねり抑制 × まとまり",
    desc: "うねりの原因にアプローチ。乾かすだけで扱いやすく。",
    src: "/images/features/f2.webp",
  },
  {
    title: "白髪ケア × 質感設計",
    desc: "白髪世代の質感設計。やわらかく上品な艶へ。",
    src: "/images/features/f3.webp",
  },
];

export default function MeteoFeatures() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="rounded-3xl bg-white/70 p-4 shadow-lg ring-1 ring-black/5"
          >
            <div className="relative mb-4 overflow-hidden rounded-2xl">
              <img
                src={f.src}
                alt={f.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">{f.title}</h3>
            <p className="mt-2 text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
