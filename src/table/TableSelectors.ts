import { RowDataModel, TableDataModel } from '../model/tableModel'

const getHeader = (table: TableDataModel): RowDataModel | undefined =>
    table.rows.find((o) => o.label === 'Header')
const getRows = (table: TableDataModel): RowDataModel[] | undefined =>
    table.rows.filter((o) => o.label !== 'Header')


export const tableGetters = {
    getHeader,
    getRows
}