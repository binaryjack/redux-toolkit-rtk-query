import { FC, useState } from 'react';
import { RowDataModel, RowType } from '../../model/tableModel';
import RowCommands from '../rowCommands/RowCommands';
import RowContainer from '../rowContainer/RowContainer';
import './RowsContainer.scss';

export type RowsContainersProps = {
  header: RowDataModel;
  rows: RowDataModel[];
  sortAction: (draggedRowId: number, targetRowId: number) => void;
  sortColumn: (columnNumber: number, direction: string) => void;
  editAction: (id: number, edit: boolean) => void;
  deleteAction: (id: number) => void;

  // comming from root table container  in order to set a generic state
  isInEditMode: boolean
};

const RowsContainers: FC<RowsContainersProps> = ({
  header,
  rows,
  sortAction,
  sortColumn,
  editAction,
  deleteAction,
  isInEditMode
}) => {
  const [draggedRow, setDraggedRow] = useState<RowDataModel | undefined>(
    undefined,
  );

  const dragStartHandler = (
    event: React.DragEvent<HTMLDivElement>,
    data: RowDataModel,
  ): void => {
    event.dataTransfer.setData('draggtedrow', JSON.stringify(data));
    setDraggedRow(data);
  };

  const dropHandler = (
    event: React.DragEvent<HTMLDivElement>,
    target: RowDataModel,
  ): void => {
    const storedData = event.dataTransfer.getData('draggtedrow');

    const source = JSON.parse(storedData) as RowDataModel;

    sortAction(source.id, target.id);

    setDraggedRow(undefined);
    event.dataTransfer.clearData('draggtedrow');
    event.preventDefault();
  };

  // This makes the third box become droppable
  const allowDrop = (
    event: React.DragEvent<HTMLDivElement>,
    data: RowDataModel,
    isInEditMode: boolean,
  ): boolean => {

    if (draggedRow) {
      if (data.label === RowType.Header || draggedRow.id === data.id || isInEditMode) {
        return false;
      }
    }
    event.preventDefault();
    return true;
  };

  return (
    <div className="rows-container">
      {header && rows && (
        <>
          <div className="rows-header">
            {<RowContainer row={header} rowIndex={0} sortColumn={sortColumn} isInEditMode={isInEditMode} />}
          </div>

          {rows.map((row, rowIndex) => (
            <RowContainer
              key={rowIndex}
              row={row}
              rowIndex={rowIndex}
              dragStartHandler={dragStartHandler}
              dropHandler={dropHandler}
              allowDrop={allowDrop}
              editAction={editAction}
              deleteAction={deleteAction}
              draggable
              isInEditMode
            />
          ))}
          <div className="rows-commands">
            <RowCommands />
          </div>
        </>
      )}
    </div>
  );
};

export default RowsContainers;
