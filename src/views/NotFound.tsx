'use client'

// Next Imports
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import config from '@configs/config'
// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'
// Type Imports
import type { Mode } from '@core/types'
// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { p } from '@utils/fn'

const NotFound = ({ mode }: { mode: Mode }) => {
  // Vars
  const darkImg = '/images/pages/misc-mask-1-dark.png'
  const lightImg = '/images/pages/misc-mask-1-light.png'

  // Hooks
  const router = useRouter()
  const miscBackground = useImageVariant(mode, lightImg, darkImg)

  return (
    <div className='flex items-center justify-center min-bs-[100dvh] relative p-6 overflow-x-hidden'>
      <div className='flex items-center flex-col text-center gap-10'>
        <div className='flex flex-col gap-2 is-[90vw] sm:is-[unset]'>
          <Typography className='font-medium text-8xl' color='text.primary'>
            404
          </Typography>
          <Typography variant='h4'>Page Not Found ⚠️</Typography>
          <Typography>We couldn&#39;t find the page you are looking for.</Typography>
        </div>
        <img
          alt='error-illustration'
          src='/images/illustrations/characters/3.png'
          className='object-cover bs-[400px] md:bs-[450px] lg:bs-[500px]'
        />
        <div className='flex gap-[10px]'>
          <Button
            onClick={router.back}
            variant='outlined'
            startIcon={<i className='ri-arrow-left-s-line' />}>
            Back
          </Button>
          <Button
            href='/'
            component={Link}
            variant='contained'
            startIcon={<i className='ri-home-3-line' />}>
            Home
          </Button>
        </div>
      </div>
      <img alt='' src={miscBackground} className='absolute bottom-0 z-[-1] is-full max-md:hidden' />
    </div>
  )
}

export const NotFoundAdmin = ({ mode }: { mode: Mode }) => {
  // Vars
  const darkImg = '/images/pages/misc-mask-1-dark.png'
  const lightImg = '/images/pages/misc-mask-1-light.png'

  // Hooks
  const router = useRouter()
  const _miscBackground = useImageVariant(mode, lightImg, darkImg)

  return (
    <div className='flex items-center justify-center min-bs-[80dvh] relative p-6 overflow-x-hidden'>
      <div className='flex items-center flex-col text-center gap-10'>
        <div className='flex flex-col gap-2 is-[90vw] sm:is-[unset]'>
          <Typography className='font-medium text-5xl' color='text.primary'>
            404
          </Typography>
          <Typography variant='h6'>Page Not Found ⚠️</Typography>
          <Typography>We couldn&#39;t find the page you are looking for.</Typography>
        </div>
        <img
          alt='error-illustration'
          src='/images/illustrations/characters/3.png'
          className='object-cover bs-[150px] md:bs-[175px] lg:bs-[200px]'
        />
        <div className='flex gap-[10px]'>
          <Button
            onClick={router.back}
            variant='outlined'
            startIcon={<i className='ri-arrow-left-s-line' />}>
            Back
          </Button>
          <Button
            href={p(config.panelUrl)}
            component={Link}
            variant='contained'
            startIcon={<i className='ri-home-3-line' />}>
            Home
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
