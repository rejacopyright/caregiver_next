'use client'

// React Imports
import { useMemo } from 'react'

// Config Imports
import themeConfig from '@configs/themeConfig'
// Hook Imports
import { useSettings } from '@core/hooks/useSettings'
// Core Theme Imports
import defaultCoreTheme from '@core/theme'
// Type Imports
import type { ChildrenType, Direction, SystemMode } from '@core/types'
import type {} from '@mui/lab/themeAugmentation' //! Do not remove this import otherwise you will get type errors while making a production build
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, darken, lighten, ThemeProvider } from '@mui/material/styles'
import type {} from '@mui/material/themeCssVarsAugmentation' //! Do not remove this import otherwise you will get type errors while making a production build
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
// MUI Imports
import { deepmerge } from '@mui/utils'
// Third-party Imports
import { useMedia } from 'react-use'
import stylisRTLPlugin from 'stylis-plugin-rtl'

// Component Imports
import ModeChanger from './ModeChanger'

type Props = ChildrenType & {
  direction: Direction
  systemMode: SystemMode
}

const CustomThemeProvider = (props: Props) => {
  // Props
  const { children, direction, systemMode } = props

  // Hooks
  const { settings } = useSettings()
  const isDark = useMedia('(prefers-color-scheme: dark)', systemMode === 'dark')

  // Vars
  const isServer = typeof window === 'undefined'
  let currentMode: SystemMode

  if (isServer) {
    currentMode = systemMode
  } else {
    if (settings.mode === 'system') {
      currentMode = isDark ? 'dark' : 'light'
    } else {
      currentMode = settings.mode as SystemMode
    }
  }

  // Merge the primary color scheme override with the core theme
  const theme = useMemo(() => {
    const newTheme = {
      colorSchemes: {
        light: {
          palette: {
            primary: {
              main: settings.primaryColor,
              light: lighten(settings.primaryColor as string, 0.2),
              dark: darken(settings.primaryColor as string, 0.1),
            },
          },
        },
        dark: {
          palette: {
            primary: {
              main: settings.primaryColor,
              light: lighten(settings.primaryColor as string, 0.2),
              dark: darken(settings.primaryColor as string, 0.1),
            },
          },
        },
      },
      cssVariables: {
        colorSchemeSelector: 'data',
      },
    }

    const coreTheme = deepmerge(defaultCoreTheme(settings, currentMode, direction), newTheme)

    return createTheme(coreTheme)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.primaryColor, settings.skin, currentMode])

  return (
    <AppRouterCacheProvider
      options={{
        prepend: true,
        ...(direction === 'rtl' && {
          key: 'rtl',
          stylisPlugins: [stylisRTLPlugin],
        }),
      }}>
      <ThemeProvider
        theme={theme}
        defaultMode={systemMode}
        modeStorageKey={`${themeConfig.templateName.toLowerCase().split(' ').join('-')}-mui-template-mode`}>
        <>
          <ModeChanger systemMode={systemMode} />
          <CssBaseline />
          {children}
        </>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

export default CustomThemeProvider
