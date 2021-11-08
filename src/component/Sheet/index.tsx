import React from 'react'
import { css, Theme } from '@emotion/react'

export interface IProps {
  color?: string
  className?: string
}

const WrapCss = (props: IProps) => (theme: Theme) => css`
  background-color: ${props.color || theme.common.grey};
`
const Sheet: React.FC<IProps> = (props) => {
  return (
    <div css={WrapCss(props)} className={props.className || ''}>
      {props.children}
    </div>
  )
}

export default Sheet
