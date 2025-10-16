'use client'

// React Imports
import { useEffect } from 'react'

import { useSettings } from '@core/hooks/useSettings'
// Component Imports
import Checkout from '@views/pages/wizard-examples/checkout/index'
// Third-party Imports
import clsx from 'clsx'

// Styles Imports
import frontCommonStyles from './styles.module.css'

const CheckoutPage = () => {
  // Hooks
  const { updatePageSettings } = useSettings()

  // For Page specific settings
  useEffect(() => {
    return updatePageSettings({
      skin: 'default',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className={clsx('md:plb-[100px] plb-6', frontCommonStyles.layoutSpacing)}>
      <Checkout />
    </section>
  )
}

export default CheckoutPage
