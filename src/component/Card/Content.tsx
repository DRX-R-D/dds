import React from 'react'
import { css, Theme } from '@emotion/react'

export interface IProps {
  color?: string
  className?: string
  border?: boolean
}

const BorderCss = (props: IProps, theme: Theme) => css`
  box-shadow: unset;
  border: 2px solid ${props.color || theme.common.primary}; 
`
const WrapCss = (props: IProps) => (theme: Theme) => css`
  background-color: ${theme.common.white};
  box-shadow: ${theme.style.shadow};
  border-radius: 10px;
  
  ${props.border && BorderCss(props, theme)}
`
const Card: React.FC<IProps> = (props) => {
  return (
    <div css={WrapCss(props)}>
      <div className="pa-4">
        {props.children}
      </div>
    </div>
  )
}

Card.defaultProps = {
  border: false
}

export default Card
