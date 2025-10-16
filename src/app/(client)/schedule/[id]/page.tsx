import ActivityTimeline from '@views/front-pages/schedule/ActivityTimeline'
import InProgressCard3 from '@views/front-pages/schedule/InProgressCard3'

const Index = async () => {
  return (
    <>
      <InProgressCard3 />
      <div className='my-3' />
      <ActivityTimeline />
    </>
  )
}

export default Index
