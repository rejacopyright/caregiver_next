'use client'

// React Imports
import { ReactElement, ReactNode, SyntheticEvent, useRef, useState } from 'react'
// Next Imports
import Link from 'next/link'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'
import Box from '@mui/material/Box'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Divider from '@mui/material/Divider'
import Fade from '@mui/material/Fade'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
// MUI Imports
import Tooltip from '@mui/material/Tooltip'
// Third-party Imports
import clsx from 'clsx'

// Type Imports
import type { OptionMenuItemType, OptionsMenuType, OptionType } from './types'

const IconButtonWrapper = (
  props: Pick<OptionsMenuType, 'tooltipProps'> & { children: ReactElement }
) => {
  // Props
  const { tooltipProps, children } = props

  return tooltipProps?.title ? <Tooltip {...tooltipProps}>{children}</Tooltip> : children
}

const MenuItemWrapper = ({
  children,
  option,
}: {
  children: ReactNode
  option: OptionMenuItemType
}) => {
  if (option.href) {
    return (
      <Box component={Link} href={option.href} {...option.linkProps}>
        {children}
      </Box>
    )
  } else {
    return <>{children}</>
  }
}

const OptionMenu = (props: OptionsMenuType) => {
  // Props
  const {
    tooltipProps,
    icon,
    iconClassName,
    options,
    leftAlignMenu,
    iconButtonProps,
    onClick = () => '',
  } = props

  // States
  const [open, setOpen] = useState(false)

  // Refs
  const anchorRef = useRef<HTMLButtonElement>(null)

  // Hooks
  const { settings } = useSettings()

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: Event | SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  return (
    <>
      <IconButtonWrapper tooltipProps={tooltipProps}>
        <IconButton ref={anchorRef} size='small' onClick={handleToggle} {...iconButtonProps}>
          {typeof icon === 'string' ? (
            <i className={clsx(icon, iconClassName)} />
          ) : (icon as ReactNode) ? (
            icon
          ) : (
            <i className={clsx('ri-more-2-line', iconClassName)} />
          )}
        </IconButton>
      </IconButtonWrapper>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement={leftAlignMenu ? 'bottom-start' : 'bottom-end'}
        transition
        disablePortal
        sx={{ zIndex: 1 }}>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Paper className={settings.skin === 'bordered' ? 'border shadow-none' : 'shadow-lg'}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open}>
                  {options.map((option: OptionType, index: number) => {
                    if (typeof option === 'string') {
                      return (
                        <MenuItem key={index} onClick={handleClose}>
                          {option}
                        </MenuItem>
                      )
                    } else if ('divider' in option) {
                      return option.divider && <Divider key={index} {...option.dividerProps} />
                    } else {
                      return (
                        <MenuItem
                          key={index}
                          {...option.menuItemProps}
                          {...(option.href && { className: 'p-0' })}
                          onClick={(e) => {
                            onClick(option)
                            handleClose(e)
                            option.menuItemProps && option.menuItemProps.onClick
                              ? option.menuItemProps.onClick(e)
                              : null
                          }}>
                          <MenuItemWrapper option={option}>
                            {(typeof option.icon === 'string' ? (
                              <i className={option.icon} />
                            ) : (
                              option.icon
                            )) || null}
                            {option.text}
                          </MenuItemWrapper>
                        </MenuItem>
                      )
                    }
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  )
}

export default OptionMenu
