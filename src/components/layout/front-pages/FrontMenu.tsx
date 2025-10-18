'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { Mode } from '@core/types'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import type { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { p } from '@utils/fn'
import clsx from 'clsx'

import config from '@/configs/config'
import { useIntersection } from '@/hooks/useIntersection'

type Props = {
  mode: Mode
  isDrawerOpen: boolean
  setIsDrawerOpen: (open: boolean) => void
}

type WrapperProps = {
  children: React.ReactNode
  isBelowLgScreen: boolean
  className?: string
  isDrawerOpen: boolean
  setIsDrawerOpen: (open: boolean) => void
}

const Wrapper = (props: WrapperProps) => {
  const { children, isBelowLgScreen, className, isDrawerOpen, setIsDrawerOpen } = props

  if (isBelowLgScreen) {
    return (
      <Drawer
        variant='temporary'
        anchor='left'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{ '& .MuiDrawer-paper': { width: ['100%', 300] } }}
        className={clsx('p-5', className)}>
        <div className='p-4 flex flex-col gap-x-3'>
          <IconButton
            onClick={() => setIsDrawerOpen(false)}
            className='absolute inline-end-4 block-start-2'>
            <i className='ri-close-line' />
          </IconButton>
          {children}
        </div>
      </Drawer>
    )
  }

  return (
    <div className={clsx('flex items-center flex-wrap gap-x-4 gap-y-3', className)}>{children}</div>
  )
}

const FrontMenu = (props: Props) => {
  const { isDrawerOpen, setIsDrawerOpen } = props

  const pathname = usePathname()
  const isBelowLgScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const { intersections } = useIntersection()
  const landingUrl = p(config.landingUrl)

  useEffect(() => {
    if (!isBelowLgScreen && isDrawerOpen) {
      setIsDrawerOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBelowLgScreen])

  return (
    <Wrapper
      isBelowLgScreen={isBelowLgScreen}
      isDrawerOpen={isDrawerOpen}
      setIsDrawerOpen={setIsDrawerOpen}>
      <Typography
        color='text.primary'
        component={Link}
        href={landingUrl}
        className={clsx('font-medium plb-3 pli-1.5 hover:text-primary hidden', {
          'text-primary': !intersections.features && pathname === landingUrl,
        })}>
        Home
      </Typography>
      <Typography
        color='text.primary'
        component={Link}
        href={`${landingUrl}#features`}
        className={clsx('font-medium plb-3 pli-1.5 hover:text-primary hidden', {
          'text-primary': intersections.features,
        })}>
        Features
      </Typography>
    </Wrapper>
  )
}

export default FrontMenu
