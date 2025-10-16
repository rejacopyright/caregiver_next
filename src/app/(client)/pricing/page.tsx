import PricingWrapper from '@views/front-pages/pricing'

import { getPricingData } from '@/app/server/actions'

const PricingPage = async () => {
  // Vars
  const data = await getPricingData()

  return <PricingWrapper data={data} />
}

export default PricingPage
