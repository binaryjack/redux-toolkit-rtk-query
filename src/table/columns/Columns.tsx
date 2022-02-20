import { FC } from 'react';
import { RowDataModel } from '../../model/tableModel';
import Column from '../column/Column';
import './Columns.scss';

export type ColumnsProps = {
  rowIndex: number;
  row: RowDataModel;
  sortColumn?: (columnNumber: number, direction: string) => void;
  rowEdit: boolean
  isInEditMode: boolean
};

const Columns: FC<ColumnsProps> = ({ row, rowIndex, sortColumn, rowEdit, isInEditMode }) => {
  return (
    <div className="row-columns">
      {row.columns.map((column, columnIndex) => (
        <Column
          key={`${rowIndex}${columnIndex}`}
          column={column}
          sortColumn={sortColumn}
          rowEdit={rowEdit}
          isInEditMode={isInEditMode}
        />
      ))}
    </div>
  );
};

export default Columns;
