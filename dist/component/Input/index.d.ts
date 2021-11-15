import React from 'react';
export interface IProps {
    type?: 'text' | 'password';
    value?: string;
    onChange?: Function;
    className?: string;
    placeholder?: string;
    flat?: boolean;
}
declare const Input: React.FC<IProps>;
export default Input;
