// MUI Imports
import FrontLayout from '@components/layout/front-pages'
// Component Imports
import Providers from '@components/Providers'
import ScrollToTop from '@core/components/scroll-to-top'
// Type Imports
import type { ChildrenType } from '@core/types'
// Util Imports
import { getSystemMode } from '@core/utils/serverHelpers'
import BlankLayout from '@layouts/BlankLayout'
import Button from '@mui/material/Button'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'

// Context Imports
import { IntersectionProvider } from '@/contexts/intersectionContext'

// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'
// Style Imports
import '@/app/globals.css'
// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

export const metadata = {
  title: 'MUI - Next.js',
  description: 'MUI - Next.js',
}

const Layout = async ({ children }: ChildrenType) => {
  // Vars
  const systemMode = await getSystemMode()

  return (
    <>
      <InitColorSchemeScript attribute='data' defaultMode={systemMode} />
      <Providers direction='ltr'>
        <BlankLayout systemMode={systemMode}>
          <IntersectionProvider>
            <FrontLayout>
              {children}
              <ScrollToTop className='mui-fixed'>
                <Button
                  variant='contained'
                  className='is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center mb-10'>
                  <i className='ri-arrow-up-line' />
                </Button>
              </ScrollToTop>
            </FrontLayout>
          </IntersectionProvider>
        </BlankLayout>
      </Providers>
    </>
  )
}

export default Layout
