'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import CustomAvatar from '@core/components/mui/Avatar'
import type { ThemeColor } from '@core/types'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import { formatISO, randomNumber } from '@utils/fn'

type DataType = {
  avatarSrc: string
  title: string
  date: string
  loc: string
  chipLabel: string
  chipColor?: ThemeColor
  [key: string]: any
}

const ScheduleWidget = ({ data }: { data: DataType[] }) => {
  const router = useRouter()

  return (
    <Card>
      <div className='flex items-center justify-between px-5 pt-5'>
        <div className='font-semibold text-xl'>Schedule</div>
        <Link
          href='/schedule'
          className='font-medium text-[11pt] text-blue-400 hover:text-blue-600 hover:underline flex items-center gap-2'>
          <div className=''>See All</div>
          <i className='ri-arrow-right-s-line' />
        </Link>
      </div>
      <CardContent className='flex flex-col gap-[26.41px]'>
        {data.map((item, index) => {
          const formattedDate = formatISO(item.shiftStart, 'dd MMM')
          const formattedTimeStart = formatISO(item.shiftStart, 'HH:mm')
          const formattedTimeEnd = formatISO(item.shiftEnd, 'HH:mm')

          const shiftDate = `${formattedDate} | ${formattedTimeStart}-${formattedTimeEnd}`

          const avatar = `/images/avatars/${randomNumber(1, 8)}.png`

          const chipColor: any = { UPCOMING: 'primary', MISSED: 'error', COMPLETED: 'success' }

          const status: string = item.status || 'UPCOMING'
          const badgeColor = chipColor[status]

          return (
            <Button
              key={index}
              className='flex items-start gap-4'
              onClick={() => router.push(`/schedule/${item?.id}`)}>
              <CustomAvatar variant='rounded' src={avatar} size={40} skin='light' color='primary'>
                {!avatar && <i className='ri-user-3-line text-3xl opacity-50' />}
              </CustomAvatar>
              <div className='flex justify-between items-center is-full flex-wrap gap-x-4 gap-y-2'>
                <div className='flex items-start flex-col gap-0.5'>
                  <Typography color='text.primary' className='font-medium'>
                    {item.clientName}
                  </Typography>
                  <div className='flex items-center gap-2'>
                    <i className='ri-calendar-line text-[10pt] text-blue-500' />
                    <Typography className='text-[9.5pt] text-blue-400'>{shiftDate}</Typography>
                  </div>
                  <div className='flex items-center gap-1 mt-2'>
                    <i className='ri-map-pin-fill text-[10pt] text-red-600' />
                    <Typography className='text-[10pt] text-gray-400 text-start'>
                      {item.address}
                    </Typography>
                  </div>
                </div>
                <Chip label={item.status} color={badgeColor} size='small' variant='tonal' />
              </div>
            </Button>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default ScheduleWidget
