import Image from "next/image";

const gradientTitle =
  "bg-gradient-to-r from-[#5b34ff] via-[#6f7dfb] to-[#4db4ff] bg-clip-text text-transparent";

const logos = [
  { src: "/logo-feeld-gray.svg", alt: "Feeld", width: 106, height: 32 },
  { src: "/logo-bumble-gray.svg", alt: "Bumble", width: 126, height: 32 },
  { src: "/weewoo.svg", alt: "Weewoo", width: 110, height: 32 },
  { src: "/AppNation.webp", alt: "AppNation", width: 128, height: 32 },
  { src: "/almus.svg", alt: "Almus", width: 96, height: 32 },
  {
    src: "/logo-text-impala-studios-gray.svg",
    alt: "Impala Studios",
    width: 160,
    height: 32,
  },
  { src: "/logo-hubx-gray.svg", alt: "HUBX", width: 102, height: 32 },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6f2ef] px-6 pb-20 pt-14 sm:px-10 sm:pt-16 lg:px-16 lg:pb-28 lg:pt-20">
      <div className="absolute left-1/2 top-10 hidden h-64 w-64 -translate-x-1/2 rounded-full bg-[#c7b2ff]/25 blur-3xl lg:block" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
        <div className="flex-1 max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e5def5] bg-white/95 px-4 py-2 text-sm font-semibold text-[#6b4df5] shadow-[0_12px_35px_-20px_rgba(86,64,150,0.5)]">
            <span className="rounded-full bg-[#f2ecff] px-3 py-1 text-[13px] font-semibold text-[#5b36d6]">
              Гайд
            </span>
            <span className="text-[#5b36d6]">
              Как вырасти до $100K | Скачать →
            </span>
          </div>

          <div className="space-y-4">
            <h1
              className={`text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl ${gradientTitle}`}
            >
              Платформа
              <br />
              для роста
              <br />
              мобильных
              <br />
              приложений
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-[#524460]">
              Сэкономьте месяцы на внедрении подписок и удвойте доход от
              приложения благодаря эффективному управлению пейволлами.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center rounded-full bg-white/95 px-3 py-2 shadow-[0_12px_35px_-20px_rgba(86,64,150,0.35)] ring-1 ring-[#e4dff5]">
              <input
                type="email"
                placeholder="Email адрес"
                className="w-48 rounded-full border-none bg-transparent px-3 py-2 text-sm text-[#3b2a47] placeholder:text-[#9b8dab] focus:outline-none focus:ring-0 sm:w-60"
              />
              <button
                type="button"
                className="rounded-full bg-gradient-to-r from-[#6f34ff] to-[#6f7dfb] px-5 py-2 text-sm font-semibold text-white shadow-[0_14px_30px_-15px_rgba(92,70,210,0.75)] transition hover:brightness-110"
              >
                Начать
              </button>
            </div>
            <button
              type="button"
              className="text-sm font-semibold text-[#5b36d6] underline-offset-4 hover:underline"
            >
              Запись на демо →
            </button>
          </div>
        </div>

        <div className="relative flex-1">
          <div className="relative ml-auto flex max-w-2xl justify-end">
            <div className="relative w-full max-w-[660px]">
              <div className="relative rounded-[32px] bg-white/96 shadow-[0_35px_90px_-45px_rgba(24,16,40,0.55)] ring-1 ring-[#ebe5f5]">
                <Image
                  src="/adapty-overview@2x.webp"
                  alt="Дашборд с метриками Adapty"
                  width={1240}
                  height={720}
                  priority
                  className="h-full w-full rounded-[32px] object-cover"
                />
              </div>

              <div className="absolute -left-16 bottom-10 hidden w-[190px] xl:block 2xl:-left-24 2xl:w-[190px]">
                <div className="relative overflow-hidden rounded-[40px] bg-white shadow-[0_32px_80px_-40px_rgba(0,0,0,0.45)] ring-1 ring-black/5">
                  <Image
                    src="/adapty-paywall-demo-preview@2x.webp"
                    alt="Превью мобильного пейволла Adapty"
                    width={190}
                    height={380}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-2 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#7b708c]">
          Доверяют более 15,000+ приложений и крупнейших мировых издателей приложений
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.src}
              className="opacity-80 grayscale transition hover:opacity-100"
              style={{ minWidth: logo.width }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
