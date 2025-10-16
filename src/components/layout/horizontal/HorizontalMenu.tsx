// Next Imports

// Style Imports
import config from '@configs/config'
import menuItemStyles from '@core/styles/horizontal/menuItemStyles'
import menuRootStyles from '@core/styles/horizontal/menuRootStyles'
import verticalMenuItemStyles from '@core/styles/vertical/menuItemStyles'
import verticalNavigationCustomStyles from '@core/styles/vertical/navigationCustomStyles'
import type { VerticalMenuContextProps } from '@menu/components/vertical-menu/Menu'
// import { GenerateHorizontalMenu } from '@components/GenerateMenu'
// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'
// Component Imports
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu/horizontal-menu'
// Styled Component Imports
import StyledHorizontalNavExpandIcon from '@menu/styles/horizontal/StyledHorizontalNavExpandIcon'
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'
import Chip from '@mui/material/Chip'
// MUI Imports
import { useTheme } from '@mui/material/styles'
import { p } from '@utils/fn'

// Type Imports
import type { getDictionary } from '@/utils/getDictionary'

import VerticalNavContent from './VerticalNavContent'

// Menu Data Imports
// import menuData from '@/data/navigation/horizontalMenuData'

type RenderExpandIconProps = {
  level?: number
}

type RenderVerticalExpandIconProps = {
  open?: boolean
  transitionDuration?: VerticalMenuContextProps['transitionDuration']
}

const RenderExpandIcon = ({ level }: RenderExpandIconProps) => (
  <StyledHorizontalNavExpandIcon level={level}>
    <i className='ri-arrow-right-s-line' />
  </StyledHorizontalNavExpandIcon>
)

const RenderVerticalExpandIcon = ({ open, transitionDuration }: RenderVerticalExpandIconProps) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)

