'use client'
import { getActiveSchedule } from '@api/schedule'
import InProgressCard2 from '@views/front-pages/schedule/InProgressCard2'
import SwitchDate from '@views/front-pages/schedule/SwitchDate'
import TabSchedule from '@views/front-pages/schedule/TabSchedule'

const Index = () => {
  const { data: activeSchedule } = getActiveSchedule()

  return (
    <>
      {Boolean(activeSchedule?.id) && <InProgressCard2 detail={activeSchedule} />}
      <div className='my-3' />
      <SwitchDate />
      <div className='my-3' />
      <TabSchedule />
    </>
  )
}

export default Index
