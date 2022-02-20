import { RowDataModel, TableDataModel } from '../model/tableModel';
import { comparers, sortColumnAction } from '../utils/comparers';
import { tracing } from '../utils/debug';

const dragDropSortAction =
    (table: TableDataModel, sourceRowId: number, targetRowId: number): TableDataModel | undefined => {

        if (!sourceRowId || !targetRowId) return undefined

        const source = table.rows.find((o) => o.id === sourceRowId);
        const target = table.rows.find((o) => o.id === targetRowId);

        if (!source || !target) return undefined

        source.id = targetRowId;
        target.id = sourceRowId;

        source.dragDropSortOrder = targetRowId;
        target.dragDropSortOrder = sourceRowId;

        return {
            ...table,
            rows: [
                source,
                target,
                ...table.rows.filter((o) => o.id !== source.id && o.id !== target.id),
            ].sort((a, b) => comparers.ascNumber(a.dragDropSortOrder!, b.dragDropSortOrder!)),
        };
    }

const sortColumn = (table: TableDataModel, header: RowDataModel, mainDataset: RowDataModel[], columnNumber: number, direction: string): TableDataModel | undefined => {
    console.log('sort Column', columnNumber, direction);
    if (!mainDataset || !header) return

    const sortedRows = [...mainDataset].sort((a, b) => sortColumnAction(a, b, columnNumber, direction))
    const newTable: TableDataModel = {
        ...table,
        rows: [header, ...sortedRows]
    }

    defineDragDropSortOrder(newTable)

    console.log(tracing(newTable.rows));

    return newTable
};

const initialSortRows = (table: TableDataModel, rows: RowDataModel[]): TableDataModel | undefined => {
    const newTable: TableDataModel = {
        ...table,
        rows: rows.sort((a, b) => comparers.ascNumber(a.id, b.id)),
    };
    defineDragDropSortOrder(newTable)
    console.log(tracing(newTable.rows));
    return newTable
};


const defineDragDropSortOrder = (table: TableDataModel) => {
    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].dragDropSortOrder = i
    }
}

export const tableSetters = {
    dragDropSortAction,
    sortColumn,
    defineDragDropSortOrder,
    initialSortRows
}


// Custom Hooks

export const useTableActions = (
    table: TableDataModel | undefined,
    header: RowDataModel | undefined,
    mainDataset: RowDataModel[] | undefined
):
    [
        (sourceRowId: number, targetRowId: number) => TableDataModel | undefined,
        (columnNumber: number, direction: string) => TableDataModel | undefined

    ] => {

    const rowDragDropSort = (sourceRowId: number, targetRowId: number): TableDataModel | undefined => {
        if (!table) return
        return tableSetters.dragDropSortAction(table, sourceRowId, targetRowId)

    }

    const sortByColumnAndDirection = (columnNumber: number, direction: string): TableDataModel | undefined => {
        if (!table || !header || !mainDataset) return;
        return tableSetters.sortColumn(
            table,
            header,
            mainDataset,
            columnNumber,
            direction)
    }

    return [rowDragDropSort, sortByColumnAndDirection]
}

