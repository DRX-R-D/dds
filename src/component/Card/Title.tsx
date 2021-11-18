import React from 'react'

export interface IProps {
  className?: string
}

const Content: React.FC<IProps> = (props) => {
  return (
    <div className="pa-4">
      {props.children}
    </div>
  )
}

export default Content
