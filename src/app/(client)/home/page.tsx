'use client'
import { getActiveSchedule, getTodaySchedule, getTodayScheduleReport } from '@api/schedule'
import InProgressCard from '@views/front-pages/landing-page/InProgressCard'
import ScheduleWidget from '@views/front-pages/landing-page/ScheduleWidget'
import SummaryWidget from '@views/front-pages/landing-page/SummaryWidget'

const Index = () => {
  const { data } = getTodaySchedule()
  const { data: activeSchedule } = getActiveSchedule()
  const { data: reportSchedule } = getTodayScheduleReport()

  const scheduleData = data?.data || []
  const reportData = reportSchedule || {}

  return (
    <>
      <SummaryWidget data={reportData} />
      <div className='my-3' />
      {Boolean(activeSchedule?.id) && <InProgressCard detail={activeSchedule} />}
      <div className='my-3' />
      <ScheduleWidget data={scheduleData} />
    </>
  )
}

export default Index
