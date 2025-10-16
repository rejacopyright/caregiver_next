'use client'
import { ReactNode, useRef } from 'react'

import { useImageVariant } from '@core/hooks/useImageVariant'
import type { Mode } from '@core/types'
import clsx from 'clsx'

import styles from '@components/layout/front-pages/styles.module.css'
import frontCommonStyles from '@views/front-pages/styles.module.css'

interface Props {
  children: ReactNode
  mode: Mode
}

const FrontProvider = ({ mode, children }: Props) => {
  const ref = useRef<null | HTMLDivElement>(null)
  const scedhuleBgLight = '/images/front-pages/landing-page/hero-bg-light.png'
  const scedhuleBgDark = '/images/front-pages/landing-page/hero-bg-dark.png'

  const scedhuleBg = useImageVariant(mode, scedhuleBgLight, scedhuleBgDark)

  return (
    <section
      id='home'
      ref={ref}
      className='relative overflow-hidden pbs-[70px] -mbs-[70px] bg-backgroundPaper z-[1] min-h-[100vh]'>
      <img src={scedhuleBg} alt='' className={styles.heroSectionBg} />
      <div className={clsx('pbs-16 overflow-hidden', frontCommonStyles.layoutSpacing)}>
        <div className='md:max-is-[550px] mlb-0 mli-auto text-center mb-20'>{children}</div>
      </div>
    </section>
  )
}

export default FrontProvider
