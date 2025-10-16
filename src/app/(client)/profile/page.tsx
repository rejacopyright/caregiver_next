import ChangePasswordCard from '@views/front-pages/profile/ChangePasswordCard'
import SummaryWidget2 from '@views/front-pages/profile/SummaryWidget2'
import UserProfileHeader from '@views/front-pages/profile/UserProfileHeader'

const Index = async () => {
  return (
    <>
      <UserProfileHeader />
      <div className='my-3' />
      <SummaryWidget2 />
      <div className='my-3' />
      <ChangePasswordCard />
    </>
  )
}

export default Index
