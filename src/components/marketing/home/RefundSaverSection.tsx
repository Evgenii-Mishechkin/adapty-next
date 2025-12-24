import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function RefundSaverSection() {
  return (
    <Section className="bg-white py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div className="overflow-hidden rounded-[26px] bg-[#d8ede6] shadow-[0_30px_80px_-45px_rgba(23,33,30,0.35)] ring-1 ring-[#c7dfd6]">
          <Image
            src="/refund-rate@2x-768x576.webp"
            alt="Снижение ставки возврата"
            width={1280}
            height={720}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold text-[#1c1a20] sm:text-4xl">
            Сократите ставку возврата на 40%
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-[#35323d]">
            Перестаньте терять доход из-за возвратов — Adapty автоматически
            делится данными о действиях пользователей с Apple для запросов на
            возврат и уменьшает их.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-base font-semibold text-[#1c1a20] underline-offset-4 hover:underline"
          >
            Настройка Refund Saver →
          </a>

          <Card className="mt-6 rounded-2xl bg-white shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)] ring-1 ring-[#e8e5ec]">
            <div className="flex items-center gap-2">
              <div className="text-3xl leading-none text-[#2a2730]">“</div>
              <Image
                src="/app-icon-fotorama-original.webp"
                alt="Fotorama"
                width={32}
                height={32}
                className="h-8 w-8 rounded-xl object-cover"
              />
              <div className="text-sm font-semibold text-[#1c1a20]">Fotorama</div>
              <span className="text-xs text-[#6a6476]">Фото и видео</span>
            </div>
            <p className="mt-4 text-base leading-relaxed text-[#1c1a20]">
              &quot;Я никогда не думала, что возврат денег может иметь такое значение.
              Мы просто щелкнули выключателем, настроили его, и вдруг нам
              показалось, что мы перестали позволять деньгам ускользать&quot;.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <Image
                src="/photo-Chris-Bick.webp"
                alt="Берќ Чагатай Албайрак"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="text-sm">
                <p className="font-semibold text-[#1c1a20]">
                  Берг Чагатай Албайрак
                </p>
                <p className="text-[#514c5c]">Старший менеджер по продуктам</p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
