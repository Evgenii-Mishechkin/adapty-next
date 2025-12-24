import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const tabs = ["Swift", "Kotlin", "React Native", "Flutter", "Unity"];

export default function IntegrationSection() {
  return (
    <Section className="bg-[#0f0d14] py-20">
      <Container className="grid min-w-0 gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="min-w-0 space-y-7 text-white">
          <div className="space-y-3">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Интегрируйте покупки в приложении
              <br />
              с помощью нескольких строк кода
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-[#cfc9da]">
            Интегрируйте IAP за несколько часов без серверного кодирования с
            помощью простого и удобного SDK. А дальше Adapty будет управлять
            работой и состоянием каждой вашей подписки — от активации до возврата.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#c7b3ff] underline-offset-4 hover:underline"
          >
            Быстрая интеграция →
          </a>

          <div className="max-w-xl rounded-2xl border border-[#201b2c] bg-[#15121c] p-5 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.6)]">
            <div className="text-3xl leading-none text-[#c7b3ff]">“</div>
            <div className="mt-4 flex items-center gap-3">
              <Image
                src="/Smitten_Color-Logo-Small-02.webp"
                alt="Smitten"
                width={120}
                height={32}
                className="h-6 w-auto"
              />
            </div>
            <p className="mt-4 text-base leading-relaxed text-white">
              «С SDK Adapty, добавить покупки в приложение оказалось проще
              простого. С помощью всего нескольких строк кода я смог без проблем
              добавить подписки как для iOS, так и для Android.»
            </p>
            <div className="mt-5 flex items-center gap-3">
              <Image
                src="/Magnus-Olafsson-Smitten@2x.webp"
                alt="Магнус Олафссон"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="text-sm">
                <p className="font-semibold text-white">Магнус Олафссон</p>
                <p className="text-[#cfc9da]">
                  Главный технический директор, Smitten
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-0 space-y-4">
          <div className="min-w-0 overflow-hidden rounded-2xl border border-[#1f1a2d] bg-[#15121c] shadow-[0_26px_70px_-45px_rgba(0,0,0,0.65)]">
            <div className="flex max-w-full items-center gap-6 overflow-x-auto border-b border-[#1f1a2d] px-6 py-3 text-sm font-semibold text-[#a9a3b9]">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  type="button"
                  className={`min-w-max pb-2 transition ${
                    index === 0
                      ? "border-b-2 border-[#c7b3ff] text-white"
                      : "hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
              <div className="ml-auto text-xs text-[#6f6783]"> </div>
            </div>

            <div className="relative min-w-0 overflow-hidden rounded-b-2xl bg-[#0f0d14]">
              <CodeBlock />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#cfc9da]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1f1a2d] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#58e1c1]" />
              GitHub
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1f1a2d] px-4 py-2">
              100% Open Source
            </div>
            <a
              href="https://github.com/adaptyteam"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#1f1a2d] px-4 py-2 text-[#c7b3ff] hover:border-[#2d2443]"
            >
              Go to GitHub ↗
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function CodeBlock() {
  return (
    <pre className="min-w-0 overflow-auto px-6 py-5 text-sm leading-7 text-[#cfc9da]">
      <code>
        <span className="text-[#7c7d83]">Your app&apos;s code</span>
        {"\n"}
        <span className="text-[#7b9cfe]">import</span> Adapty
        {"\n\n"}
        <span className="text-[#7c7d83]">do</span> {"{"}
        {"\n  "}
        <span className="text-[#7c7d83]">try await</span>{" "}
        <span className="text-[#c7b3ff]">Adapty</span>.
        <span className="text-[#9ae1ae]">activate</span>(
        <span className="text-[#f7c266]">&quot;PUBLIC_SDK_KEY&quot;</span>)
        {"\n\n  "}
        <span className="text-[#7c7d83]">
          Make a purchase, Adapty handles the rest
        </span>
        {"\n  "}
        <span className="text-[#7c7d83]">let</span>{" "}
        <span className="text-white">purchaseResult</span> ={" "}
        <span className="text-[#7c7d83]">try await</span>{" "}
        <span className="text-[#c7b3ff]">Adapty</span>.
        <span className="text-[#9ae1ae]">makePurchase</span>(
        <span className="text-white">product</span>)
        {"\n  "}
        <span className="text-[#7c7d83]">successful purchase</span>
        {"\n"}
        {"}"} <span className="text-[#7c7d83]">catch</span> {"{"}
        {"\n  "}
        <span className="text-[#7c7d83]">handle the error</span>
        {"\n"}
        {"}"}
      </code>
    </pre>
  );
}
