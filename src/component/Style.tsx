import React from 'react'
import { ThemeProvider, Global } from '@emotion/react'
import { reset, theme, common } from '../style'

const Style: React.FC = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={[reset, common]} />
      {props.children}
    </ThemeProvider>
  )
}

export default Style
