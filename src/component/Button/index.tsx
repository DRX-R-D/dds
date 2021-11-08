import React from 'react'
import { css, Theme } from '@emotion/react'

export interface IProps {
  small?: boolean
  rounded?: boolean
  onClick?: Function
  className?: string
}

const SmallCss = (props: IProps) => css`
  font-size: 14px;
  height: 35px;
  min-width: 90px;
  padding: 0 22px;
  border-radius: ${props.rounded ? 27.5 : 10}px;
`
const WrapCss = (props: IProps) => (theme: Theme) => css`
  background-color: ${theme.common.primary};
  height: 50px;
  padding: 0 35px;
  border-radius: ${props.rounded ? 25 : 10}px;
  font-size: 18px;
  color: ${theme.common.white};
  cursor: pointer;
  min-width: 110px;
  
  ${props.small && SmallCss(props)}
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
  rounded: false
}

export default Button
