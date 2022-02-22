import { TableAdapter } from '../../TableUtils';
import { DataRowMetaModel, HeaderRowMetaModel } from '../rows/RowsFactories';
import { ColumnDataModel, DataTypes, TableDataModel } from './../../../model/tableModel';
import { columnFactories } from './ColumnsFactories';

export interface DataApi<T> {
    columns: ColumnDefinition[],
    data: T[]
}

export interface ColumnDefinition {
    label: string,
    code: string,
    dataType: DataTypes,
    allowNull: boolean,
    sortable: boolean,
    editable: boolean
}


export interface DataRow {
    id: number,
    lastName: string,
    firstName: string,
    birthDate: string,
    address: string,
    phoneNumber: string,
    sortOrder: number
}


export const DataAdapter = <T>(data: DataApi<T>): TableDataModel => {

    const tableDataMock = TableAdapter("Customers Mock")
    const headerRow: ColumnDataModel[] = []

    for (let i = 0; i < data.columns.length; i++) {
        const definition = data.columns[i]
        const headerFn = columnFactories.find(o => o.dataType === DataTypes.Header)
        console.log(definition)
        if (!headerFn?.fn) {
            console.error(`No Header Function Found!`)
            return {} as TableDataModel;
        }
        headerRow.push(headerFn?.fn(definition.label, definition.editable, definition.sortable))
    }

    const header = HeaderRowMetaModel(headerRow);
    tableDataMock.addRow!(header)

    for (let row = 0; row < data.data.length; row++) {
        const dataRow: ColumnDataModel[] = []
        Object.entries(data.data[row]).forEach(columns => {
            const definition = data.columns.find(o => o.code === columns[0])
            const columnFactoryFn = columnFactories.find(o => o.dataType === definition?.dataType)

            if (!columnFactoryFn?.fn || !definition) {
                console.error(`Error while searching ${columns[0]} definition`)
                return;
            }
            dataRow.push(columnFactoryFn.fn(columns[1], definition?.editable, definition?.sortable))
        })
        const dataRowInstance = DataRowMetaModel(dataRow);
        tableDataMock.addRow!(dataRowInstance)
    }
    return tableDataMock
}

