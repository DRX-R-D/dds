import React from 'react'

export interface IProps {
  className?: string
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Title: React.FC<IProps> = (props) => {
  const Element: React.ReactType = props.type || 'h4'

  return (
    <Element className="pl-4 pt-4 pr-4">
      {props.children}
    </Element>
  )
}

export default Title
