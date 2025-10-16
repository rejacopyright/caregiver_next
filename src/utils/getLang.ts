import { cookies } from 'next/headers'

import { i18n, Locale } from '@configs/i18n'

import message from '@/data/dictionaries/en.json'

import { getDictionary } from './getDictionary'

export const getLang = async (): Promise<Locale> => {
  const lang = (await cookies()).get('lang')?.value as Locale

  return lang ?? i18n.defaultLocale
}

export const translate = async (): Promise<typeof message> => {
  const lang = await getLang()
  const dictionary = await getDictionary(lang as Locale)

  return dictionary
}
