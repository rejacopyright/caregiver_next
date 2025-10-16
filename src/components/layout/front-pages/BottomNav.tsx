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
    stats: '8,458',
    color: 'primary',
    title: 'Customers',
    icon: 'ri-user-star-line',
  },
  {
    stats: '$28.5k',
    color: 'warning',
    icon: 'ri-pie-chart-2-line',
    title: 'Total Profit',
  },
  {
    color: 'info',
    stats: '2,450k',
    title: 'Transactions',
    icon: 'ri-arrow-left-right-line',
  },
]

const BottomNav = () => {
  return (
    <Card>
      <CardContent>
        <div className='flex flex-wrap justify-between gap-4'>
          {data.map((item, index) => (
            <div key={index} className='flex items-center gap-3'>
              <CustomAvatar variant='rounded' skin='light' color={item.color}>
                <i className={item.icon}></i>
              </CustomAvatar>
              <div className='text-start'>
                <Typography variant='h5' className='leading-5'>
                  {item.stats}
                </Typography>
                <Typography className='text-[10pt]'>{item.title}</Typography>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default BottomNav
