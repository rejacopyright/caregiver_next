'use client'

// React Imports
import { useRef, useState } from 'react'
// Next Imports
import { usePathname } from 'next/navigation'

// Type Imports
import type { Lang, Locale } from '@configs/i18n'
// Hook Imports
import { useSettings } from '@core/hooks/useSettings'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Fade from '@mui/material/Fade'
// MUI Imports
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import { isLocalePath } from '@utils/fn'
import { getPathLang } from '@utils/getCookie'

type LanguageDataType = {
  langCode: Locale
  langName: string
}

const getLocalePath = (pathName: string, locale: string) => {
  if (!pathName) return '/'
  const isLocale = isLocalePath(pathName)
  const segments = pathName.split('/')

  if (isLocale) {
    segments[1] = locale
  } else {
    segments[0] = locale
    segments.unshift('')
  }

  return segments.join('/')
}

const languageData: LanguageDataType[] = [
  {
    langCode: 'en',
    langName: 'English',
  },
  {
    langCode: 'id',
    langName: 'Indonesia',
  },
]

const LanguageDropdown = () => {
  // States
  const [open, setOpen] = useState(false)

  const anchorRef = useRef<HTMLButtonElement>(null)

  // Hooks
  const pathName = usePathname()
  const { settings } = useSettings()
  const lang = getPathLang().replace('/', '') as Locale

  const handleClose = () => {
    setOpen(false)
  }

  const handleSwitchLang = (locale: Lang) => {
    // setOpen(false)
    const goToPath = getLocalePath(pathName, locale)

    // Cookies.set('lang', lang, { expires: 7, path: '/' })
    // router.push(goToPath)

    if (typeof window !== 'undefined') {
      window.location.href = goToPath
    }
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  return (
    <>
      <IconButton ref={anchorRef} onClick={handleToggle} className='text-textPrimary'>
        <i className='ri-translate-2' />
      </IconButton>
      <Popper
        open={open}
        transition
        disablePortal
        placement='bottom-start'
        anchorEl={anchorRef.current}
        className='min-is-[160px] !mbs-4 z-[1]'>
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom-start' ? 'left top' : 'right top' }}>
            <Paper className={settings.skin === 'bordered' ? 'border shadow-none' : 'shadow-lg'}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList onKeyDown={handleClose}>
                  {languageData.map((locale) => (
                    <MenuItem
                      key={locale.langCode}
                      // component={Link}
                      // href={getLocalePath(pathName, locale.langCode)}
                      onClick={() => handleSwitchLang(locale.langCode)}
                      selected={lang === locale.langCode}
                      className='pli-4'>
                      {locale.langName}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  )
}

export default LanguageDropdown
