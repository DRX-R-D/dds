import React from 'react';
export interface IProps {
    small?: boolean;
    rounded?: boolean;
    onClick?: Function;
    className?: string;
}
declare const Button: React.FC<IProps>;
export default Button;
