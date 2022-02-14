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
        <button id={`btn-sort-up-${column.label}`} onClick={sortUpHandler}>
          asc
        </button>
        <button id={`btn-sort-down-${column.label}`} onClick={sortDownHandler}>
          desc
        </button>
      </div>
    );

  return (
    <div className="column-container">
      {column.label} {renderSortingButtons()}
    </div>
  );
};

export default Column;
