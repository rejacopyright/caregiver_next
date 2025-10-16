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
}

const ScheduleCard = (props: Props) => {
  const router = useRouter()
  const { title, avatar, status = 'upcoming' } = props

  return (
    <Button
      className='shadow-none block w-full p-3'
      onClick={() => router.push(`/schedule/${status}`)}>
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
            <Typography className='text-[10pt] text-wrap text-start'>
              Samarang St, Garut, West Java
            </Typography>
          </div>
          <div className='flex items-center justify-end gap-2 mt-1'>
            <i className='ri-time-fill text-[10pt] text-blue-500' />
            <Typography className='text-[10pt] text-blue-500 font-medium'>11:30 - 12:00</Typography>
          </div>
        </div>
      </div>
    </Button>
  )
}

export default ScheduleCard
