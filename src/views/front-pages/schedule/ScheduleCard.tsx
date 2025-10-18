'use client'

import { useRouter } from 'next/navigation'

import CustomAvatar from '@core/components/mui/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { Data } from './TabSchedule'

interface Props {
  title: string
  avatar?: string
  status?: keyof Data
  onClockIn?: (e: any) => void
  [key: string]: any
}

const ScheduleCard = (props: Props) => {
  const router = useRouter()
  const { title, avatar, time, id, address, status, onClockIn = () => '' } = props

  return (
    <Button className='shadow-none block w-full p-3' onClick={() => router.push(`/schedule/${id}`)}>
      <div className='flex items-center justify-between gap-4'>
        <div className='flex items-start justify-start gap-4'>
          <CustomAvatar
            variant='rounded'
            src={avatar}
            size={50}
            className=''
            skin='light'
            color='primary'>
            {!avatar && <i className='ri-user-3-line text-3xl' />}
          </CustomAvatar>
          <div className='flex items-start flex-col gap-0.5'>
            <Typography variant='h6' className='font-medium -my-[3px] text-primary'>
              {title}
            </Typography>
            <div className='flex justify-start gap-1 mt-2'>
              <i className='ri-map-pin-fill text-red-600 text-[10pt] mt-[2px]' />
              <Typography className='text-[10pt] text-wrap text-start'>{address}</Typography>
            </div>
            <div className='flex items-center justify-end gap-2 mt-1'>
              <i className='ri-time-fill text-[10pt] text-blue-500' />
              <Typography className='text-[9pt] text-blue-500 font-medium text-start'>
                {time}
              </Typography>
            </div>
          </div>
        </div>
      </div>
      {status === 'upcoming' && (
        <div className='text-end mt-2'>
          <div
            className='inline-flex items-center gap-1 flex-nowrap bg-primary text-white py-2 px-3 rounded'
            onClick={(e) => {
              e.stopPropagation()
              onClockIn(id)
            }}>
            <i className='ri-alarm-fill text-[12pt]' />
            <div className='text-nowrap font-semibold text-[10pt]'>Clock In</div>
          </div>
        </div>
      )}
    </Button>
  )
}

export default ScheduleCard
