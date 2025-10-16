import Link from 'next/link'

import CustomAvatar from '@core/components/mui/Avatar'
import type { ThemeColor } from '@core/types'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

type DataType = {
  avatarSrc: string
  title: string
  date: string
  loc: string
  chipLabel: string
  chipColor?: ThemeColor
}

const data: DataType[] = [
  {
    avatarSrc: '/images/avatars/4.png',
    title: 'Marry Jane',
    date: '21 Jul | 08:20-10:30',
    loc: 'Samarang St, Garut, West Java',
    chipLabel: 'Business',
    chipColor: 'primary',
  },
  {
    avatarSrc: '/images/avatars/5.png',
    title: 'John Doe',
    date: '24 Jul | 11:30-12:00',
    loc: 'Samarang St, Garut, West Java',
    chipLabel: 'Meditation',
    chipColor: 'success',
  },
  {
    avatarSrc: '/images/avatars/3.png',
    title: 'Reja Jamil',
    date: '28 Jul | 05:00-6:45',
    loc: 'Samarang St, Garut, West Java',
    chipLabel: 'Dinner',
    chipColor: 'warning',
  },
  {
    avatarSrc: '/images/avatars/2.png',
    title: 'Mark Lee',
    date: '03 Aug | 07:00-8:30',
    loc: 'Samarang St, Garut, West Java',
    chipLabel: 'Meetup',
    chipColor: 'secondary',
  },
  {
    avatarSrc: '/images/avatars/8.png',
    title: 'Robert',
    date: '14 Aug | 04:15-05:30',
    loc: 'Samarang St, Garut, West Java',
    chipLabel: 'Cancelled',
    chipColor: 'error',
  },
]

const ScedhuleWidget = () => {
  return (
    <Card>
      <div className='flex items-center justify-between px-5 pt-5'>
        <div className='font-semibold text-xl'>Schedule</div>
        <Link
          href='/'
          className='font-medium text-[11pt] text-blue-400 hover:text-blue-600 hover:underline flex items-center gap-2'>
          <div className=''>See All</div>
          <i className='ri-arrow-right-s-line' />
        </Link>
      </div>
      <CardContent className='flex flex-col gap-[26.41px]'>
        {data.map((item, index) => (
          <div key={index} className='flex gap-4'>
            <CustomAvatar variant='rounded' src={item.avatarSrc} size={40} className='mt-1' />
            <div className='flex justify-between items-center is-full flex-wrap gap-x-4 gap-y-2'>
              <div className='flex items-start flex-col gap-0.5'>
                <Typography color='text.primary' className='font-medium'>
                  {item.title}
                </Typography>
                <div className='flex items-center gap-2'>
                  <i className='ri-calendar-line text-[10pt] text-blue-500' />
                  <Typography className='text-[9.5pt] text-blue-400'>{item.date}</Typography>
                </div>
                <div className='flex items-center gap-1 mt-2'>
                  <i className='ri-map-pin-fill text-[10pt] text-red-600' />
                  <Typography className='text-[10pt] text-gray-400 leading-1'>
                    {item.loc}
                  </Typography>
                </div>
              </div>
              <Chip label={item.chipLabel} color={item.chipColor} size='small' variant='tonal' />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default ScedhuleWidget
