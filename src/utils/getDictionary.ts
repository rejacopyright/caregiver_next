// Third-party Imports
// Type Imports
import type { Locale } from '@configs/i18n'

import 'server-only'

const dictionaries = {
  en: () => import('@lang/en.json').then((module) => module.default),
  id: () => import('@lang/id.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]?.()
