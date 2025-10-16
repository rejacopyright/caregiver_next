// MUI Imports
// Config Imports
import themeConfig from '@configs/themeConfig'
import styled, { type CSSObject } from '@emotion/styled'
// Util Imports
import { horizontalLayoutClasses } from '@layouts/utils/layoutClasses'
import type { Theme } from '@mui/material/styles'

type StyledFooterProps = {
  theme: Theme
  overrideStyles?: CSSObject
}

const StyledFooter = styled.footer<StyledFooterProps>`
  &.${horizontalLayoutClasses.footerFixed} {
    position: sticky;
    inset-block-end: 0;
    z-index: var(--footer-z-index);
    background-color: var(--mui-palette-background-paper);
    box-shadow: 0 -4px 8px -4px rgb(var(--mui-mainColorChannels-shadow) / 0.42);

    [data-skin='bordered'] & {
      box-shadow: none;
      border-block-start: 1px solid var(--border-color);
    }
  }

  &.${horizontalLayoutClasses.footerContentCompact}
    .${horizontalLayoutClasses.footerContentWrapper} {
    margin-inline: auto;
    max-inline-size: ${themeConfig.compactContentWidth}px;
  }

  .${horizontalLayoutClasses.footerContentWrapper} {
    padding-block: 16px;
    padding-inline: ${themeConfig.layoutPadding}px;
  }

  ${({ overrideStyles }) => overrideStyles}
`

export default StyledFooter
