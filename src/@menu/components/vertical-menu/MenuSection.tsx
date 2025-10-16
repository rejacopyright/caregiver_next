'use client'

// React Imports
import { CSSProperties, forwardRef, ForwardRefRenderFunction, ReactElement, ReactNode } from 'react'

import type { CSSObject } from '@emotion/styled'
// Third-party Imports
import clsx from 'clsx'

import useVerticalMenu from '../../hooks/useVerticalMenu'
// Hook Imports
import useVerticalNav from '../../hooks/useVerticalNav'
// Styled Component Imports
import StyledMenuIcon from '../../styles/StyledMenuIcon'
import StyledMenuPrefix from '../../styles/StyledMenuPrefix'
import StyledMenuSectionLabel from '../../styles/StyledMenuSectionLabel'
import StyledMenuSuffix from '../../styles/StyledMenuSuffix'
import StyledVerticalMenuSection from '../../styles/vertical/StyledVerticalMenuSection'
import type { ChildrenType, RootStylesType } from '../../types'
// Util Imports
import { menuClasses } from '../../utils/menuClasses'

// Type Imports
import type { MenuSectionStyles } from './Menu'

export type MenuSectionProps = Partial<ChildrenType> &
  RootStylesType & {
    label: ReactNode
    icon?: ReactElement
    prefix?: ReactNode
    suffix?: ReactNode

    /**
     * @ignore
     */
    className?: string
  }

type MenuSectionElement = keyof MenuSectionStyles

const menuSectionWrapperStyles: CSSProperties = {
  display: 'inline-block',
  inlineSize: '100%',
  position: 'relative',
  listStyle: 'none',
  padding: 0,
  overflow: 'hidden',
}

const menuSectionContentStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  inlineSize: '100%',
  position: 'relative',
  paddingBlock: '0.75rem',
  paddingInline: '1.25rem',
  overflow: 'hidden',
}

const MenuSection: ForwardRefRenderFunction<HTMLLIElement, MenuSectionProps> = (props, ref) => {
  // Props
  const { children, icon, className, prefix, suffix, label, rootStyles, ...rest } = props

  // Hooks
  const { isCollapsed, isHovered } = useVerticalNav()
  const { menuSectionStyles, collapsedMenuSectionLabel, textTruncate } = useVerticalMenu()

  const getMenuSectionStyles = (element: MenuSectionElement): CSSObject | undefined => {
    // If the menuSectionStyles prop is provided, get the styles for the element from the prop
    if (menuSectionStyles) {
      return menuSectionStyles[element]
    }
  }

  return (
    // Menu Section
    <StyledVerticalMenuSection
      ref={ref}
      rootStyles={rootStyles}
      menuSectionStyles={getMenuSectionStyles('root')}
      className={clsx(menuClasses.menuSectionRoot, className)}>
      {/* Menu Section Content Wrapper */}
      <ul className={menuClasses.menuSectionWrapper} {...rest} style={menuSectionWrapperStyles}>
        {/* Menu Section Content */}
        <li className={menuClasses.menuSectionContent} style={menuSectionContentStyles}>
          {icon && (
            <StyledMenuIcon className={menuClasses.icon} rootStyles={getMenuSectionStyles('icon')}>
              {icon}
            </StyledMenuIcon>
          )}
          {prefix && (
            <StyledMenuPrefix
              isCollapsed={isCollapsed}
              className={menuClasses.prefix}
              rootStyles={getMenuSectionStyles('prefix')}>
              {prefix}
            </StyledMenuPrefix>
          )}
          {collapsedMenuSectionLabel && isCollapsed && !isHovered ? (
            <StyledMenuSectionLabel
              isCollapsed={isCollapsed}
              isHovered={isHovered}
              className={menuClasses.menuSectionLabel}
              rootStyles={getMenuSectionStyles('label')}
              textTruncate={textTruncate}>
              {collapsedMenuSectionLabel}
            </StyledMenuSectionLabel>
          ) : (
            label && (
              <StyledMenuSectionLabel
                isCollapsed={isCollapsed}
                isHovered={isHovered}
                className={menuClasses.menuSectionLabel}
                rootStyles={getMenuSectionStyles('label')}
                textTruncate={textTruncate}>
                {label}
              </StyledMenuSectionLabel>
            )
          )}
          {suffix && (
            <StyledMenuSuffix
              isCollapsed={isCollapsed}
              className={menuClasses.suffix}
              rootStyles={getMenuSectionStyles('suffix')}>
              {suffix}
            </StyledMenuSuffix>
          )}
        </li>
        {/* Render Child */}
        {children}
      </ul>
    </StyledVerticalMenuSection>
  )
}

export default forwardRef<HTMLLIElement, MenuSectionProps>(MenuSection)
