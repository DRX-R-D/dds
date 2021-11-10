import React, { useRef, useEffect } from 'react'
import { css, Theme } from '@emotion/react'

export interface IProps {
  headers: (string | { name: string, key: string | number })[]
  data: any[]
  className?: string
  color?: string
}

const WrapCss = (props: IProps) => (theme: Theme) => css`
  .header {
    max-width: max-content;
    border-radius: 10px;
    overflow: auto;
    table {
      background-color: ${props.color || theme.common.primary};
      width: max-content;
      thead {
        tr {
          th {
            height: 65px;
            color: ${theme.common.white};
          }
        }
      }
    }
  }
  .body {
    max-width: max-content;
    box-shadow: ${theme.style.shadow};
    border-radius: 10px;
    overflow: auto;
    table {
      background-color: ${theme.common.white};
      width: max-content;
      thead {
        tr {
        }
      }
    }
  }
`
const Table: React.FC<IProps> = (props) => {
  const header = useRef<HTMLDivElement>(null)
  const body = useRef<HTMLDivElement>(null)

  const onTableScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.currentTarget === header.current) {
      body.current?.scrollTo(event.currentTarget.scrollLeft, event.currentTarget.scrollTop)
    } else if (event.currentTarget === body.current) {
      header.current?.scrollTo(event.currentTarget.scrollLeft, event.currentTarget.scrollTop)
    }
  }

  useEffect(() => {
    if (header.current && body.current) {
      const thead = header.current.querySelector('thead') as HTMLTableSectionElement
      const tbody = body.current.querySelector('tbody') as HTMLTableSectionElement
      const theadRow = thead.children[0] as HTMLTableRowElement
      const tbodyRow = tbody.children[0] as HTMLTableRowElement

      [...theadRow.cells].forEach((cell, index) => {
        const thWidth = Math.round(cell.clientWidth) + 1
        const tdWidth = Math.round(tbodyRow.cells[index].clientWidth) + 1

        if (thWidth > tdWidth) {
          cell.style.width = `${thWidth}px`
          tbodyRow.cells[index].style.width = `${thWidth}px`
        } else {
          tbodyRow.cells[index].style.width = `${tdWidth}px`
          cell.style.width = `${tdWidth}px`
        }
      })
    }
  }, [header, body])

  return (
    <div css={WrapCss(props)}>
      <div className="header" ref={header} onScroll={onTableScroll}>
        <table>
          <thead>
          <tr>
            {
              props.headers
                .map(
                  (header) => typeof header === 'string'
                    ? (
                      <th key={header}>
                        <div className="pl-5 pr-5">
                          {header}
                        </div>
                      </th>
                    )
                    : (
                      <th key={header.key}>
                        <div className="pl-5 pr-5">
                          {header.name}
                        </div>
                      </th>
                    )
                )
            }
          </tr>
          </thead>
        </table>
      </div>
      <div className="body mt-3" ref={body} onScroll={onTableScroll}>
        <table>
          <tbody>
          {
            React.Children.toArray(
              props.data
                .map(
                  (item) => (
                    <tr>
                      {
                        React.Children.toArray(
                          props.headers
                            .map(
                              (header) => typeof header === 'string'
                                ? (
                                  <td>
                                    <div className="pl-5 pr-5 pb-3 pt-3 text--center">
                                      {item[header]}
                                    </div>
                                  </td>
                                )
                                : (
                                  <td>
                                    <div className="pl-5 pr-5 pb-3 pt-3 text--center">
                                      {item[header.key]}
                                    </div>
                                  </td>
                                )
                            )
                        )
                      }
                    </tr>
                  )
                )
            )
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
