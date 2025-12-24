export type AnalyticsEvent = {
  name: string;
  payload?: Record<string, unknown>;
};

export function trackEvent(event: AnalyticsEvent) {
  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", event.name, event.payload ?? {});
  }
}
