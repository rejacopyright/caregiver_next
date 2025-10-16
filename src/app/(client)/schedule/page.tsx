import InProgressCard2 from '@views/front-pages/schedule/InProgressCard2'
import SwitchDate from '@views/front-pages/schedule/SwitchDate'
import TabSchedule from '@views/front-pages/schedule/TabSchedule'

const Index = async () => {
  return (
    <>
      <InProgressCard2 />
      <div className='my-3' />
      <SwitchDate />
      <div className='my-3' />
      <TabSchedule />
    </>
  )
}

export default Index
