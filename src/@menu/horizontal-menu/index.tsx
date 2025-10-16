// Import all Horizontal Nav components and export them
import HorizontalNav, { type HorizontalNavProps } from '../components/horizontal-menu/HorizontalNav'
import Menu, { type MenuProps } from '../components/horizontal-menu/Menu'
import MenuItem, { type MenuItemProps } from '../components/horizontal-menu/MenuItem'
import SubMenu, { type SubMenuProps } from '../components/horizontal-menu/SubMenu'

export default HorizontalNav
export { Menu, MenuItem, SubMenu }
export type { HorizontalNavProps, MenuItemProps, MenuProps, SubMenuProps }
