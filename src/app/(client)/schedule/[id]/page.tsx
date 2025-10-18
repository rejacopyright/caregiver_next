'use client'
import { useParams } from 'next/navigation'

import { getActiveSchedule, getDetailSchedule } from '@api/schedule'
import ActivityTimeline from '@views/front-pages/schedule/ActivityTimeline'
import InProgressCard3 from '@views/front-pages/schedule/InProgressCard3'

const Index = () => {
  const params = useParams()
  const id = params?.id ? params?.id?.toString() : undefined
  const { data } = getDetailSchedule(id)
  const { data: activeSchedule } = getActiveSchedule()

  return (
    <>
      <InProgressCard3 data={data} />
      <div className='my-3' />
      <ActivityTimeline data={data} activeData={activeSchedule} />
    </>
  )
}

export default Index
