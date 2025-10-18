'use client'

import { clockOut } from '@api/schedule'
import { Button, DialogActions } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import { toast } from 'react-toastify'

type Props = {
  show: boolean
  setShow: (show: boolean) => void
  data?: any
}

export const ModalClockOut = ({ show, setShow, data }: Props) => {
  const { mutateAsync } = clockOut(data?.id)

  const handleSubmit = async () => {
    if (!navigator.geolocation) {
      toast.error('Location must be active', { position: 'top-center' })

      return
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const lat = position.coords.latitude
          const lng = position.coords.longitude

          const res = await mutateAsync({ lat, lng })

          setShow(false)
          toast.success(res?.data?.message || 'success', { position: 'top-center' })
        } catch (err: any) {
          toast.error(err?.response?.data?.message || 'Failed to clock-in', {
            position: 'top-center',
          })
        }
      },
      () => '',
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    )
  }

  return (
    <Dialog
      fullWidth
      maxWidth='xs'
      open={show}
      onClose={() => setShow(false)}
      scroll='body'
      closeAfterTransition={false}>
      <DialogContent className='sm:p-16'>
        <IconButton className='absolute block-start-4 inline-end-4' onClick={() => setShow(false)}>
          <i className='ri-close-line text-textSecondary' />
        </IconButton>
        <div className='text-center'>
          <i className='ri-error-warning-line text-5xl text-primary' />
          <div className='font-medium mt-2 text-[12pt]'>
            Are you sure want to Clock-Out at {data?.placeName} with {data?.clientName} ?
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <div className=''>
          <Button variant='text' onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button
            variant='contained'
            startIcon={<i className='ri-check-line' />}
            onClick={handleSubmit}>
            Confirm
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  )
}
