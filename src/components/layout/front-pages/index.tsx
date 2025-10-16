import Header from '@components/layout/front-pages/Header'
import type { ChildrenType } from '@core/types'
import { getServerMode } from '@core/utils/serverHelpers'
import { frontLayoutClasses } from '@layouts/utils/layoutClasses'

import BottomNav from './BottomNav'
import FrontProvider from './Provider'

const FrontLayout = async ({ children }: ChildrenType) => {
  const mode = await getServerMode()

  return (
    <div className={frontLayoutClasses.root}>
      <Header mode={mode} />
      <FrontProvider mode={mode}>
        {children}
        <BottomNav />
      </FrontProvider>
    </div>
  )
}

export default FrontLayout
