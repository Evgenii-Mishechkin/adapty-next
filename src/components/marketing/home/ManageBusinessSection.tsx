import Image from "next/image";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const cards = [
  {
    title: "Для разработчиков",
    image: "/img-card-cover-sdk-install@2x.webp",
    chips: ["Подписки SDK", "Сбережение на возвратах", "Удалённая конфигурация", "Резервные пейволлы"],
  },
  {
    title: "Для владельцев",
    image: "/img-card-cover-charts@2x.webp",
    chips: ["Аналитика доходов", "Аналитика LTV", "Прогнозы ИИ для LTV и доходов"],
  },
  {
    title: "Для маркетологов",
    image: "/img-card-cover-paywalls@2x.webp",
    chips: ["A/B тестирование", "Конструктор без кода", "Локализации", "Ориентирование"],
  },
];

export default function ManageBusinessSection() {
  return (
    <Section className="bg-white py-20">
      <Container className="space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold text-[#1e1a2b] sm:text-4xl">
            Управляйте своим подписочным бизнесом.
          </h2>
          <p className="text-3xl font-extrabold text-[#1e1a2b] sm:text-4xl">
            Быстрее и дешевле.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Card
              key={card.title}
              className="flex flex-col gap-4 rounded-[24px] bg-[#f9f7fb] p-6 shadow-[0_20px_60px_-45px_rgba(41,25,64,0.5)] ring-1 ring-[#efe9f7]"
            >
              <div className="overflow-hidden rounded-2xl bg-white shadow-[0_18px_50px_-35px_rgba(29,16,49,0.4)]">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={720}
                  height={480}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-lg font-extrabold text-[#15111f]">
                  {card.title}
                  <span aria-hidden className="text-[#4b32c3]">
                    →
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {card.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full bg-white px-3 py-2 text-sm font-medium text-[#3b2f52] shadow-[0_12px_30px_-24px_rgba(41,25,64,0.5)] ring-1 ring-[#ece6f4]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
