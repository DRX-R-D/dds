import { css } from '@emotion/react'

const gaps = [0, 1, 2, 3, 4, 5]

export default css`
  ${gaps.map((gap) => `
    .mt-${gap} { margin-top: ${gap * 5}px; }
    .mr-${gap} { margin-right: ${gap * 5}px; }
    .mb-${gap} { margin-bottom: ${gap * 5}px; }
    .ml-${gap} { margin-left: ${gap * 5}px; }
    .ma-${gap} { margin: ${gap * 5}px; }
    
    .pt-${gap} { padding-top: ${gap * 5}px; }
    .pr-${gap} { padding-right: ${gap * 5}px; }
    .pb-${gap} { padding-bottom: ${gap * 5}px; }
    .pl-${gap} { padding-left: ${gap * 5}px; }
    .pa-${gap} { padding: ${gap * 5}px; }
  `)}
  
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 28px;
  }
`
