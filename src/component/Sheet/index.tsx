import React from 'react'
import { css, Theme } from '@emotion/react'

export interface IProps {
  color?: string
  className?: string
  width?: number
  height?: number
}

const WrapCss = (props: IProps) => (theme: Theme) => css`
  background-color: ${props.color || theme.common.grey};
  width: ${props.width ? `${props.width}px` : 'auto'};
  height: ${props.height ? `${props.height}px` : 'auto'};
`
const Sheet: React.FC<IProps> = (props) => {
  return (
    <div css={WrapCss(props)} className={props.className || ''}>
      {props.children}
    </div>
  )
}

export default Sheet
