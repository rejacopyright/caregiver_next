// React Imports
// Type Imports
import type { ChildrenType } from '@core/types'
// Third-party Imports
import clsx from 'clsx'
import type { ReactNode } from 'react'

// Component Imports
import LayoutContent from './components/vertical/LayoutContent'
// Styled Component Imports
import StyledContentWrapper from './styles/vertical/StyledContentWrapper'
// Util Imports
import { verticalLayoutClasses } from './utils/layoutClasses'

type VerticalLayoutProps = ChildrenType & {
  navigation?: ReactNode
  navbar?: ReactNode
  footer?: ReactNode
}

const VerticalLayout = (props: VerticalLayoutProps) => {
  // Props
  const { navbar, footer, navigation, children } = props

  return (
    <div className={clsx(verticalLayoutClasses.root, 'flex flex-auto')}>
      {navigation || null}
      <StyledContentWrapper
        className={clsx(verticalLayoutClasses.contentWrapper, 'flex flex-col min-is-0 is-full')}>
        {navbar || null}
        {/* Content */}
        <LayoutContent>{children}</LayoutContent>
        {footer || null}
      </StyledContentWrapper>
    </div>
  )
}

export default VerticalLayout
