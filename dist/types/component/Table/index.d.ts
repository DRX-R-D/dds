import React from 'react';
declare type TypeHeaderItem = (string | {
    name: string;
    key: string | number;
});
export interface IProps {
    headers: TypeHeaderItem[];
    data: any[];
    className?: string;
    color?: string;
    onHeadCellClick?: Function;
    onBodyRowClick?: Function;
    onBodyCellClick?: Function;
}
declare const Table: React.FC<IProps>;
export default Table;
