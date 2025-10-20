import { ReactNode } from 'react'

import { LangProvider } from '@contexts/langContext'
import { getSystemMode } from '@core/utils/serverHelpers'
import { QueryProvider } from '@hocs/ReactQueryProvider'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import { getLang } from '@utils/getLang'

import 'react-perfect-scrollbar/dist/css/styles.css'
import '@/app/globals.css'
import '@assets/iconify-icons/generated-icons.css'

type RootLayoutProps = {
  children: ReactNode
  params: Promise<any>
}

export const metadata = {
  title: 'MUI - Next.js',
  description: 'MUI - Next.js',
}

const RootLayout = async ({ children, params: _params }: RootLayoutProps) => {
  const systemMode = await getSystemMode()
  const direction = 'ltr'
  const lang = (await getLang()) || 'en'

  return (
    <html id='__next' lang={lang} dir={direction} suppressHydrationWarning>
      <body className='flex is-full min-bs-full flex-auto flex-col'>
        <InitColorSchemeScript attribute='data' defaultMode={systemMode} />
        <QueryProvider>
          <LangProvider>{children}</LangProvider>
        </QueryProvider>
      </body>
    </html>
  )
}

export default RootLayout
