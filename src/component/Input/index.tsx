import React, { useState, useEffect } from 'react'
import { css, Theme } from '@emotion/react'

export interface IProps {
  type?: 'text' | 'password'
  value?: string
  onChange?: Function
  className?: string
  placeholder?: string
  flat?: boolean
}

const FlatCss = css`
  box-shadow: unset;
  background-color: #FAFAFA;
`
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
  
  ${props.flat && FlatCss}
`
const Input: React.FC<IProps> = (props) => {
  const [value, setValue] = useState<string>('')

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  useEffect(() => {
    props.onChange && props.onChange(value)
  }, [value])

  return (
    <div css={WrapCss(props)} className={props.className || ''}>
      <label className="fill width">
        <input
          className="fill width pt-3 pb-3 pl-4 pr-4"
          value={value}
          onChange={onChange}
          type={props.type}
          placeholder={props.placeholder}
        />
      </label>
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  className: '',
  flat: false,
}

export default Input
