import React from 'react'
import { css, Theme } from '@emotion/react'

const Wrap = (theme: Theme) => css`
  background-color: ${theme.common.white};
  box-shadow: ${theme.style.shadow};
  border-radius: 10px;
`
const Card: React.FC = (props) => {
  return (
    <div css={Wrap}>
      {props.children}
    </div>
  )
}

export default Card