const HorizontalMenu = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}) => {
  // Hooks
  const verticalNavOptions = useVerticalNav()
  const theme = useTheme()

  // Vars
  const { transitionDuration } = verticalNavOptions
  // const localePath = `/${getClientLang()}`
  const localePath = p(config.panelUrl)
  const landingUrl = p(config.landingUrl)

  return (
    <HorizontalNav
      switchToVertical
      verticalNavContent={VerticalNavContent}
      verticalNavProps={{
        customStyles: verticalNavigationCustomStyles(verticalNavOptions, theme),
        backgroundColor: 'var(--mui-palette-background-default)',
      }}>
      <Menu
        rootStyles={menuRootStyles(theme)}
        renderExpandIcon={({ level }) => <RenderExpandIcon level={level} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-fill' /> }}
        menuItemStyles={menuItemStyles(theme, 'ri-circle-fill')}
        popoutMenuOffset={{
          mainAxis: ({ level }) => (level && level > 0 ? 4 : 14),
          alignmentAxis: 0,
        }}
        verticalMenuProps={{
          menuItemStyles: verticalMenuItemStyles(verticalNavOptions, theme),
          renderExpandIcon: ({ open }) => (
            <RenderVerticalExpandIcon open={open} transitionDuration={transitionDuration} />
          ),
          renderExpandedMenuItemIcon: { icon: <i className='ri-circle-fill' /> },
        }}>
        <SubMenu label={dictionary.dashboards} icon={<i className='ri-home-smile-line' />}>
          <MenuItem
            href={`${localePath}/dashboards/crm`}
            icon={<i className='ri-pie-chart-2-line' />}>
            {dictionary.crm}
          </MenuItem>
          <MenuItem
            href={`${localePath}/dashboards/analytics`}
            icon={<i className='ri-bar-chart-line' />}>
            {dictionary.analytics}
          </MenuItem>
          <MenuItem
            href={`${localePath}/dashboards/ecommerce`}
            icon={<i className='ri-shopping-bag-3-line' />}>
            {dictionary.eCommerce}
          </MenuItem>
          <MenuItem
            href={`${localePath}/dashboards/academy`}
            icon={<i className='ri-graduation-cap-line' />}>
            {dictionary.academy}
          </MenuItem>
          <MenuItem
            href={`${localePath}/dashboards/logistics`}
            icon={<i className='ri-car-line' />}>
            {dictionary.logistics}
          </MenuItem>
        </SubMenu>
        <SubMenu label={dictionary.apps} icon={<i className='ri-mail-open-line' />}>
          <SubMenu label={dictionary.eCommerce} icon={<i className='ri-shopping-bag-3-line' />}>
            <MenuItem href={`${localePath}/ecommerce/dashboard`}>{dictionary.dashboard}</MenuItem>
            <SubMenu label={dictionary.products}>
              <MenuItem href={`${localePath}/ecommerce/products/list`}>{dictionary.list}</MenuItem>
              <MenuItem href={`${localePath}/ecommerce/products/add`}>{dictionary.add}</MenuItem>
              <MenuItem href={`${localePath}/ecommerce/products/category`}>
                {dictionary.category}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary.orders}>
              <MenuItem href={`${localePath}/ecommerce/orders/list`}>{dictionary.list}</MenuItem>
              <MenuItem
                href={`${localePath}/ecommerce/orders/details/5434`}
                exactMatch={false}
                activeUrl='/ecommerce/orders/details'>
                {dictionary.details}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary.customers}>
              <MenuItem href={`${localePath}/ecommerce/customers/list`}>{dictionary.list}</MenuItem>
              <MenuItem
                href={`${localePath}/ecommerce/customers/details/879861`}
                exactMatch={false}
                activeUrl='/ecommerce/customers/details'>
                {dictionary.details}
              </MenuItem>
            </SubMenu>
            <MenuItem href={`${localePath}/ecommerce/manage-reviews`}>
              {dictionary.manageReviews}
            </MenuItem>
            <MenuItem href={`${localePath}/ecommerce/referrals`}>{dictionary.referrals}</MenuItem>
            <MenuItem href={`${localePath}/ecommerce/settings`}>{dictionary.settings}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary.academy} icon={<i className='ri-graduation-cap-line' />}>
            <MenuItem href={`${localePath}/academy/dashboard`}>{dictionary.dashboard}</MenuItem>
            <MenuItem href={`${localePath}/academy/my-courses`}>{dictionary.myCourses}</MenuItem>
            <MenuItem href={`${localePath}/academy/course-details`}>
              {dictionary.courseDetails}
            </MenuItem>
          </SubMenu>
          <SubMenu label={dictionary.logistics} icon={<i className='ri-car-line' />}>
            <MenuItem href={`${localePath}/logistics/dashboard`}>{dictionary.dashboard}</MenuItem>
            <MenuItem href={`${localePath}/logistics/fleet`}>{dictionary.fleet}</MenuItem>
          </SubMenu>
          <MenuItem
            href={`${localePath}/email`}
            icon={<i className='ri-mail-open-line' />}
            exactMatch={false}
            activeUrl='/email'>
            {dictionary.email}
          </MenuItem>
          <MenuItem href={`${localePath}/chat`} icon={<i className='ri-wechat-line' />}>
            {dictionary.chat}
          </MenuItem>
          <MenuItem href={`${localePath}/calendar`} icon={<i className='ri-calendar-line' />}>
            {dictionary.calendar}
          </MenuItem>
          <MenuItem href={`${localePath}/kanban`} icon={<i className='ri-drag-drop-line' />}>
            {dictionary.kanban}
          </MenuItem>
          <SubMenu label={dictionary.invoice} icon={<i className='ri-file-list-2-line' />}>
            <MenuItem href={`${localePath}/invoice/list`}>{dictionary.list}</MenuItem>
            <MenuItem
              href={`${localePath}/invoice/preview/4987`}
              exactMatch={false}
              activeUrl='/invoice/preview'>
              {dictionary.preview}
            </MenuItem>
            <MenuItem
              href={`${localePath}/invoice/edit/4987`}
              exactMatch={false}
              activeUrl='/invoice/edit'>
              {dictionary.edit}
            </MenuItem>
            <MenuItem href={`${localePath}/invoice/add`}>{dictionary.add}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary.user} icon={<i className='ri-user-line' />}>
            <MenuItem href={`${localePath}/user/list`}>{dictionary.list}</MenuItem>
            <MenuItem href={`${localePath}/user/view`}>{dictionary.view}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary.rolesPermissions} icon={<i className='ri-lock-line' />}>
            <MenuItem href={`${localePath}/roles`}>{dictionary.roles}</MenuItem>
            <MenuItem href={`${localePath}/permissions`}>{dictionary.permissions}</MenuItem>
          </SubMenu>
        </SubMenu>
        <SubMenu label={dictionary.pages} icon={<i className='ri-file-list-2-line' />}>
          <MenuItem href={`${localePath}/pages/user-profile`} icon={<i className='ri-user-line' />}>
            {dictionary.userProfile}
          </MenuItem>
          <MenuItem
            href={`${localePath}/pages/account-settings`}
            icon={<i className='ri-user-settings-line' />}>
            {dictionary.accountSettings}
          </MenuItem>
          <MenuItem href={`${localePath}/pages/faq`} icon={<i className='ri-question-line' />}>
            {dictionary.faq}
          </MenuItem>
          <MenuItem
            href={`${localePath}/pages/pricing`}
            icon={<i className='ri-money-dollar-circle-line' />}>
            {dictionary.pricing}
          </MenuItem>
          <SubMenu label={dictionary.miscellaneous} icon={<i className='ri-file-info-line' />}>
            <MenuItem href={`${landingUrl}/pages/misc/coming-soon`} target='_blank'>
              {dictionary.comingSoon}
            </MenuItem>
            <MenuItem href={`${landingUrl}/pages/misc/under-maintenance`} target='_blank'>
              {dictionary.underMaintenance}
            </MenuItem>
            <MenuItem href={`${landingUrl}/pages/misc/404-not-found`} target='_blank'>
              {dictionary.pageNotFound404}
            </MenuItem>
            <MenuItem href={`${landingUrl}/pages/misc/401-not-authorized`} target='_blank'>
              {dictionary.notAuthorized401}
            </MenuItem>
          </SubMenu>
          <SubMenu label={dictionary.authPages} icon={<i className='ri-shield-keyhole-line' />}>
            <SubMenu label={dictionary.login}>
              <MenuItem href={`${landingUrl}/pages/auth/login-v1`} target='_blank'>
                {dictionary.loginV1}
              </MenuItem>
              <MenuItem href={`${landingUrl}/pages/auth/login-v2`} target='_blank'>
                {dictionary.loginV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary.register}>
              <MenuItem href={`${landingUrl}/pages/auth/register-v1`} target='_blank'>
                {dictionary.registerV1}
              </MenuItem>
              <MenuItem href={`${landingUrl}/pages/auth/register-v2`} target='_blank'>
                {dictionary.registerV2}
              </MenuItem>
              <MenuItem href={`${landingUrl}/pages/auth/register-multi-steps`} target='_blank'>
                {dictionary.registerMultiSteps}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary.verifyEmail}>
              <MenuItem href={`${landingUrl}/pages/auth/verify-email-v1`} target='_blank'>
                {dictionary.verifyEmailV1}
              </MenuItem>
              <MenuItem href={`${landingUrl}/pages/auth/verify-email-v2`} target='_blank'>
                {dictionary.verifyEmailV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary.forgotPassword}>
              <MenuItem href={`${landingUrl}/pages/auth/forgot-password-v1`} target='_blank'>
                {dictionary.forgotPasswordV1}
              </MenuItem>
              <MenuItem href={`${landingUrl}/pages/auth/forgot-password-v2`} target='_blank'>
                {dictionary.forgotPasswordV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary.resetPassword}>
              <MenuItem href={`${landingUrl}/pages/auth/reset-password-v1`} target='_blank'>
                {dictionary.resetPasswordV1}
              </MenuItem>
              <MenuItem href={`${landingUrl}/pages/auth/reset-password-v2`} target='_blank'>
                {dictionary.resetPasswordV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary.twoSteps}>
              <MenuItem href={`${landingUrl}/pages/auth/two-steps-v1`} target='_blank'>
                {dictionary.twoStepsV1}
              </MenuItem>
              <MenuItem href={`${landingUrl}/pages/auth/two-steps-v2`} target='_blank'>
                {dictionary.twoStepsV2}
              </MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label={dictionary.wizardExamples} icon={<i className='ri-git-commit-line' />}>
            <MenuItem href={`${localePath}/pages/wizard-examples/checkout`}>
              {dictionary.checkout}
            </MenuItem>
            <MenuItem href={`${localePath}/pages/wizard-examples/property-listing`}>
              {dictionary.propertyListing}
            </MenuItem>
            <MenuItem href={`${localePath}/pages/wizard-examples/create-deal`}>
              {dictionary.createDeal}
            </MenuItem>
          </SubMenu>
          <MenuItem
            href={`${localePath}/pages/dialog-examples`}
            icon={<i className='ri-tv-2-line' />}>
            {dictionary.dialogExamples}
          </MenuItem>
          <SubMenu label={dictionary.widgetExamples} icon={<i className='ri-bar-chart-box-line' />}>
            <MenuItem href={`${localePath}/pages/widget-examples/basic`}>
              {dictionary.basic}
            </MenuItem>
            <MenuItem href={`${localePath}/pages/widget-examples/advanced`}>
              {dictionary.advanced}
            </MenuItem>
            <MenuItem href={`${localePath}/pages/widget-examples/statistics`}>
              {dictionary.statistics}
            </MenuItem>
            <MenuItem href={`${localePath}/pages/widget-examples/charts`}>
              {dictionary.charts}
            </MenuItem>
            <MenuItem href={`${localePath}/pages/widget-examples/gamification`}>
              {dictionary.gamification}
            </MenuItem>
            <MenuItem href={`${localePath}/pages/widget-examples/actions`}>
              {dictionary.actions}
            </MenuItem>
          </SubMenu>
          <SubMenu label={dictionary.frontPages} icon={<i className='ri-file-copy-line' />}>
            <MenuItem href={landingUrl} target='_blank'>
              {dictionary.landing}
            </MenuItem>
            <MenuItem href={`${landingUrl}/pricing`} target='_blank'>
              {dictionary.pricing}
            </MenuItem>
            <MenuItem href={`${landingUrl}/payment`} target='_blank'>
              {dictionary.payment}
            </MenuItem>
            <MenuItem href={`${landingUrl}/checkout`} target='_blank'>
              {dictionary.checkout}
            </MenuItem>
            <MenuItem href={`${landingUrl}/help-center`} target='_blank'>
              {dictionary.helpCenter}
            </MenuItem>
          </SubMenu>
        </SubMenu>
        <SubMenu label={dictionary.formsAndTables} icon={<i className='ri-pages-line' />}>
          <MenuItem
            href={`${localePath}/forms/form-layouts`}
            icon={<i className='ri-layout-4-line' />}>
            {dictionary.formLayouts}
          </MenuItem>
          <MenuItem
            href={`${localePath}/forms/form-validation`}
            icon={<i className='ri-checkbox-multiple-line' />}>
            {dictionary.formValidation}
          </MenuItem>
          <MenuItem
            href={`${localePath}/forms/form-wizard`}
            icon={<i className='ri-git-commit-line' />}>
            {dictionary.formWizard}
          </MenuItem>
          <MenuItem href={`${localePath}/react-table`} icon={<i className='ri-table-alt-line' />}>
            {dictionary.reactTable}
          </MenuItem>
          <MenuItem
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements`}
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
            icon={<i className='ri-radio-button-line' />}>
            {dictionary.formELements}
          </MenuItem>
          <MenuItem
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/mui-table`}
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
            icon={<i className='ri-table-2' />}>
            {dictionary.muiTables}
          </MenuItem>
        </SubMenu>
        <SubMenu label={dictionary.charts} icon={<i className='ri-bar-chart-2-line' />}>
          <MenuItem
            href={`${localePath}/charts/apex-charts`}
            icon={<i className='ri-line-chart-line' />}>
            {dictionary.apex}
          </MenuItem>
          <MenuItem
            href={`${localePath}/charts/recharts`}
            icon={<i className='ri-bar-chart-line' />}>
            {dictionary.recharts}
          </MenuItem>
        </SubMenu>
        <SubMenu label={dictionary.others} icon={<i className='ri-more-line' />}>
          <MenuItem
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation`}
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
            icon={<i className='ri-pantone-line' />}>
            {dictionary.foundation}
          </MenuItem>
          <MenuItem
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components`}
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
            icon={<i className='ri-toggle-line' />}>
            {dictionary.components}
          </MenuItem>
          <MenuItem
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/menu-examples/overview`}
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
            icon={<i className='ri-menu-search-line' />}>
            {dictionary.menuExamples}
          </MenuItem>
          <MenuItem
            href='https://pixinvent.ticksy.com'
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
            icon={<i className='ri-lifebuoy-line' />}>
            {dictionary.raiseSupport}
          </MenuItem>
          <MenuItem
            href='https://demos.pixinvent.com/materialize-nextjs-admin-template/documentation'
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
            icon={<i className='ri-book-line' />}>
            {dictionary.documentation}
          </MenuItem>
          <MenuItem
            suffix={<Chip label='New' size='small' color='info' />}
            icon={<i className='ri-notification-badge-line' />}>
            {dictionary.itemWithBadge}
          </MenuItem>
          <MenuItem
            href='https://pixinvent.com'
            target='_blank'
            suffix={<i className='ri-external-link-line text-xl' />}
            icon={<i className='ri-link' />}>
            {dictionary.externalLink}
          </MenuItem>
          <SubMenu label={dictionary.menuLevels} icon={<i className='ri-menu-2-line' />}>
            <MenuItem>{dictionary.menuLevel2}</MenuItem>
            <SubMenu label={dictionary.menuLevel2}>
              <MenuItem>{dictionary.menuLevel3}</MenuItem>
              <MenuItem>{dictionary.menuLevel3}</MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem disabled>{dictionary.disabledMenu}</MenuItem>
        </SubMenu>
      </Menu>
      {/* <Menu
        rootStyles={menuRootStyles(theme)}
        renderExpandIcon={({ level }) => <RenderExpandIcon level={level} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-fill' /> }}
        menuItemStyles={menuItemStyles(theme, 'ri-circle-fill')}
        popoutMenuOffset={{
          mainAxis: ({ level }) => (level && level > 0 ? 4 : 14),
          alignmentAxis: 0
        }}
        verticalMenuProps={{
          menuItemStyles: verticalMenuItemStyles(verticalNavOptions, theme),
          renderExpandIcon: ({ open }) => (
            <RenderVerticalExpandIcon open={open} transitionDuration={transitionDuration} />
          ),
          renderExpandedMenuItemIcon: { icon: <i className='ri-circle-fill' /> }
        }}
      >
        <GenerateHorizontalMenu menuData={menuData(dictionary)} />
      </Menu> */}
    </HorizontalNav>
  )
}

export default HorizontalMenu
