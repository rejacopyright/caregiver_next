// Next Imports
import { redirect } from 'next/navigation'
// Third-party Imports
import { getServerSession } from 'next-auth'

import config from '@configs/config'
import type { ChildrenType } from '@core/types'
import { p } from '@utils/fn'

const GuestOnlyRoute = async ({ children }: ChildrenType) => {
  const session = await getServerSession()

  if (session) {
    redirect(p(config.landingUrl))
  }

  return <>{children}</>
}

export default GuestOnlyRoute
