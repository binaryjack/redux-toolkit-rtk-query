import { FC } from 'react';
import { ColumnDataModel } from '../../model/tableModel';
import Cell from '../cell/Cell';
import './Column.scss';

export type ColumnProps = {
  column: ColumnDataModel;
  sortColumn?: (columnNumber: number, direction: string) => void;
  rowEdit: boolean
  isInEditMode: boolean;
};

const Column: FC<ColumnProps> = ({ column, sortColumn, rowEdit, isInEditMode }) => {
  console.log("columns", isInEditMode)
  const sortUpHandler = () => {
    if (!sortColumn) return;
    sortColumn(column.order, 'asc');
  };

  const sortDownHandler = () => {
    if (!sortColumn) return;
    sortColumn(column.order, 'desc');
  };

  const renderSortingButtons = () =>
    sortColumn && (
      <div>
        <button id={`btn-sort-up-${column.value}`} onClick={sortUpHandler} disabled={isInEditMode}>
          asc
        </button>
        <button id={`btn-sort-down-${column.value}`} onClick={sortDownHandler} disabled={isInEditMode}>
          desc
        </button>
      </div>
    );

  return (
    <div className="column-container">
      <Cell column={column} edit={rowEdit} />
      {renderSortingButtons()}
    </div>
  );
};

export default Column;
