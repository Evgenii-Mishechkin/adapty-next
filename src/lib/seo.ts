export function buildTitle(pageTitle?: string) {
  const base = "Adapty — платформа для роста мобильных приложений";
  return pageTitle ? `${pageTitle} | ${base}` : base;
}

export const defaultDescription =
  "Управление пейволлами, A/B-тестирование, аналитика и подписки для роста мобильных приложений.";
