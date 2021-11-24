import React from 'react'
import { css, Theme } from '@emotion/react'

export interface IProps {
  color?: string
  className?: string
  width?: number
  height?: number
  border?: boolean
}

const BorderCss = (props: IProps, theme: Theme) => css`
  background-color: transparent;
  border: 1px solid ${props.color || theme.common.grey};
`
const WrapCss = (props: IProps) => (theme: Theme) => css`
  background-color: ${props.color || theme.common.background};
  width: ${props.width ? `${props.width}px` : 'auto'};
  height: ${props.height ? `${props.height}px` : 'auto'};
  min-width: ${props.width ? `${props.width}px` : 'unset'};
  min-height: ${props.height ? `${props.height}px` : 'unset'};
  
  ${props.border && BorderCss(props, theme)}
`
const Sheet: React.FC<IProps> = (props) => {
  return (
    <div css={WrapCss(props)} className={props.className || ''}>
      {props.children}
    </div>
  )
}

Sheet.defaultProps = {
  border: false,
}

export default Sheet
