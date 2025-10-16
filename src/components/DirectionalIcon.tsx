'use client'

// MUI Imports
import { useTheme } from '@mui/material/styles'
// Third-party Imports
import clsx from 'clsx'

type Props = {
  ltrIconClass: string
  rtlIconClass: string
  className?: string
}

const DirectionalIcon = (props: Props) => {
  // Props
  const { ltrIconClass, rtlIconClass, className } = props

  // Hooks
  const theme = useTheme()

  return (
    <i
      className={clsx(
        {
          [ltrIconClass]: theme.direction === 'ltr',
          [rtlIconClass]: theme.direction === 'rtl',
        },
        className
      )}
    />
  )
}

export default DirectionalIcon
