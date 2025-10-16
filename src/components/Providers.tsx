// Type Imports
import ThemeProvider from '@components/theme'
// Context Imports
import { SettingsProvider } from '@core/contexts/settingsContext'
import type { ChildrenType, Direction } from '@core/types'
// Util Imports
import { getMode, getSettingsFromCookie, getSystemMode } from '@core/utils/serverHelpers'
import { VerticalNavProvider } from '@menu/contexts/verticalNavContext'
// Styled Component Imports
import AppReactToastify from '@styles/AppReactToastify'

type Props = ChildrenType & {
  direction: Direction
}

const Providers = async (props: Props) => {
  // Props
  const { children, direction } = props

  // Vars
  const mode = await getMode()
  const settingsCookie = await getSettingsFromCookie()
  const systemMode = await getSystemMode()

  return (
    <VerticalNavProvider>
      <SettingsProvider settingsCookie={settingsCookie} mode={mode}>
        <ThemeProvider direction={direction} systemMode={systemMode}>
          {children}
          <AppReactToastify direction={direction} hideProgressBar />
        </ThemeProvider>
      </SettingsProvider>
    </VerticalNavProvider>
  )
}

export default Providers
