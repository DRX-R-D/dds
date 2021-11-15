import React from 'react';
export interface IProps {
    color?: string;
    className?: string;
    width?: number;
    height?: number;
    border?: boolean;
}
declare const Sheet: React.FC<IProps>;
export default Sheet;
