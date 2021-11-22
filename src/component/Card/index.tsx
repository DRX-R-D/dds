import React from 'react'
import { css, Theme } from '@emotion/react'
import Content, { IProps as IContentProps } from './Content'
import Title, { IProps as ITitleProps } from './Title'

export interface IProps {
  color?: string
  className?: string
  border?: boolean
  dark?: boolean
  flat?: boolean
}
export interface ICard extends React.FC<IProps> {
  Content: React.FC<IContentProps>
  Title: React.FC<ITitleProps>
}

const BorderCss = (props: IProps, theme: Theme) => css`
  box-shadow: unset;
  border: 2px solid ${props.color || theme.common.primary}; 
`
const WrapCss = (props: IProps) => (theme: Theme) => css`
  background-color: ${props.color || theme.common.white};
  box-shadow: ${props.flat ? 'unset' : theme.style.shadow};
  border-radius: 10px;
  color: ${props.dark ? theme.common.white : theme.common.black};
  
  ${props.border && BorderCss(props, theme)}
`
const Card: ICard = (props) => {
  return (
    <div css={WrapCss(props)} className={props.className || ''}>
      {props.children}
    </div>
  )
}

Card.Title = Title
Card.Content = Content
Card.defaultProps = {
  border: false
}

export default Card
