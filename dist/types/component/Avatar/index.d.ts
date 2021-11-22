import React from 'react';
export interface IProps {
    size?: number;
    tile?: boolean;
    src: string;
    className?: string;
    color?: string;
}
declare const Avatar: React.FC<IProps>;
export default Avatar;
