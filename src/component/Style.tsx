import React from 'react'
import { ThemeProvider, Global } from '@emotion/react'
import { font, reset, theme, common } from '../style'

interface IProps {
  global?: any[]
}

const Style: React.FC<IProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={[
          font,
          reset,
          common,
          ...(props.global || [])
        ]}
      />
      {props.children}
    </ThemeProvider>
  )
}

export default Style
