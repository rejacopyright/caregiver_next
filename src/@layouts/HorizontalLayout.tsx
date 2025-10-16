// React Imports
// Type Imports
import type { ChildrenType } from '@core/types'
// Context Imports
import { HorizontalNavProvider } from '@menu/contexts/horizontalNavContext'
// Third-party Imports
import clsx from 'clsx'
import type { ReactNode } from 'react'

// Component Imports
import LayoutContent from './components/horizontal/LayoutContent'
// Styled Component Imports
import StyledContentWrapper from './styles/horizontal/StyledContentWrapper'
// Util Imports
import { horizontalLayoutClasses } from './utils/layoutClasses'

type HorizontalLayoutProps = ChildrenType & {
  header?: ReactNode
  footer?: ReactNode
}

const HorizontalLayout = (props: HorizontalLayoutProps) => {
  // Props
  const { header, footer, children } = props

  return (
    <div className={clsx(horizontalLayoutClasses.root, 'flex flex-auto')}>
      <HorizontalNavProvider>
        <StyledContentWrapper
          className={clsx(horizontalLayoutClasses.contentWrapper, 'flex flex-col is-full')}>
          {header || null}
          <LayoutContent>{children}</LayoutContent>
          {footer || null}
        </StyledContentWrapper>
      </HorizontalNavProvider>
    </div>
  )
}

export default HorizontalLayout
