export const i18n = {
  defaultLocale: "en",
  locales: ["en", "hi-IN"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
