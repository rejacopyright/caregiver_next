import { i18n } from '@configs/i18n'

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
