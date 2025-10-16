import InProgressCard from '@views/front-pages/landing-page/InProgressCard'
import ScheduleWidget from '@views/front-pages/landing-page/ScheduleWidget'
import SummaryWidget from '@views/front-pages/landing-page/SummaryWidget'

const Index = async () => {
  return (
    <>
      <SummaryWidget />
      <div className='my-3' />
      <InProgressCard />
      <div className='my-3' />
      <ScheduleWidget />
    </>
  )
}

export default Index
