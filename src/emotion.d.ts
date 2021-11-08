import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    common: {
      primary: string
      white: string
      black: string
      secondary: string
      grey: string
    }
    style: {
      shadow: string
    }
  }
}
