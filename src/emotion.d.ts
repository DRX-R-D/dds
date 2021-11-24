import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    common: {
      background: string
      primary: string
      white: string
      black: string
      secondary: string
      text: string
      grey: string
    }
    style: {
      shadow: string
    }
  }
}
