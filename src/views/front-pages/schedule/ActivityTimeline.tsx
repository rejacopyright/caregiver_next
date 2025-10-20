'use client'

import { useRef, useState } from 'react'

import { getTask, updateTask } from '@api/task'
import CustomAvatar from '@core/components/mui/Avatar'
import OptionMenu from '@core/components/option-menu'
import MuiTimeline, { TimelineProps } from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot, { TimelineDotProps } from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import { Button, TextField } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { formatISO } from '@utils/fn'
import { formatDistanceToNow, parseISO } from 'date-fns'
import { toast } from 'react-toastify'

const Timeline = styled(MuiTimeline)<TimelineProps>({
  '& .MuiTimelineItem-root': {
    '&:before': {
      display: 'none',
    },
  },
})

const Options = ({ onClick = () => '' }: any) => {
  return (
    <div className=''>
      <OptionMenu
        onClick={onClick}
        options={[
          {
            id: 'complete',
            text: 'Completed',
            icon: <i className='ri-check-double-line text-success' />,
          },
          {
            id: 'incomplete',
            text: 'Not Completed',
            icon: <i className='ri-close-circle-fill text-error' />,
          },
        ]}
      />
    </div>
  )
}

const ActivityTimeline = ({ data, activeData }: any) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const isActive = activeData?.id === data?.id
  const [showErrorReason, setShowErrorReason] = useState<boolean>(false)
  const [formReasonIsShow, setFormReasonIsShow] = useState<boolean>(false)
  const [tmpDetail, setTmpDetail] = useState<any>()

  const { data: taskList } = getTask(data?.id)

  const { mutateAsync }: any = updateTask(tmpDetail?.id)

  const handleTaskUpddate = async () => {
    try {
      const res = await mutateAsync({ status: 'NOT_COMPLETED', reason: inputRef?.current?.value })

      toast.success(res?.data?.message || 'Success', { position: 'top-center' })
      setFormReasonIsShow(false)
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Failed to update', { position: 'top-center' })
    }
  }

  const handleTaskComplete = async () => {
    try {
      const res = await mutateAsync({ status: 'COMPLETED' })

      toast.success(res?.data?.message || 'Success', { position: 'top-center' })
      setFormReasonIsShow(false)
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Failed to update', { position: 'top-center' })
    }
  }

  return (
    <Card>
      <CardContent>
        <Timeline>
          {taskList?.map((item: any, key: number) => {
            const relativeTime = formatDistanceToNow(parseISO(item?.updatedAt), { addSuffix: true })

            const statusColor: Record<string, TimelineDotProps['color']> = {
              PENDING: 'grey',
              COMPLETED: 'success',
              NOT_COMPLETED: 'error',
            }

            const dotColor = statusColor[item?.status] || 'grey'

            return (
              <TimelineItem key={key}>
                <TimelineSeparator>
                  <TimelineDot color={dotColor} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className='flex items-start justify-between flex-nowrap gap-x-4 mbe-2.5'>
                    <div className='flexs items-end'>
                      <div className='font-medium text-primary'>
                        {formatISO(item?.taskTime, 'HH:mm') || '-'}
                      </div>
                      <div className='font-medium text-[8pt]'>
                        {formatISO(item?.taskTime, 'dd MMM, yyyy') || '-'}
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Typography
                        variant='caption'
                        className='text-nowrap flex items-center min-h-[30px]'>
                        {relativeTime}
                      </Typography>
                      {isActive && (
                        <Options
                          onClick={(e: any) => {
                            setTmpDetail(item)

                            if (e?.id === 'complete') {
                              handleTaskComplete()
                            } else {
                              setFormReasonIsShow(true)
                            }
                          }}
                        />
                      )}
                    </div>
                  </div>
                  <Typography className='mbe-2'>{item?.description || '-'}</Typography>
                  {Boolean(item?.reason) && item?.status === 'NOT_COMPLETED' && (
                    <div className=''>
                      <div className='font-medium text-gray-400 text-[9pt]'>Reason:</div>
                      <div className='bg-primary/10 inline-block rounded-[7px] px-3 py-1 text-primary'>
                        {item?.reason}
                      </div>
                    </div>
                  )}
                  {isActive && formReasonIsShow && tmpDetail?.id === item?.id && (
                    <div className='flex items-center gap-4 mt-5'>
                      <div className='flex flex-col w-full relative'>
                        <TextField
                          inputRef={inputRef}
                          label='Add reason'
                          placeholder='Add reason here...'
                          size='small'
                          className='flex-auto'
                          onChange={(e) => {
                            setShowErrorReason(!e?.target?.value)
                          }}
                        />
                        {showErrorReason && (
                          <div className='absolute bottom-[-16px]'>
                            <div className='text-[8pt] text-red-600'>Reason required</div>
                          </div>
                        )}
                      </div>
                      <Button
                        variant='contained'
                        startIcon={<i className='ri-check-line' />}
                        onClick={() => {
                          setShowErrorReason(!inputRef?.current?.value)

                          if (inputRef?.current?.value) {
                            handleTaskUpddate()
                          }
                        }}>
                        Confirm
                      </Button>
                    </div>
                  )}
                </TimelineContent>
              </TimelineItem>
            )
          })}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex items-start justify-between flex-nowrap gap-x-4 mbe-2.5'>
                <Typography className='font-medium' color='text.primary'>
                  [Just example] 12 Invoices have been paid
                </Typography>
                <div className='flex justify-end items-center gap-2'>
                  <Typography variant='caption' className='text-nowrap'>
                    12 min ago
                  </Typography>
                  <Options />
                </div>
              </div>
              <Typography className='mbe-2'>Invoices have been paid to the admin.</Typography>
              <div className='flex items-center gap-2.5 is-fit rounded-lg bg-actionHover plb-[5px] pli-2.5'>
                <img height={20} alt='invoice.pdf' src='/images/icons/pdf-document.png' />
                <Typography className='font-medium'>invoices.pdf</Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='error' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex items-center justify-between flex-wrap gap-x-4 mbe-2.5'>
                <Typography className='font-medium' color='text.primary'>
                  [Just example] Medication Administration
                </Typography>
                <div className='flex items-center gap-2'>
                  <Typography variant='caption'>45 min ago</Typography>
                  <Options />
                </div>
              </div>
              <Typography className='mbe-2'>Medication administration @10:15am</Typography>
              <div className='flex items-center gap-2.5'>
                <CustomAvatar src='/images/avatars/1.png' size={32} />
                <div>
                  <Typography variant='body2' className='font-medium'>
                    Lester McCarthy (Client)
                  </Typography>
                  <Typography variant='body2'>CEO of Pixinvent</Typography>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='success' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex items-center justify-between flex-wrap gap-x-4 mbe-2.5'>
                <Typography className='font-medium' color='text.primary'>
                  [Just example] Create a new project for client
                </Typography>
                <div className='flex items-center gap-2'>
                  <Typography variant='caption'>18 Mei 2025</Typography>
                  <Options />
                </div>
              </div>
              <Typography className='mbe-2'>
                Providing vitamins to pregnant women as part of the community-based Posyandu health
                program <br />6 people participated
              </Typography>
              <AvatarGroup total={6} className='pull-up'>
                <Avatar alt='Remy Sharp' src='/images/avatars/2.png' />
                <Avatar alt='Travis Howard' src='/images/avatars/4.png' />
                <Avatar alt='Cindy Baker' src='/images/avatars/1.png' />
              </AvatarGroup>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default ActivityTimeline
