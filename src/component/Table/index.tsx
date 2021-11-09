import React from 'react'
import { css, Theme } from '@emotion/react'

export interface IProps {}

const WrapCss = (props: IProps) => (theme: Theme) => css`
  table {
    thead {
      tr {
        border-radius: 10px;
        overflow: hidden;
        th {
          min-height: 65px;
          background-color: ${theme.common.primary};
          color: ${theme.common.white};
          font-size: 18px;
        }
      }
    }
  }
`
const Table: React.FC<IProps> = (props) => {
  return (
    <div css={WrapCss(props)}>
      <table>
        <thead>
        <tr>
          <th className="pt-4 pb-5">foo1</th>
          <th className="pt-4 pb-5">foo2</th>
          <th className="pt-4 pb-5">foo3</th>
        </tr>
        </thead>
      </table>
    </div>
  )
}

export default Table
