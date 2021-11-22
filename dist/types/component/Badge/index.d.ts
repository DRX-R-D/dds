import React from 'react';
export interface IProps {
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
    content?: React.ReactNode;
    className?: string;
}
declare const Badge: React.FC<IProps>;
export default Badge;
