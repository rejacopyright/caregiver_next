'use client'

import { useState } from 'react'
import Link from 'next/link'

import Logo from '@components/layout/shared/Logo'
import config from '@configs/config'
import type { Mode } from '@core/types'
import { frontLayoutClasses } from '@layouts/utils/layoutClasses'
import type { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { p } from '@utils/fn'
import clsx from 'clsx'

import FrontMenu from './FrontMenu'

import styles from './styles.module.css'

const Header = ({ mode }: { mode: Mode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const _isBelowLgScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const trigger = useScrollTrigger({
    threshold: 0,
    disableHysteresis: true,
  })

  const landingUrl = p(config.landingUrl)

  return (
    <header className={clsx(frontLayoutClasses.header, styles.header)}>
      <div
        className={clsx(frontLayoutClasses.navbar, styles.navbar, {
          [styles.headerScrolled]: trigger,
        })}>
        <div className={clsx(frontLayoutClasses.navbarContent, styles.navbarContent)}>
          <div className='flex items-center gap-10'>
            <Link href={landingUrl}>
              <Logo />
            </Link>
            <FrontMenu mode={mode} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
