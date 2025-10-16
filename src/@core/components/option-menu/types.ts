// React Imports
// Next Imports
import type { LinkProps } from 'next/link'

import type { BoxProps } from '@mui/material/Box'
import type { DividerProps } from '@mui/material/Divider'
// MUI Imports
import type { IconButtonProps } from '@mui/material/IconButton'
import type { MenuItemProps } from '@mui/material/MenuItem'
import type { TooltipProps } from '@mui/material/Tooltip'
import type { ReactNode } from 'react'

export type OptionDividerType = {
  divider: boolean
  dividerProps?: DividerProps
  href?: never
  icon?: never
  text?: never
  linkProps?: never
  menuItemProps?: never
}
export type OptionMenuItemType = {
  text: ReactNode
  icon?: ReactNode
  linkProps?: BoxProps<'a'>
  href?: LinkProps['href']
  menuItemProps?: MenuItemProps
  divider?: never
  dividerProps?: never
}

export type OptionType = string | OptionDividerType | OptionMenuItemType

export type OptionsMenuType = {
  tooltipProps?: Omit<TooltipProps, 'children'>
  icon?: ReactNode
  iconClassName?: string
  options: OptionType[]
  leftAlignMenu?: boolean
  iconButtonProps?: IconButtonProps
}
