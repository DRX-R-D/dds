import React from 'react'
import { css, Theme } from '@emotion/react'

export interface IProps {
  className?: string
}

const WrapCss = (props: IProps) => (theme: Theme) => css`
  border-radius: 10px;
  background-color: ${theme.common.white};
  box-shadow: ${theme.style.shadow};
  label {
    display: block;
    input {
      display: block;
      font-size: 16px;
    }
  }
`
const Select: React.FC<IProps> = (props) => {
  return (
    <div css={WrapCss(props)} className={props.className || ''}>
      <label>
        <select className="fill width pt-3 pb-3 pl-4 pr-4">

        </select>
      </label>
    </div>
  )
}

export default Select
