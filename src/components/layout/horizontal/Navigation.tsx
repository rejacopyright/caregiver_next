// Third-party Imports
// Config Imports
import themeConfig from '@configs/themeConfig'
// Hook Imports
import { useSettings } from '@core/hooks/useSettings'
import styled from '@emotion/styled'
// Util Imports
import { horizontalLayoutClasses } from '@layouts/utils/layoutClasses'
import useHorizontalNav from '@menu/hooks/useHorizontalNav'
import clsx from 'clsx'

// Type Imports
import type { getDictionary } from '@/utils/getDictionary'

// Component Imports

type StyledDivProps = {
  isContentCompact: boolean
  isBreakpointReached?: boolean
}

const StyledDiv = styled.div<StyledDivProps>`
  ${({ isContentCompact, isBreakpointReached }) =>
    !isBreakpointReached &&
    `
    padding: ${themeConfig.layoutPadding}px;

    ${
      isContentCompact &&
      `
      margin-inline: auto;
      max-inline-size: ${themeConfig.compactContentWidth}px;
    `
    }
  `}
`

const Navigation = ({
  dictionary: _dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}) => {
  // Hooks
  const { settings } = useSettings()
  const { isBreakpointReached } = useHorizontalNav()

  // Vars
  const headerContentCompact = settings.navbarContentWidth === 'compact'

  return (
    <div
      {...(!isBreakpointReached && {
        className: clsx(horizontalLayoutClasses.navigation, 'relative flex border-bs'),
      })}>
      <StyledDiv
        isContentCompact={headerContentCompact}
        isBreakpointReached={isBreakpointReached}
        {...(!isBreakpointReached && {
          className: clsx(
            horizontalLayoutClasses.navigationContentWrapper,
            'flex items-center is-full plb-2'
          ),
        })}></StyledDiv>
    </div>
  )
}

export default Navigation
