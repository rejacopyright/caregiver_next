import ScedhuleWidget from '@views/front-pages/landing-page/ScheduleWidget'
import SummaryWidget from '@views/front-pages/landing-page/SummaryWidget'

const Index = async () => {
  return (
    <>
      <SummaryWidget />
      <div className='my-3' />
      <ScedhuleWidget />
    </>
  )
}

export default Index
