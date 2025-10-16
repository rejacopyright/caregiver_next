// React Imports
import { cloneElement, createElement, forwardRef, ForwardRefRenderFunction, Ref } from 'react'

import { css } from '@emotion/react'
// Third-party Imports
import clsx from 'clsx'

// Type Imports
import type { ChildrenType, MenuButtonProps } from '../../types'
// Util Imports
import { menuClasses } from '../../utils/menuClasses'
// Component Imports
import { RouterLink } from '../RouterLink'

type MenuButtonStylesProps = Partial<ChildrenType> & {
  level: number
  disabled?: boolean
}

export const menuButtonStyles = (props: MenuButtonStylesProps) => {
  // Props
  const { level, disabled, children } = props

  return css({
    display: 'flex',
    alignItems: 'center',
    minBlockSize: '30px',
    textDecoration: 'none',
    color: 'inherit',
    boxSizing: 'border-box',
    cursor: 'pointer',
    paddingInline: '20px',

    '&:hover': {
      backgroundColor: '#f3f3f3',
    },

    '&:focus-visible': {
      outline: 'none',
      backgroundColor: '#f3f3f3',
    },

    ...(disabled && {
      pointerEvents: 'none',
      cursor: 'default',
      color: '#adadad',
    }),

    // All the active styles are applied to the button including menu items or submenu
    [`&.${menuClasses.active}`]: {
      ...(level === 0
        ? {
            color: 'white',
            backgroundColor: '#765feb',
          }
        : {
            ...(children
              ? { backgroundColor: '#f3f3f3' }
              : { color: '#765feb', backgroundColor: '#765feb1f' }),
          }),
    },
  })
}

const MenuButton: ForwardRefRenderFunction<HTMLAnchorElement, MenuButtonProps> = (
  { className, component, children, ...rest },
  ref
) => {
  if (component) {
    // If component is a string, create a new element of that type
    if (typeof component === 'string') {
      return createElement(
        component,
        {
          className: clsx(className),
          ...rest,
          ref,
        },
        children
      )
    } else {
      // Otherwise, clone the element
      const { className: classNameProp, ...props } = component.props as typeof component.props & {
        className: string
        [key: string]: any
      }

      return cloneElement(
        component,
        {
          className: clsx(className, classNameProp),
          ...rest,
          ...props,
          ref,
        } as typeof component.props & { ref: Ref<any> },
        children
      )
    }
  } else {
    // If there is no component but href is defined, render RouterLink
    if (rest.href) {
      return (
        <RouterLink ref={ref} className={className} href={rest.href} {...rest}>
          {children}
        </RouterLink>
      )
    } else {
      return (
        <a ref={ref} className={className} {...rest}>
          {children}
        </a>
      )
    }
  }
}

export default forwardRef(MenuButton)
