import { Locale } from '@configs/i18n'
import { LangProvider } from '@contexts/langContext'
import type { ChildrenType } from '@core/types'
import { getSystemMode } from '@core/utils/serverHelpers'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import { getLang } from '@utils/getLang'

// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'
// Style Imports
import '@/app/globals.css'
// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

export const metadata = {
  title: 'Materialize - Material Next.js Admin Template',
  description: 'Materialize - Material Next.js Admin Template',
}

const RootLayout = async (props: ChildrenType & { params: Promise<{ lang: Locale }> }) => {
  const { children } = props

  // Vars

  const systemMode = await getSystemMode()
  const direction = 'ltr'
  const lang = await getLang()

  return (
    <html id='__next' lang={lang} dir={direction} suppressHydrationWarning>
      <body className='flex is-full min-bs-full flex-auto flex-col'>
        <InitColorSchemeScript attribute='data' defaultMode={systemMode} />
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  )
}

export default RootLayout
