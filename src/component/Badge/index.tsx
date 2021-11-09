import React from 'react'
import { css, Theme } from '@emotion/react'

export interface IProps {
  top?: boolean
  right?: boolean
  bottom?: boolean
  left?: boolean
  content?: React.ReactNode
}

const WrapCss = (props: IProps) => (theme: Theme) => css`
  position: relative;
  width: max-content;
  .badge {
    border-radius: 50%;
    top: ${props.top ? '-7px' : 'unset'};
    right: ${props.right ? '-7px' : 'unset'};
    bottom: ${props.bottom ? '-7px' : 'unset'};
    left: ${props.left ? '-7px' : 'unset'};
    z-index: 1;
    background-color: ${theme.common.white};
    position: absolute;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
    width: 45px;
    height: 45px;
  }
`
const Badge: React.FC<IProps> = (props) => {
  return (
    <div css={WrapCss(props)}>
      <div className="badge d-flex ai-center jc-center pa-2">
        {props.content}
      </div>
      {props.children}
    </div>
  )
}

Badge.defaultProps = {
  top: false,
  right: false,
  bottom: false,
  left: false
}

export default Badge
