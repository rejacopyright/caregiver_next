'use client'
import { getTodaySchedule } from '@api/schedule'
import InProgressCard from '@views/front-pages/landing-page/InProgressCard'
import ScheduleWidget from '@views/front-pages/landing-page/ScheduleWidget'
import SummaryWidget from '@views/front-pages/landing-page/SummaryWidget'

const Index = () => {
  const { data } = getTodaySchedule()

  const scheduleData = data?.data || []

  return (
    <>
      <SummaryWidget />
      <div className='my-3' />
      <InProgressCard />
      <div className='my-3' />
      <ScheduleWidget data={scheduleData} />
    </>
  )
}

export default Index
