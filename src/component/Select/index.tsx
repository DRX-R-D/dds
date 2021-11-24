import React, { useState, useEffect } from 'react'
import { css, Theme } from '@emotion/react'
import { Button } from '../'

// export type TypeSelectDataItem =
//   string |
//   Record<string | number, string | number>

export interface IProps {
  className?: string
  placeholder?: string
  data: (string | number)[]
  onChange?: Function
  value?: string | number
}

const WrapCss = () => (theme: Theme) => css`
  border-radius: 10px;
  background-color: ${theme.common.white};
  box-shadow: ${theme.style.shadow};
  font-size: 16px;
  position: relative;
  height: 50px;
  label {
    display: block;
    input {
      font-size: 16px;
      cursor: pointer;
      display: block;
      color: ${theme.common.text};
      padding: 0 15px;
    }
  }
  ul {
    box-shadow: ${theme.style.shadow};
    position: absolute;
    top: 55px;
    left: 0;
    background-color: ${theme.common.white};
    border-radius: 10px;
    li {
      button {
        height: 22px;
        font-size: 16px;
        color: ${theme.common.text};
        padding: 0 15px;
        &.on {
          color: ${theme.common.primary};
        }
        :hover {
          color: ${theme.common.primary};
        }
      }
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`
const Select: React.FC<IProps> = (props) => {
  const [optionView, setOptionView] = useState<boolean>(false)
  const [input, setInput] = useState<string | number>(props.value || '')

  const onOptionClick = (value: string | number) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()

    setOptionView(false)
    setInput(value)

    props.onChange?.(value)
  }
  const onSelectOpen = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation()

    setOptionView(true)
  }

  useEffect(() => {
    const _ClickEvent = () => {
      setOptionView(false)
    }

    document.addEventListener('click', _ClickEvent)

    return () => {
      document.removeEventListener('click', _ClickEvent)
    }
  }, [])

  return (
    <div css={WrapCss()} className={props.className || ''}>
      <label className="fill width height">
        <input
          readOnly
          className="fill width height"
          onClick={onSelectOpen}
          type="text"
          placeholder={props.placeholder}
          value={input}
        />
      </label>
      {
        optionView && (
          <ul className="fill width pt-2 pb-2">
            {
              props.data.map((option) => (
                <li key={option} className="mb-3">
                  <Button onClick={onOptionClick(option)} className={`text--left fill width ${input === option ? 'on' : ''}`} text>
                    {option}
                  </Button>
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  )
}

export default Select
