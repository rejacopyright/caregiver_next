'use client'

// Type Imports
import LayoutHeader from '@layouts/components/horizontal/Header'
import Navbar from '@layouts/components/horizontal/Navbar'
// Hook Imports
import useHorizontalNav from '@menu/hooks/useHorizontalNav'

import type { getDictionary } from '@/utils/getDictionary'

import NavbarContent from './NavbarContent'
// Component Imports
import Navigation from './Navigation'

const Header = ({ dictionary }: { dictionary: Awaited<ReturnType<typeof getDictionary>> }) => {
  // Hooks
  const { isBreakpointReached } = useHorizontalNav()

  return (
    <>
      <LayoutHeader>
        <Navbar>
          <NavbarContent />
        </Navbar>
        {!isBreakpointReached && <Navigation dictionary={dictionary} />}
      </LayoutHeader>
      {isBreakpointReached && <Navigation dictionary={dictionary} />}
    </>
  )
}

export default Header
