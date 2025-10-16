import CustomAvatar from '@core/components/mui/Avatar'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'

const InProgressCard2 = () => {
  return (
    <Card className='max-lg:bs-full'>
      <CardContent className='flex flex-col pbs-0.5 pbe-2 bg-gradient-to-bl from-indigo-500 to-purple-400'>
        <div className='flex items-start justify-start gap-4 pt-5'>
          <CustomAvatar variant='rounded' src='/images/avatars/1.png' size={75} className='' />
          <div className='flex items-start flex-col gap-0.5'>
            <Typography variant='h3' className='text-white font-bold leading-8'>
              01 : 20 : 59
            </Typography>
            <Typography variant='h5' className='font-medium text-white -mb-[5px]'>
              Patient Name
            </Typography>
            <div className='flex justify-start gap-1 mt-2'>
              <i className='ri-map-pin-fill text-[10pt] text-white mt-[2px]' />
              <Typography className='text-[10pt] text-white text-wrap text-start'>
                Samarang St, Garut, West Java
              </Typography>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-1 plb-2'>
          <div className='flex items-center justify-end gap-2 mt-2'>
            <i className='ri-time-fill text-[11pt] text-white' />
            <Typography className='text-[11pt] text-white font-medium'>11:30 - 12:00</Typography>
          </div>
          <LinearProgress
            variant='determinate'
            value={25}
            color='primary'
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
          />
          <div className='mt-2 w-full flex flex-col'>
            <Button
              variant='contained'
              className='bg-gradient-to-tr from-indigo-600 flex items-center gap-2'>
              <i className='ri-alarm-fill text-[16pt] text-white' />
              <div className='text-[12pt]'>Clock Out</div>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default InProgressCard2
