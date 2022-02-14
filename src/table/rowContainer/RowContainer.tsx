import {
  DetailedHTMLProps,
  DragEventHandler,
  FC,
  HTMLAttributes,
  useContext,
} from 'react';
import { RowDataModel } from '../../model/tableModel';
import Columns from '../columns/Columns';
import RowHeader from '../rowHeader/RowHeader';
import { TableContext } from '../tableContext';
import './RowContainer.scss';

export type RowContainerProps = {
  rowIndex: number;
  row: RowDataModel;
  sortColumn?: (columnNumber: number, direction: string) => void;
  dropHandler?: (
    event: React.DragEvent<HTMLDivElement>,
    data: RowDataModel,
  ) => void;
  dragStartHandler?: (
    event: React.DragEvent<HTMLDivElement>,
    data: RowDataModel,
  ) => void;
  allowDrop?: (
    event: React.DragEvent<HTMLDivElement>,
    data: RowDataModel,
  ) => boolean;
  draggable?: boolean;
};

const RowContainer: FC<RowContainerProps> = ({
  rowIndex,
  row,
  sortColumn,
  dropHandler,
  dragStartHandler,
  allowDrop,
  draggable,
}) => {
  // const { onDrop } = useContext(TableContext)

  return (
    <div
      draggable={draggable}
      onDragStart={
        dragStartHandler ? (event) => dragStartHandler(event, row) : undefined
      }
      onDrop={dropHandler ? (event) => dropHandler(event, row) : undefined}
      onDragOver={allowDrop ? (event) => allowDrop(event, row) : undefined}
      className="row-container"
    >
      <RowHeader row={row} />
      <Columns rowIndex={rowIndex} row={row} sortColumn={sortColumn} />
    </div>
  );
};

export default RowContainer;
