import CustomAvatar from '@core/components/mui/Avatar'
import type { ThemeColor } from '@core/types'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

type DataType = {
  icon: string
  stats: string
  title: string
  color: ThemeColor
}

const data: DataType[] = [
  {
    stats: '12',
    color: 'primary',
    title: `Today's Upcoming Schedule`,
    icon: 'ri-calendar-schedule-line',
  },
  {
    stats: '2',
    color: 'success',
    icon: 'ri-calendar-check-line',
    title: `Today's Completed Schedule`,
  },
  {
    stats: '4',
    color: 'error',
    title: `Missed Schedule`,
    icon: 'ri-arrow-left-right-line',
  },
]

const SummaryWidget = () => {
  return (
    <Card>
      <CardContent>
        <div className='flex flex-wrap justify-between gap-3'>
          {data.map((item, index) => (
            <div className='text-start flex-1 md:flex-none' key={index}>
              <div className='flex items-center justify-start flex-1 gap-2'>
                <div className='text-start'>
                  <CustomAvatar variant='rounded' skin='light' color={item.color}>
                    <i className={item.icon} />
                  </CustomAvatar>
                </div>
                <Typography variant='h4' className='text-primary'>
                  {item.stats}
                </Typography>
              </div>
              <Typography className='text-[8pt] mt-1 text-black'>{item.title}</Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default SummaryWidget
