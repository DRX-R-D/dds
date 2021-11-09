import { create } from '@storybook/theming'
import { theme } from '../src/style'

export default create({
  base: 'light',

  brandTitle: 'DRX Design System',
  brandImage: 'https://drx-media.s3.ap-northeast-2.amazonaws.com/image/icon/icon-256x256.png',

  barBg: theme.common.primary,
  barTextColor: theme.common.white,
  barSelectedColor: theme.common.secondary,

  appBg: theme.common.white,
  appContentBg: theme.common.background,

  colorPrimary: theme.common.primary,
  colorSecondary: theme.common.secondary,
})
