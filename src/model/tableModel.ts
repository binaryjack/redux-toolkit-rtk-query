
export interface TableAbstract {
    id: number
    uniqueKey?: string
    name?: string
    active?: boolean
}

export interface TableDataModel extends TableAbstract {
    rows: RowDataModel[]
    newRow?: (label?: string) => RowDataModel
    addRow?: (row?: RowDataModel) => void,



}


export type RowDataModel = {
    id: number
    dragDropSortOrder?: number
    label?: string
    isHeader: boolean
    columns: ColumnDataModel[]
    addColumn?: (label?: string, sortable?: boolean, active?: boolean) => ColumnDataModel
    addColumnModel?: (model?: ColumnDataModel) => ColumnDataModel | undefined
    addColumns?: (columns?: ColumnDataModel[]) => ColumnDataModel[] | undefined
}


export interface ColumnDataModel {
    order: number
    label?: string
    sortable?: boolean
    active?: boolean,
    editable?: boolean,
    dataType?: DataTypes
    cell?: CellDataModel
    assCell?: (cell?: CellDataModel) => CellDataModel
}


export interface CellDataModel {
    value: string | number | undefined | null
    format: string
    active?: boolean
}


export enum DataTypes {
    Int,
    BigInt,
    Float,
    Text,
    TextArea,
    Date,
    Hour,
    GUID,
    PhoneNumber,

}