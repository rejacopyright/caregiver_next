'use client'

// Next Imports
import Link from 'next/link'

// Util Imports
import { horizontalLayoutClasses } from '@layouts/utils/layoutClasses'
// Hook Imports
import useHorizontalNav from '@menu/hooks/useHorizontalNav'
// Third-party Imports
import clsx from 'clsx'

const FooterContent = () => {
  // Hooks
  const { isBreakpointReached } = useHorizontalNav()

  return (
    <div
      className={clsx(
        horizontalLayoutClasses.footerContent,
        'flex items-center justify-between flex-wrap gap-4'
      )}>
      <p>
        <span className='text-textSecondary'>{`© ${new Date().getFullYear()}, Made with `}</span>
        <span>{`❤️`}</span>
        <span className='text-textSecondary'>{` by `}</span>
        <Link href='https://pixinvent.com/' target='_blank' className='text-primary uppercase'>
          Pixinvent
        </Link>
      </p>
      {!isBreakpointReached && (
        <div className='flex items-center gap-4'>
          <Link
            href='https://themeforest.net/licenses/standard'
            target='_blank'
            className='text-primary'>
            License
          </Link>
          <Link
            href='https://themeforest.net/user/pixinvent/portfolio'
            target='_blank'
            className='text-primary'>
            More Themes
          </Link>
          <Link
            href='https://demos.pixinvent.com/materialize-nextjs-admin-template/documentation'
            target='_blank'
            className='text-primary'>
            Documentation
          </Link>
          <Link href='https://pixinvent.ticksy.com' target='_blank' className='text-primary'>
            Support
          </Link>
        </div>
      )}
    </div>
  )
}

export default FooterContent
