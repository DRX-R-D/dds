import React from 'react';
export interface IProps {
    className?: string;
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
declare const Title: React.FC<IProps>;
export default Title;
