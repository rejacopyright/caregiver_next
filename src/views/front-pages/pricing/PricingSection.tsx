// Third-party Imports
// Component Imports
import Pricing from '@components/pricing'
// Type Imports
import type { PricingPlanType } from '@ts/pages/pricingTypes'
import clsx from 'clsx'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

const PricingSection = ({ data }: { data: PricingPlanType[] }) => {
  return (
    <section className='plb-[100px] pbs-[70px] -mbs-[70px] bg-backgroundPaper'>
      <div className={clsx('pbs-[50px] md:pbs-[100px]', frontCommonStyles.layoutSpacing)}>
        <Pricing data={data} />
      </div>
    </section>
  )
}

export default PricingSection
