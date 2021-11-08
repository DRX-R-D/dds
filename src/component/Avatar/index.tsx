import React from 'react'
import { css, Theme } from '@emotion/react'
import { Image } from '../../index'

export interface IProps {
  size?: number
  src: string
}

const WrapCss = (props: IProps) => (theme: Theme) => css`
  background-color: ${theme.common.grey};
  border-radius: 50%;
  width: ${props.size || 110}px;
  height: ${props.size || 110}px;
  overflow: hidden;
`
const Avatar: React.FC<IProps> = (props) => {
  return (
    <div css={WrapCss(props)}>
      <Image src={props.src} />
    </div>
  )
}

export default Avatar
