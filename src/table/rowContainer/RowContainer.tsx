import {
  FC, useEffect, useState
} from 'react';
import { RowDataModel } from '../../model/tableModel';
import ColumnCommands from '../columnCommands/ColumnCommands';
import Columns from '../columns/Columns';
import RowHeader from '../rowHeader/RowHeader';
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
  editAction?: (id: number) => void;
  deleteAction?: (id: number) => void;
  draggable?: boolean;
};

const RowContainer: FC<RowContainerProps> = ({
  rowIndex,
  row,
  sortColumn,
  dropHandler,
  dragStartHandler,
  allowDrop,
  editAction,
  deleteAction,
  draggable,
}) => {
  // const { onDrop } = useContext(TableContext)

  const [businessId, setBusinessId] = useState<number>();

  useEffect(() => {
    if (!row.columns[0] || !row.columns[0].value) {
      console.error("unable to find row ID")
      return
    }
    setBusinessId(Number.parseInt(row.columns[0].value))
  }, [row])

  const editHandler = () => {
    if (!businessId || !editAction) {
      console.error("unable to edit row ID")
      return
    }
    editAction(businessId)
  }
  const deleteHandler = () => {
    if (!businessId || !deleteAction) {
      console.error("unable to delete row ID")
      return
    }
    deleteAction(businessId)
  }


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
      <div className="column-command">
        {!row.isHeader && editAction && deleteAction ?
          <ColumnCommands editAction={() => editHandler()} deleteAction={() => deleteHandler()} />
          : <div >Commands</div>
        }
      </div>
    </div>
  );
};

export default RowContainer;
