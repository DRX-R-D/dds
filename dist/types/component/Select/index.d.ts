import React from 'react';
export interface IProps {
    className?: string;
    placeholder?: string;
    data: (string | number)[];
    onChange?: Function;
    value?: string | number;
}
declare const Select: React.FC<IProps>;
export default Select;
