import { createContext } from 'react';
import { TableDataModel } from './../model/tableModel';


export const TableContext = createContext({
    table: {} as TableDataModel
});

