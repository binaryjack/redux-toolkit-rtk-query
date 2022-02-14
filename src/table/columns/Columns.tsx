import { FC } from 'react';
import { RowDataModel } from '../../model/tableModel';
import Column from '../column/Column';
import './Columns.scss';

export type ColumnsProps = {
  rowIndex: number;
  row: RowDataModel;
  sortColumn?: (columnNumber: number, direction: string) => void;
};

const Columns: FC<ColumnsProps> = ({ row, rowIndex, sortColumn }) => {
  return (
    <div className="row-columns">
      {row.columns.map((column, columnIndex) => (
        <Column
          key={`${rowIndex}${columnIndex}`}
          column={column}
          sortColumn={sortColumn}
        />
      ))}
    </div>
  );
};

export default Columns;
