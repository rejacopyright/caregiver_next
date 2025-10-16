'use client'

// Third-party Imports
import Logo from '@components/layout/shared/Logo'
import ModeDropdown from '@components/layout/shared/ModeDropdown'
import UserDropdown from '@components/layout/shared/UserDropdown'
// Util Imports
import { horizontalLayoutClasses } from '@layouts/utils/layoutClasses'
// Hook Imports
import useHorizontalNav from '@menu/hooks/useHorizontalNav'
import clsx from 'clsx'

// Component Imports
import NavToggle from './NavToggle'

const NavbarContent = () => {
  // Hooks
  const { isBreakpointReached } = useHorizontalNav()

  return (
    <div
      className={clsx(
        horizontalLayoutClasses.navbarContent,
        'flex items-center justify-between gap-4 is-full'
      )}>
      <div className='flex items-center gap-4'>
        <NavToggle />
        {/* Hide Logo on Smaller screens */}
        {!isBreakpointReached && <Logo />}
      </div>
      <div className='flex items-center'>
        <ModeDropdown />
        <UserDropdown />
      </div>
    </div>
  )
}

export default NavbarContent
