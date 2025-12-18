import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function AbTestingSection() {
  return (
    <Section className="bg-white py-20">
      <Container className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold text-[#1c1a20] sm:text-4xl">
              Тестируйте пейволлы без релизов приложения
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-[#35323d]">
              Управляйте пейволлами, таргетируйте их, локализуйте и
              персонализируйте не выходя из браузера.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-base font-semibold text-[#1c1a20] underline-offset-4 hover:underline"
            >
              Больше про A/B-тесты →
            </a>
          </div>

          <Card className="mt-8 rounded-2xl bg-white shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)] ring-1 ring-[#e8e5ec]">
            <div className="flex items-center gap-3">
              <div className="text-3xl leading-none text-[#2a2730]">“</div>
              <Image
                src="/logo-smartist-black@2x.png"
                alt="smartist"
                width={110}
                height={32}
                className="h-6 w-auto"
              />
            </div>
            <p className="mt-4 text-base leading-relaxed text-[#1c1a20]">
              «Будь то A/B-тестирование пейволлов, прогнозирование LTV или анализ
              показателей подписки, Adapty — это идеальный набор инструментов для
              роста приложения».
            </p>
            <div className="mt-5 flex items-center gap-3">
              <Image
                src="/Ilgar-Tali-Smartist@2x.webp"
                alt="Ильгар Тали"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="text-sm">
                <p className="font-semibold text-[#1c1a20]">Ильгар Тали</p>
                <p className="text-[#514c5c]">
                  Основатель и директор по позиционированию
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-[26px] bg-[#3e5f51] shadow-[0_30px_80px_-45px_rgba(23,33,30,0.55)] ring-1 ring-[#2d4c3f]">
            <Image
              src="/paywall-ab-testing@2x.webp"
              alt="A/B тесты пейволлов"
              width={1280}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
