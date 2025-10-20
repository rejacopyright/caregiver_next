'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import CustomAvatar from '@core/components/mui/Avatar'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import { differenceInSeconds, format, intervalToDuration, parseISO } from 'date-fns'

import { ModalClockOut } from './ModalClockOut'

const InProgressCard2 = ({ detail }: any) => {
  const router = useRouter()
  const [showModalCheckOut, setShowModalCheckOut] = useState(false)
  const [countdown, setCountdown] = useState('00 : 00 : 00')
  const [progress, setProgress] = useState(0)

  const shiftStart = parseISO(detail?.shiftStart)
  const shiftEnd = parseISO(detail?.shiftEnd)

  const shiftDate = `${format(shiftStart, 'HH:mm')} - ${format(shiftEnd, 'HH:mm')}`

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const totalSeconds = differenceInSeconds(shiftEnd, shiftStart)
      const elapsedSeconds = Math.max(0, differenceInSeconds(now, shiftStart))
      const remainingSeconds = Math.max(0, totalSeconds - elapsedSeconds)

      const {
        hours = 0,
        minutes = 0,
        seconds = 0,
      } = intervalToDuration({
        start: 0,
        end: remainingSeconds * 1000,
      })

      const hh = String(hours).padStart(2, '0')
      const mm = String(minutes).padStart(2, '0')
      const ss = String(seconds).padStart(2, '0')

      setCountdown(`${hh} : ${mm} : ${ss}`)
      const percent = Math.min((elapsedSeconds / totalSeconds) * 100, 100)

      setProgress(percent)
    }

    tick()
    const interval = setInterval(tick, 1000)

    return () => clearInterval(interval)
  }, [shiftStart, shiftEnd])

  return (
    <>
      <Card className='max-lg:bs-full' onClick={() => router.push(`/schedule/${detail?.id}`)}>
        <CardContent className='flex flex-col pbs-0.5 pbe-2 bg-gradient-to-bl from-indigo-500 to-purple-400'>
          <div className='flex items-start justify-start gap-4 pt-5'>
            <CustomAvatar variant='rounded' src='/images/avatars/1.png' size={75} className='' />
            <div className='flex items-start flex-col gap-0.5'>
              <Typography variant='h3' className='text-white font-bold leading-8'>
                {countdown}
              </Typography>
              <Typography variant='h5' className='font-medium text-white -mb-[5px]'>
                {detail?.clientName}
              </Typography>
              <div className='flex justify-start gap-1 mt-2'>
                <i className='ri-map-pin-fill text-[10pt] text-white mt-[2px]' />
                <Typography className='text-[10pt] text-white text-wrap text-start'>
                  {detail?.address}
                </Typography>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-1 plb-2'>
            <div className='flex items-center justify-end gap-2 mt-2'>
              <i className='ri-time-fill text-[11pt] text-white' />
              <Typography className='text-[11pt] text-white font-medium'>{shiftDate}</Typography>
            </div>
            <LinearProgress
              variant='determinate'
              value={progress}
              color='primary'
              style={{
                height: 8,
                borderRadius: 10,
                backgroundColor: 'rgba(255,255,255,0.4)',
              }}
            />
            <div className='mt-2 w-full flex flex-col'>
              <Button
                variant='contained'
                className='bg-gradient-to-tr from-indigo-600 flex items-center gap-2'
                onClick={(e) => {
                  e.stopPropagation()
                  setShowModalCheckOut(true)
                }}>
                <i className='ri-alarm-fill text-[16pt] text-white' />
                <div className='text-[12pt]'>Clock Out</div>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <ModalClockOut show={showModalCheckOut} setShow={setShowModalCheckOut} data={detail} />
    </>
  )
}

export default InProgressCard2
