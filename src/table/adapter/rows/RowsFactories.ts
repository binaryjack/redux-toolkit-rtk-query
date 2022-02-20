import { ColumnDataModel, RowDataModel, RowType } from '../../../model/tableModel';
import { SortColumns } from '../../TableUtils';

export const HeaderRowMetaModel = (columns: ColumnDataModel[]): RowDataModel => {
    SortColumns(columns);
    const tmpRow: RowDataModel = {
        id: 0,
        isHeader: true,
        dragDropSortOrder: 0,
        label: RowType.Header.toString(),
        columns: columns
    }
    return tmpRow
}
export const DataRowMetaModel = (columns: ColumnDataModel[]): RowDataModel => {
    SortColumns(columns);
    const tmpRow: RowDataModel = {
        id: 0,
        isHeader: false,
        dragDropSortOrder: 0,
        label: RowType.Data.toString(),
        columns: columns
    }
    return tmpRow
}