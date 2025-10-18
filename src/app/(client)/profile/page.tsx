'use client'
import { getScheduleReport } from '@api/schedule'
import ChangePasswordCard from '@views/front-pages/profile/ChangePasswordCard'
import SummaryWidget2 from '@views/front-pages/profile/SummaryWidget2'
import UserProfileHeader from '@views/front-pages/profile/UserProfileHeader'

const Index = () => {
  const { data: reportSchedule } = getScheduleReport()
  const reportData = reportSchedule || {}

  return (
    <>
      <UserProfileHeader />
      <div className='my-3' />
      <SummaryWidget2 data={reportData} />
      <div className='my-3' />
      <ChangePasswordCard />
    </>
  )
}

export default Index
