import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    common: {
      primary: string
      white: string
      black: string
      secondary: string
    }
    style: {
      shadow: string
    }
  }
}
