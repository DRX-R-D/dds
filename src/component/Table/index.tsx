import React, { useRef, useEffect } from 'react'
import { css, Theme } from '@emotion/react'

type TypeHeaderItem = (string | { name: string, key: string | number })

export interface IProps {
  headers: TypeHeaderItem[]
  data: any[]
  className?: string
  color?: string
  onHeadCellClick?: Function
  onBodyRowClick?: Function
}

const WrapCss = (props: IProps) => (theme: Theme) => css`
  overflow: auto;
  .table {
    border-radius: 10px;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
    .table-wrap {
      width: max-content;
      table {
        width: max-content;
      }
    }
  }
  .header {
    background-color: ${props.color || theme.common.primary};
    table {
      thead {
        tr {
          th {
            height: 65px;
            color: ${theme.common.white};
            
            ${props.onHeadCellClick && 'cursor: pointer'};
          }
        }
      }
    }
  }
  .body {
    background-color: ${theme.common.white};
    box-shadow: ${theme.style.shadow};
    table {
      width: max-content;
      tbody {
        tr {
          ${props.onBodyRowClick && 'cursor: pointer'};
          td {
          }
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
      body.current?.scrollTo(event.currentTarget.scrollLeft, body.current.scrollTop)
    } else if (event.currentTarget === body.current) {
      header.current?.scrollTo(event.currentTarget.scrollLeft, 0)
    }
  }
  const onHeadCellClick = (header: TypeHeaderItem) => () => {
    props.onHeadCellClick?.(header)
  }
  const onBodyRowClick = (data: any) => () => {
    props.onBodyRowClick?.(data)
  }

  useEffect(() => {
    if (header.current && body.current) {
      const thead = header.current.querySelector('thead') as HTMLTableSectionElement
      const tbody = body.current.querySelector('tbody') as HTMLTableSectionElement
      const [theadRow] = [...thead.children] as HTMLTableRowElement[]
      const [tbodyRow] = [...tbody.children] as HTMLTableRowElement[]

      if (tbody.children.length) {
        [...theadRow.cells].forEach((cell, index) => {
          if (cell.offsetWidth > tbodyRow.cells[index].offsetWidth) {
            const width = Math.ceil(cell.offsetWidth)

            cell.style.minWidth = `${width}px`
            tbodyRow.cells[index].style.minWidth = `${width}px`
          } else {
            const width = Math.ceil(tbodyRow.cells[index].offsetWidth)

            cell.style.minWidth = `${width}px`
            tbodyRow.cells[index].style.minWidth = `${width}px`
          }
        })
      }
    }
  }, [header, body, props.headers, props.data])

  return (
    <div css={WrapCss(props)} className={`d-flex dir-column ${props.className || ''}`}>
      <div className="table header" ref={header} onScroll={onTableScroll}>
        <div className="table-wrap pl-5 pr-5 ml-auto mr-auto">
          <table>
            <thead>
            <tr>
              {
                props.headers
                  .map(
                    (header) => typeof header === 'string'
                      ? (
                        <th onClick={onHeadCellClick(header)} key={header}>
                          <div className="pl-5 pr-5">
                            {header}
                          </div>
                        </th>
                      )
                      : (
                        <th onClick={onHeadCellClick(header)} key={header.key}>
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
      </div>
      <div className="table body mt-3 flex-1" ref={body} onScroll={onTableScroll}>
        <div className="table-wrap pl-5 pr-5 ml-auto mr-auto">
          <table>
            <tbody>
            {
              props.data.length
                ? React.Children.toArray(
                  props.data
                    .map(
                      (item) => (
                        <tr onClick={onBodyRowClick(item)}>
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
                : <></>
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Table
