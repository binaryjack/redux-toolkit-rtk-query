import {
  CellDataModel,
  ColumnDataModel,
  RowDataModel,
  TableDataModel
} from '../model/tableModel';

export const TableAdapter = (name: string): TableDataModel => {
  const tableTemp = {
    id: 0,
    uniqueKey: '1',
    name: name,
    rows: [],

  } as TableDataModel;


  tableTemp.newRow = NewRow(tableTemp);
  tableTemp.addRow = AddRow(tableTemp);
  return tableTemp;
};

export const ColumnDefinition = (label: string): ColumnDataModel => {
  return { order: 0, label: label, active: true };
};

export const NewRow =
  (table: TableDataModel) =>
    (label?: string): RowDataModel => {
      const nextRowId: number =
        table.rows && table.rows.length === 0
          ? 0
          : table.rows.length > 0
            ? table.rows.length + 1
            : 0;
      const newRow = {
        id: nextRowId,
        label,
        columns: [],
        dragDropSortOrder: 0,
        dataType: '',
        isHeader: false
        // addColumn: Object,
        // addColumnModel: Object,
        // addColumns: Object

      } as RowDataModel;

      newRow.addColumn = AddColumn(newRow);
      newRow.addColumnModel = AddColumnModel(newRow);
      newRow.addColumns = AddColumns(newRow);

      table.rows.push(newRow);
      return newRow;
    };

export const AddColumnModel =
  (row: RowDataModel) =>
    (column?: ColumnDataModel): ColumnDataModel | undefined => {
      if (!column) {
        return undefined;
      }
      row.columns.push(column);
      return column;
    };

export const AddColumn =
  (row: RowDataModel) =>
    (label?: string, sortable?: boolean, active?: boolean): ColumnDataModel => {
      const nextId: number = row.columns ? row.columns.length + 1 : 0;
      const newColumn = {
        order: nextId,
        label,
        sortable,
        active,
      } as ColumnDataModel;
      row.columns.push(newColumn);

      return newColumn;
    };

export const AddColumns =
  (row: RowDataModel) =>
    (columns?: ColumnDataModel[]): ColumnDataModel[] | undefined => {
      if (!row.addColumnModel || !columns) {
        return [] as ColumnDataModel[];
      }
      for (let i = 0; i < columns.length; i++) {
        row.addColumnModel(columns[i]);
      }
      return row.columns;
    };

export const AddCell =
  (column: ColumnDataModel) =>
    (
      value: string | number | undefined | null,
      format: string,
      active?: boolean,
    ): CellDataModel => {
      const newCell = { value, format, active } as CellDataModel;
      column.cell = newCell;
      return newCell;
    };

export const CreateRow = (label: string, columns?: ColumnDataModel[]): RowDataModel => {
  const newRow = { id: -1, label, columns: columns } as RowDataModel;
  newRow.addColumn = AddColumn(newRow);
  newRow.addColumnModel = AddColumnModel(newRow);
  newRow.addColumns = AddColumns(newRow);
  return newRow
}




export const AddRow =
  (table: TableDataModel) =>
    (row?: RowDataModel): void => {

      if (!row) return;
      row.id =
        table.rows && table.rows.length === 0
          ? 0
          : table.rows.length > 0
            ? table.rows.length + 1
            : 0;
      table.rows.push(row);
    };





