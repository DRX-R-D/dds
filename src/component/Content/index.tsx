import React from 'react'
import { css, Theme } from '@emotion/react'

export interface IProps {
  className?: string
}

const WrapCss = (theme: Theme) => css`
  background-color: ${theme.common.background};
`
const Content: React.FC<IProps> = (props) => {
  return (
    <div className={`fill width height ${props.className || ''}`} css={WrapCss}>
      {props.children}
    </div>
  )
}

export default Content
