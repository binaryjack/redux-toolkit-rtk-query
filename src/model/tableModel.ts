
export interface TableAbstract {
    id: number
    uniqueKey?: string
    name?: string
    active?: boolean
}

export interface TableDataModel extends TableAbstract {
    rows: RowDataModel[]
    addRow?: (label?: string) => RowDataModel
}


export interface RowDataModel {
    id: number
    label?: string
    columns: ColumnDataModel[]
    addColumn?: (label?: string, sortable?: boolean, active?: boolean) => ColumnDataModel
    addColumnModel?: (model?: ColumnDataModel) => ColumnDataModel | undefined
    addColumns?: (columns?: ColumnDataModel[]) => ColumnDataModel[] | undefined
}


export interface ColumnDataModel {
    order: number
    label?: string
    sortable?: boolean
    active?: boolean
    cell?: CellDataModel
    assCell?: (cell?: CellDataModel) => CellDataModel
}


export interface CellDataModel {
    value: string | number | undefined | null
    format: string
    active?: boolean
}





