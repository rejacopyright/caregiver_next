'use client'

import { resetAllDatas } from '@api/task'
import { Button, DialogActions } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import { toast } from 'react-toastify'

type Props = {
  show: boolean
  setShow: (show: boolean) => void
}

export const ModalResetData = ({ show, setShow }: Props) => {
  const { mutateAsync }: any = resetAllDatas()

  const handleSubmit = async () => {
    try {
      const res = await mutateAsync()

      setShow(false)
      toast.success(res?.data?.message || 'success', { position: 'top-center' })
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Failed to reset', { position: 'top-center' })
    }
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
          <i className='ri-error-warning-line text-5xl text-red-400' />
          <div className='font-medium mt-2 text-[12pt]'>
            All your data will be reseted to default. Are you sure want to reset ?
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
