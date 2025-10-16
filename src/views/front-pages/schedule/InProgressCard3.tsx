import CustomAvatar from '@core/components/mui/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const InProgressCard3 = () => {
  return (
    <Card className='max-lg:bs-full'>
      <CardContent className='flex flex-col pbs-0.5 pbe-2 bg-gradient-to-tr from-indigo-500 to-purple-400'>
        <div className='flex items-start justify-start gap-4 pt-4 pb-3'>
          <CustomAvatar variant='rounded' src='/images/avatars/1.png' size={75} className='' />
          <div className='flex items-start flex-col gap-0.5'>
            <Typography variant='h5' className='font-medium text-white -mb-[5px]'>
              Patient Name
            </Typography>
            <div className='flex justify-start gap-1 mt-1'>
              <i className='ri-map-pin-fill text-[10pt] text-red-500 mt-[2px]' />
              <Typography className='text-[10pt] text-white text-wrap text-start'>
                Samarang St, Garut, West Java
              </Typography>
            </div>
            <div className='flex items-center justify-end gap-2 mt-1'>
              <i className='ri-time-fill text-[10pt] text-white' />
              <Typography className='text-[10pt] text-white font-medium'>11:30 - 12:00</Typography>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default InProgressCard3
