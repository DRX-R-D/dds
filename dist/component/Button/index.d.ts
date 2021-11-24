import React from 'react';
export interface IProps {
    small?: boolean;
    rounded?: boolean;
    onClick?: Function;
    onFocus?: Function;
    onBlur?: Function;
    className?: string;
    border?: boolean;
    tile?: boolean;
    text?: boolean;
    color?: string;
}
declare const Button: React.FC<IProps>;
export default Button;
