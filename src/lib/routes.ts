export type RouteItem = {
  label: string;
  href: string;
};

export const primaryNav: RouteItem[] = [
  { label: "Главная", href: "/" },
  { label: "Цены", href: "/pricing" },
  { label: "Интеграции", href: "/integrations" },
  { label: "Кейсы", href: "/case-studies" },
  { label: "Ресурсы", href: "/resources/blog" },
];

export const footerNav: Record<string, RouteItem[]> = {
  Продукт: [
    { label: "A/B-тесты пейволлов", href: "/product/paywall-ab-testing" },
    { label: "Запись на демо", href: "/schedule-demo" },
  ],
  Ресурсы: [
    { label: "Блог", href: "/resources/blog" },
    { label: "Гайды и eBooks", href: "/resources/ebooks" },
  ],
  Разделы: [
    { label: "Интеграции", href: "/integrations" },
    { label: "Кейсы", href: "/case-studies" },
    { label: "Цены", href: "/pricing" },
  ],
};
