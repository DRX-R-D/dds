import React from 'react'
import { css, Theme } from '@emotion/react'

export interface IProps {
  small?: boolean
  rounded?: boolean
  onClick?: Function
  className?: string
  border?: boolean
  tile?: boolean
  color?: string
}

const SmallCss = (props: IProps) => css`
  font-size: 14px;
  height: 35px;
  min-width: 90px;
  padding: 0 22px;
  border-radius: ${props.rounded ? 27.5 : 10}px;
`
const BorderCss = (props: IProps, theme: Theme) => css`
  background-color: transparent;
  border: 2px solid ${props.color || theme.common.primary};
  color: ${props.color || theme.common.primary};
`
const TileCss = () => css`
  border-radius: 0;
`
const WrapCss = (props: IProps) => (theme: Theme) => css`
  background-color: ${props.color || theme.common.primary};
  height: 50px;
  padding: 0 35px;
  border-radius: ${props.rounded ? 25 : 10}px;
  font-size: 18px;
  color: ${theme.common.white};
  cursor: pointer;
  min-width: 110px;
  
  ${props.small && SmallCss(props)}
  ${props.border && BorderCss(props, theme)}
  ${props.tile && TileCss()}
`
const Button: React.FC<IProps> = (props) => {
  return (
    <button css={WrapCss(props)} className={props.className || ''}>
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  small: false,
  rounded: false,
  tile: false,
  border: false,
}

export default Button
