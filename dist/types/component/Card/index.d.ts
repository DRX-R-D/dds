import React from 'react';
import { IProps as IContentProps } from './Content';
import { IProps as ITitleProps } from './Content';
export interface IProps {
    color?: string;
    className?: string;
    border?: boolean;
    dark?: boolean;
    flat?: boolean;
}
export interface ICard extends React.FC<IProps> {
    Content: React.FC<IContentProps>;
    Title: React.FC<ITitleProps>;
}
declare const Card: ICard;
export default Card;
