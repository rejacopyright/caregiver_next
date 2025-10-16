'use client'

import CustomAvatar from '@core/components/mui/Avatar'
import OptionMenu from '@core/components/option-menu'
import MuiTimeline, { TimelineProps } from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import { Button, TextField } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

const Timeline = styled(MuiTimeline)<TimelineProps>({
  '& .MuiTimelineItem-root': {
    '&:before': {
      display: 'none',
    },
  },
})

const Options = () => {
  return (
    <div className=''>
      <OptionMenu
        options={[
          {
            text: 'Completed',
            icon: <i className='ri-check-double-line text-success' />,
          },
          {
            text: 'Not Completed',
            icon: <i className='ri-close-circle-fill text-error' />,
          },
        ]}
      />
    </div>
  )
}

const ActivityTimeline = () => {
  return (
    <Card>
      <CardContent>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex items-center justify-between flex-wrap gap-x-4 mbe-2.5'>
                <Typography className='font-medium' color='text.primary'>
                  12 Invoices have been paid
                </Typography>
                <div className='flex items-center gap-2'>
                  <Typography variant='caption'>12 min ago</Typography>
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
                  Medication Administration
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
              <div className='flex items-center gap-4 mt-5'>
                <TextField
                  label='Add reason'
                  placeholder='Add reason here...'
                  size='small'
                  className='flex-auto'
                />
                <Button variant='contained' startIcon={<i className='ri-check-line' />}>
                  Confirm
                </Button>
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
                  Create a new project for client
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
