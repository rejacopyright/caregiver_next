'use client'

import { useState } from 'react'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const ChangePasswordCard = () => {
  const [isCurrentPasswordShown, setIsCurrentPasswordShown] = useState(false)
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false)
  const [isNewPasswordShown, setIsNewPasswordShown] = useState(false)

  const handleClickShowCurrentPassword = () => {
    setIsCurrentPasswordShown(!isCurrentPasswordShown)
  }

  return (
    <Card>
      <CardHeader title='Change Password' className='text-start' />
      <CardContent>
        <form>
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, sm: 12 }}>
              <TextField
                fullWidth
                size='small'
                label='Current Password'
                type={isCurrentPasswordShown ? 'text' : 'password'}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          size='small'
                          edge='end'
                          onClick={handleClickShowCurrentPassword}
                          onMouseDown={(e) => e.preventDefault()}>
                          <i
                            className={isCurrentPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid>
          </Grid>
          <Grid container className='mbs-5' spacing={5}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                size='small'
                label='New Password'
                type={isNewPasswordShown ? 'text' : 'password'}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          size='small'
                          edge='end'
                          onClick={() => setIsNewPasswordShown(!isNewPasswordShown)}
                          onMouseDown={(e) => e.preventDefault()}>
                          <i className={isNewPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                size='small'
                label='Confirm New Password'
                type={isConfirmPasswordShown ? 'text' : 'password'}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          size='small'
                          edge='end'
                          onClick={() => setIsConfirmPasswordShown(!isConfirmPasswordShown)}
                          onMouseDown={(e) => e.preventDefault()}>
                          <i
                            className={isConfirmPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12 }} className='flex flex-col gap-4 pbs-6'>
              <Typography variant='h6' color='text.secondary' className='text-start font-semibold'>
                Password Requirements:
              </Typography>
              <div className='flex flex-col gap-2'>
                <div className='flex items-center justify-start gap-2 text-[10pt]'>
                  <i className='ri-checkbox-blank-circle-fill text-[8px]' />
                  Minimum 8 characters
                </div>
                <div className='flex items-center justify-start gap-2 text-[10pt]'>
                  <i className='ri-checkbox-blank-circle-fill text-[8px]' />
                  At least one lowercase & uppercase
                </div>
                <div className='flex items-center justify-start gap-2 text-[10pt]'>
                  <i className='ri-checkbox-blank-circle-fill text-[8px]' />
                  At least one number or symbol
                </div>
              </div>
            </Grid>
            <Grid size={{ xs: 12 }} className='text-end'>
              <Button variant='contained' startIcon={<i className='ri-check-double-line' />}>
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default ChangePasswordCard
