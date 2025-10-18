import CustomAvatar from '@core/components/mui/Avatar'
import type { ThemeColor } from '@core/types'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

type DataType = {
  id: string
  icon: string
  title: string
  color: ThemeColor
}

const dataMap: DataType[] = [
  {
    id: 'upcoming',
    color: 'primary',
    title: `Upcoming Schedule`,
    icon: 'ri-calendar-schedule-line',
  },
  {
    id: 'completed',
    color: 'success',
    icon: 'ri-calendar-check-line',
    title: `Completed Schedule`,
  },
  {
    id: 'missed',
    color: 'error',
    title: `Missed Schedule`,
    icon: 'ri-arrow-left-right-line',
  },
]

const SummaryWidget2 = ({ data }: any) => {
  return (
    <Card>
      <CardContent>
        <div className='flex flex-wrap justify-between gap-3'>
          {dataMap.map((item, index) => (
            <div className='text-start flex-1 md:flex-none' key={index}>
              <div className='flex items-center justify-start flex-1 gap-2'>
                <div className='text-start'>
                  <CustomAvatar variant='rounded' skin='light' color={item.color}>
                    <i className={item.icon} />
                  </CustomAvatar>
                </div>
                <Typography variant='h4' className='text-primary'>
                  {data?.[item?.id]}
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

export default SummaryWidget2
