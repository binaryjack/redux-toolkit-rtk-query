import { FC } from 'react';
import { ColumnDataModel } from '../../model/tableModel';
import './Column.scss';

export type ColumnsProps = {
  column: ColumnDataModel;
  sortColumn?: (columnNumber: number, direction: string) => void;
};

const Column: FC<ColumnsProps> = ({ column, sortColumn }) => {
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
        <button id={`btn-sort-up-${column.value}`} onClick={sortUpHandler}>
          asc
        </button>
        <button id={`btn-sort-down-${column.value}`} onClick={sortDownHandler}>
          desc
        </button>
      </div>
    );

  return (
    <div className="column-container">
      {column.value} {renderSortingButtons()}
    </div>
  );
};

export default Column;
