'use client'
import { useState } from 'react'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import { ModalResetData } from './ModalResetData'

const UserProfileHeader = () => {
  const [showModalReeset, setShowModalReeset] = useState<boolean>(false)

  return (
    <>
      <Card>
        <CardMedia image='/images/cards/2.png' className='bs-[150px]' />
        <CardContent className='flex justify-center flex-col items-start gap-6 md:flex-row !pt-0 md:justify-start'>
          <div className='flex self-center md:self-auto rounded-bs-xl mbs-[-65px] mli-[-5px] border-[5px] border-be-0 border-backgroundPaper bg-backgroundPaper'>
            <img
              height={120}
              width={120}
              src='/images/avatars/3.png'
              className='rounded'
              alt='Profile Background'
            />
          </div>
          <div className='flex is-full flex-wrap justify-start flex-col items-center sm:flex-row sm:justify-between sm:items-end gap-5'>
            <div className='flex flex-col items-center sm:items-start gap-2'>
              <Typography variant='h4' className='md:mt-2'>
                Reja Jamil
              </Typography>
              <div className='flex flex-wrap gap-3 justify-center sm:justify-normal min-bs-[38px]'>
                <div className='flex items-center gap-2'>
                  <i className='ri-stethoscope-line' />
                  <Typography className='font-medium'>Trauma Specialist</Typography>
                </div>
                <div className='flex items-center gap-2'>
                  <i className='ri-map-pin-line' />
                  <Typography className='font-medium'>Samarang St, Garut, West Java</Typography>
                </div>
                <div className='flex items-center gap-2'>
                  <i className='ri-calendar-line' />
                  <Typography className='font-medium'>18 Mei 2025</Typography>
                </div>
              </div>
            </div>
            <Button
              variant='contained'
              className='flex gap-2'
              onClick={() => setShowModalReeset(true)}>
              <i className='ri-reset-right-line text-base'></i>
              <span>Reset Data</span>
            </Button>
          </div>
        </CardContent>
      </Card>
      <ModalResetData show={showModalReeset} setShow={setShowModalReeset} />
    </>
  )
}

export default UserProfileHeader
