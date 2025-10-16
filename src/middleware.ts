import { type NextRequest, NextResponse } from 'next/server'

import { i18n } from '@configs/i18n'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const matchedLocale = i18n.locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )

  if (matchedLocale) {
    const newPath = pathname.replace(`/${matchedLocale}`, '') || '/'
    const url = request.nextUrl.clone()

    url.pathname = newPath
    const response = NextResponse.rewrite(url)

    response.cookies.set('lang', matchedLocale)

    return response
  }

  const response = NextResponse.next()

  response.cookies.set('lang', i18n.defaultLocale)

  return response
}

export const config = {
  // matcher: ['/en/:path*', '/id/:path*'],
  matcher: ['/', '/((?!_next|favicon.ico).*)'],
}
