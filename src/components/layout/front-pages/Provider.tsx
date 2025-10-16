'use client'
import { ReactNode, useEffect, useRef } from 'react'

import { useImageVariant } from '@core/hooks/useImageVariant'
import { useSettings } from '@core/hooks/useSettings'
import type { Mode } from '@core/types'
import clsx from 'clsx'

import styles from '@views/front-pages/landing-page/styles.module.css'
import frontCommonStyles from '@views/front-pages/styles.module.css'

interface Props {
  children: ReactNode
  mode: Mode
}

const FrontProvider = ({ mode, children }: Props) => {
  const ref = useRef<null | HTMLDivElement>(null)
  const scheduleBgLight = '/images/front-pages/landing-page/hero-bg-light.png'
  const scheduleBgDark = '/images/front-pages/landing-page/hero-bg-dark.png'

  const scheduleBg = useImageVariant(mode, scheduleBgLight, scheduleBgDark)

  const { updatePageSettings } = useSettings()

  useEffect(() => {
    return updatePageSettings({
      skin: 'default',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section
      id='home'
      ref={ref}
      className='relative overflow-hidden pbs-[35px] -mbs-[70px] bg-backgroundPaper z-[1] min-h-[100vh]'>
      <img src={scheduleBg} alt='' className={styles.heroSectionBg} />
      <div className={clsx('pbs-16 overflow-hidden', frontCommonStyles.layoutSpacing)}>
        <div className='md:max-is-[550px] mlb-0 mli-auto text-center mb-35'>{children}</div>
      </div>
    </section>
  )
}

export default FrontProvider
