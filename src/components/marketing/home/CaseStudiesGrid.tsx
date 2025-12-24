import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

type CaseStudy = {
  title: string;
  category: string;
  metric: string;
  description: string;
  logo: string;
  accent?: string;
};

const cases: CaseStudy[] = [
  {
    title: "Productivity app",
    category: "Продуктивность",
    metric: "+50% общей выручки",
    description: "Как ценовые тесты раскрыли потенциал",
    logo: "/app-icon-productivity-app@4x.webp",
    accent: "#6c6fdb",
  },
  {
    title: "Text on Pic",
    category: "Фото и видео",
    metric: "Рост MRR более 30%",
    description: "Как увеличить доход с помощью правильных тестов",
    logo: "/app-icon-text-on-pic@3x.webp",
    accent: "#c88d71",
  },
  {
    title: "Trip planning",
    category: "Путешествия",
    metric: "+102% рост ARPU",
    description: "Новая онбординг воронка удвоила доход с пользователя",
    logo: "/app-icon-cat.png",
    accent: "#7d6bff",
  },
  {
    title: "Going Merry",
    category: "Издатель приложений",
    metric: "Рост MRR в 5 раз",
    description: "Как масштабировать доход от подписок с Paywall Builder",
    logo: "/going-merry-app-logo.webp",
    accent: "#000",
  },
  {
    title: "Shmoody",
    category: "Ментальное здоровье",
    metric: "ARR вырос с $0 до $2M",
    description: "Как вырастить бесплатное приложение до $2M ARR с Adapty",
    logo: "/app-logo-shmoody.webp",
    accent: "#4baec1",
  },
  {
    title: "Lively",
    category: "Здоровье и фитнес",
    metric: "На 83% меньше возвратов",
    description: "Сэкономлено 82% потенциального дохода",
    logo: "/app-logo-lively@2x.png",
    accent: "#e0b17c",
  },
  {
    title: "Glam AI",
    category: "Макияжа и красота",
    metric: "ROAS от Adapty — 108%",
    description: "До 1.2 млн долларов в год за 3 месяца",
    logo: "/app-logo-glam-ai.webp",
    accent: "#d78da7",
  },
  {
    title: "Pepapp",
    category: "Здоровье и фитнес",
    metric: "Окупаемость — 400%",
    description: "Как сделать Adapty бесплатным с помощью Refund Saver",
    logo: "/Pepapp-icon@2x.webp",
    accent: "#f36f4f",
  },
  {
    title: "Fotorama",
    category: "Фото и Видео",
    metric: "-40% возвратов",
    description: "Как снизить уровень возвратов с помощью Adapty",
    logo: "/app-icon-impala@2x.webp",
    accent: "#7fcf6c",
  },
];

export default function CaseStudiesGrid() {
  return (
    <Section className="bg-[#f7f5fa] py-16 sm:py-20">
      <Container className="space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#1c1a20] sm:text-4xl">
            Реальные истории роста наших клиентов
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#e9e3f1] bg-white/90 p-5 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_-50px_rgba(69,52,123,0.35)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-[#ece6f4]">
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#1c1a20]">
                    {item.title}
                  </p>
                  <p className="text-xs text-[#746d7e]">{item.category}</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <p
                  className="text-base font-extrabold"
                  style={{ color: item.accent ?? "#5b4df9" }}
                >
                  {item.metric}
                </p>
                <p className="text-sm text-[#3c3646]">{item.description}</p>
              </div>

              <button
                type="button"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#dcd4ea] px-4 py-3 text-sm font-semibold text-[#1c1a20] transition hover:border-[#bfb1dc]"
              >
                Подробнее →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            className="inline-flex items-center gap-2 text-base font-semibold text-[#1c1a20] underline-offset-4 hover:underline"
            href="/case-studies"
          >
            Открыть все кейсы →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
