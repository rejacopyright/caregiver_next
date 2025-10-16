// Type Imports
import type { HorizontalMenuDataType } from '@ts/menuTypes'

const horizontalMenuData = (): HorizontalMenuDataType[] => [
  {
    label: 'Home',
    href: '/home',
    icon: 'ri-home-smile-line',
  },
  {
    label: 'About',
    href: '/about',
    icon: 'ri-information-line',
  },
]

export default horizontalMenuData
