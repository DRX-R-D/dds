import { css } from '@emotion/react'

export default css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Noto Sans KR', sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  input, button {
    border: 0;
    background-color: transparent;
    &:focus-visible,
    &:active {
      outline: 0;
      border: 0;
    }
  }
  p {
    font-weight: 400;
    font-family: 'Noto Sans KR', sans-serif;
  }
  table {
    border-collapse: collapse;
  }
`
