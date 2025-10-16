// Third-party Imports
// Type Imports
import type { ChildrenType } from '@core/types'
// Util Imports
import { horizontalLayoutClasses } from '@layouts/utils/layoutClasses'
import clsx from 'clsx'

const Navbar = ({ children }: ChildrenType) => {
  return (
    <div
      className={clsx(horizontalLayoutClasses.navbar, 'flex items-center justify-between is-full')}>
      {children}
    </div>
  )
}

export default Navbar
