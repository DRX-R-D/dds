import { css } from '@emotion/react'

const gaps = [0, 1, 2, 3, 4, 5, 'auto']
const flexOption = ['center', 'start', 'end', 'space-between', 'space-around']
const textOption = ['center', 'left', 'right']

export default css`
  .d-flex {
    display: flex;
    &.dir-column {
      flex-direction: column;
    }
    &.flex-wrap {
      flex-wrap: wrap;
    }
    .flex-1 {
      flex: 1;
    }
  }

  .fill {
    &.width { width: 100%; }
    &.height { height: 100%; }
  }
  
  ${flexOption.map((item) => `
    .ai-${item} { align-items: ${item}; }
    .jc-${item} { justify-content: ${item}; }
  `)}

  ${gaps.map((gap) => typeof gap === 'number'
    ? `
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
    `
    : `
      .mt-${gap} { margin-top: ${gap}; }
      .mr-${gap} { margin-right: ${gap}; }
      .mb-${gap} { margin-bottom: ${gap}; }
      .ml-${gap} { margin-left: ${gap}; }
      .ma-${gap} { margin: ${gap}; }
      
      .pt-${gap} { padding-top: ${gap}; }
      .pr-${gap} { padding-right: ${gap}; }
      .pb-${gap} { padding-bottom: ${gap}; }
      .pl-${gap} { padding-left: ${gap}; }
      .pa-${gap} { padding: ${gap}; }
    `
  )}
  
  ${textOption.map((option) => `.text--${option} { text-align: ${option}; }`)}
  
  h1 {
    font-size: 35px;
  }
  h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 25px;
  }
  h4 {
    font-size: 22px;
  }
  h5 {
    font-size: 16px;
  }
  h6 {
    font-size: 14px;
  }
  
  p {
    font-size: 12px;
  }
`
