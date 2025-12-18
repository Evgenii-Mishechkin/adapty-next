import Container from "@/components/ui/Container";
import Link from "next/link";

const navColumns: Array<{ title: string; links: Array<{ label: string; href: string }> }> = [
  {
    title: "Менеджмент пейволлов",
    links: [
      { label: "Конструктор пейволлов", href: "/product/paywall-ab-testing" },
      { label: "Конструктор онбординга", href: "/product/paywall-ab-testing" },
      { label: "AI генератор", href: "/product/paywall-ab-testing" },
      { label: "A/B тестирование", href: "/product/paywall-ab-testing" },
      { label: "Таргетинг", href: "/product/paywall-ab-testing" },
      { label: "Локализация", href: "/product/paywall-ab-testing" },
      { label: "Удаленная конфигурация", href: "/product/paywall-ab-testing" },
    ],
  },
  {
    title: "Инфраструктура",
    links: [
      { label: "SDK для подписок", href: "/integrations" },
      { label: "Синхронизация", href: "/integrations" },
      { label: "Резервные пейволлы", href: "/integrations" },
      { label: "Контроль возвратов", href: "/product/paywall-ab-testing" },
      { label: "Интеграции", href: "/integrations" },
    ],
  },
  {
    title: "Роли",
    links: [
      { label: "Для разработчиков", href: "/schedule-demo" },
      { label: "Для маркетологов", href: "/schedule-demo" },
      { label: "Для владельцев", href: "/schedule-demo" },
    ],
  },
  {
    title: "Сравнение",
    links: [
      { label: "RevenueCat", href: "/case-studies" },
      { label: "Purchasely", href: "/case-studies" },
      { label: "Qonversion", href: "/case-studies" },
      { label: "Superwall", href: "/case-studies" },
    ],
  },
  {
    title: "SDK",
    links: [
      { label: "iOS", href: "/integrations" },
      { label: "Android", href: "/integrations" },
      { label: "React Native", href: "/integrations" },
      { label: "Flutter", href: "/integrations" },
      { label: "Unity", href: "/integrations" },
      { label: "Stripe", href: "/integrations" },
    ],
  },
  {
    title: "Ресурсы",
    links: [
      { label: "Блог", href: "/resources/blog" },
      { label: "Гайды", href: "/resources/ebooks" },
      { label: "Документация", href: "/resources/ebooks" },
      { label: "Вебинары", href: "/resources/ebooks" },
      { label: "Сообщество", href: "/resources/ebooks" },
    ],
  },
  {
    title: "Аналитика",
    links: [
      { label: "Аналитика доходов", href: "/integrations" },
      { label: "Аналитика LTV", href: "/integrations" },
      { label: "Прогнозирование", href: "/integrations" },
      { label: "Менеджер Apple Ads", href: "/integrations" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "О нас", href: "/case-studies" },
      { label: "Контакты", href: "/case-studies" },
      { label: "Карьера", href: "/case-studies" },
      { label: "Партнерство", href: "/case-studies" },
    ],
  },
];

export default function FooterNav() {
  return (
    <Container className="grid gap-8 text-sm text-[#c8c2d5] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {navColumns.map((col) => (
        <div key={col.title} className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white">
            {col.title}
          </p>
          <ul className="space-y-2">
            {col.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Container>
  );
}
