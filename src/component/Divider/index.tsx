import React from 'react'
import { css, Theme } from '@emotion/react'

export interface IProps {
  size?: number
  color?: string
  className?: string
}

const WrapCss = (props: IProps) => (theme: Theme) => css`
  font-size: 0;
  height: ${props.size || 1}px;
  background-color: ${props.color || theme.common.grey};
`
const Divider: React.FC<IProps> = (props) => {
  return (
    <div css={WrapCss(props)} className={props.className || ''}>
      Divider
    </div>
  )
}

export default Divider
