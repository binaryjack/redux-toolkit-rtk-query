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
    isInEditMode: boolean,
  ) => boolean;
  editAction?: (id: number, edit: boolean) => void;
  deleteAction?: (id: number) => void;
  draggable?: boolean;
  // comming from root table container  in order to set a generic state
  isInEditMode: boolean
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
  isInEditMode
}) => {
  // const { onDrop } = useContext(TableContext)

  const [businessId, setBusinessId] = useState<number>();
  const [editMode, setEditMode] = useState<boolean>(false)


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
    setEditMode(!editMode)
    editAction(businessId, !editMode)
  }
  const deleteHandler = () => {
    if (!businessId || !deleteAction) {
      console.error("unable to delete row ID")
      return
    }
    deleteAction(businessId)
  }

  const dragAllowedHandler = (
    event: React.DragEvent<HTMLDivElement>,
    data: RowDataModel) => {
    if (allowDrop) {
      allowDrop(event, data, editMode)
    }
  }

  const dragStartAllowedHandler = (
    event: React.DragEvent<HTMLDivElement>,
    data: RowDataModel) => {
    if (dragStartHandler && !editMode) {
      dragStartHandler(event, data)
      return
    }
    event.preventDefault()
  }


  return (
    <div
      draggable={draggable}
      onDragStart={
        dragStartHandler ? (event) => dragStartAllowedHandler(event, row) : undefined
      }
      onDrop={dropHandler ? (event) => dropHandler(event, row) : undefined}
      onDragOver={allowDrop ? (event) => dragAllowedHandler(event, row) : undefined}
      className="row-container"
    >
      <RowHeader row={row} />
      <Columns rowIndex={rowIndex} row={row} sortColumn={sortColumn} rowEdit={editMode} isInEditMode={isInEditMode} />
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
