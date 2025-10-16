'use client'
import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'

import { i18n } from '@configs/i18n'

type cookieType = string | Record<string, string> | undefined

const getCookie = (name?: string): cookieType => {
  if (typeof document === 'undefined') return ''
  const cookies = document.cookie

  if (!name) {
    return Object.fromEntries(
      cookies
        .split(';')
        .map((cookie) => cookie.split('=').map((c) => c.trim()))
        .filter(([key]) => key)
    )
  }

  const value = `; ${cookies}`
  const parts = value.split(`; ${name}=`)

  if (parts.length === 2) return parts.pop()?.split(';').shift()
}

export const useCookie = (name?: string) => {
  const [cookie, setCookie] = useState<cookieType>(undefined)

  useEffect(() => {
    const c = getCookie(name)

    setCookie(c)
  }, [name])

  return cookie
}

export const getClientLang = () => {
  const c = useCookie('lang')

  return c || i18n.defaultLocale
}

export const getPathLang = () => {
  const pathname = usePathname()

  const matchedLocale = useMemo(() => {
    return i18n.locales.find((lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`))
  }, [pathname])

  return matchedLocale ? `/${matchedLocale}` : ''
}
