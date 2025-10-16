export type Lang = 'en' | 'id'
export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'id'],
  langDirection: {
    en: 'ltr',
    id: 'ltr',
    // ar: 'rtl',
  },
} as const

export type Locale = (typeof i18n)['locales'][number]
