import React from 'react'
import { css, Theme } from '@emotion/react'
import { Image } from '../../index'

export interface IProps {
  size?: number
  tile?: boolean
  src: string
  className?: string
  color?: string
}

const WrapCss = (props: IProps) => (theme: Theme) => css`
  background-color: ${props.color || theme.common.grey};
  border-radius: ${props.tile ? 0 : 50}%;
  width: ${props.size}px;
  height: ${props.size}px;
  overflow: hidden;
`
const Avatar: React.FC<IProps> = (props) => {
  return (
    <div css={WrapCss(props)} className={props.className || ''}>
      <Image src={props.src} />
    </div>
  )
}

Avatar.defaultProps = {
  tile: false,
  size: 110,
}

export default Avatar
