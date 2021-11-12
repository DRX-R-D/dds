import React from 'react';
export interface IProps {
    headers: (string | {
        name: string;
        key: string | number;
    })[];
    data: any[];
    className?: string;
    color?: string;
}
declare const Table: React.FC<IProps>;
export default Table;
