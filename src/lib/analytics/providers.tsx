import type { ReactNode } from "react";
import { trackEvent } from "./events";

type AnalyticsProviderProps = {
  children: ReactNode;
};

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  // Сюда можно подключить реальные провайдеры аналитики.
  if (process.env.NODE_ENV !== "production") {
    trackEvent({ name: "app_render" });
  }

  return <>{children}</>;
}
