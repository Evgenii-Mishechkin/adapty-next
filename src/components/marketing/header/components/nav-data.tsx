export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  hasSubmenu?: boolean;
};

export const desktopNav: NavItem[] = [
  { label: "Продукт", href: "#", hasSubmenu: true },
  { label: "Кейсы", href: "/case-studies", hasSubmenu: true },
  { label: "Ресурсы", href: "#", hasSubmenu: true },
  { label: "Документация", href: "#", hasSubmenu: true },
  { label: "Цены", href: "/pricing" },
  {
    label: "web2app",
    href: "https://funnelfox.com/?utm_source=adapty&utm_medium=website&utm_campaign=menu",
    external: true,
  },
];

export const mobileMenu: NavItem[] = [
  { label: "Компания", href: "#", hasSubmenu: true },
  { label: "Продукт", href: "#", hasSubmenu: true },
  { label: "Решение", href: "#", hasSubmenu: true },
  { label: "Ресурсы", href: "#", hasSubmenu: true },
  { label: "Интеграции", href: "/integrations", hasSubmenu: true },
  { label: "SDK подписок", href: "#", hasSubmenu: true },
  { label: "Исследования", href: "#", hasSubmenu: true },
  { label: "Документация", href: "#", hasSubmenu: true },
  { label: "Цены", href: "/pricing" },
  { label: "Блог", href: "/resources/blog" },
  {
    label: "web2app",
    href: "https://funnelfox.com/?utm_source=adapty&utm_medium=website&utm_campaign=menu"
  },
];

export const MOBILE_PANEL_TOP_OFFSET_PX = 72;