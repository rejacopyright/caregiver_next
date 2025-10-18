import { i18n } from '@configs/i18n'
import { format, parseISO } from 'date-fns'

import { getPathLang } from './getCookie'

export const p = (pathName?: string) => {
  const lang = getPathLang() || '/'

  if (pathName === '/' || !pathName) {
    if (lang !== '/') {
      return lang?.replace(/\/{2,}/g, '/')
    } else {
      return ''
    }
  }

  const prePath = `${lang}/${pathName}`
  let newPath = prePath?.replace(/\/{2,}/g, '/')

  if (newPath?.length > 1 && newPath?.endsWith('/')) {
    newPath = newPath.slice(0, -1)
  }

  return newPath
}

export const isLocalePath = (path?: string) =>
  i18n.locales.find((l) => path === `/${l}` || path?.startsWith(`/${l}/`))

export function formatISO(date: string | Date | null | undefined, pattern?: string): string {
  if (!date || (typeof date === 'string' && date.trim() === '')) {
    return ''
  }

  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    const defaultPattern = 'yyyy-MM-dd HH:mm:ss'

    return format(dateObj, pattern ?? defaultPattern)
  } catch {
    return ''
  }
}

export function randomNumber(min?: number, max?: number): number {
  const _min = typeof min === 'number' && min >= 0 ? min : 0
  const _max = typeof max === 'number' && max >= 0 ? max : 0

  const [low, high] = _min > _max ? [_max, _min] : [_min, _max]

  return Math.floor(Math.random() * (high - low + 1)) + low
}
