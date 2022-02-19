import { FC, useState } from 'react';
import { RowDataModel } from '../../model/tableModel';
import RowContainer from '../rowContainer/RowContainer';
import './RowsContainer.scss';

export type RowsContainersProps = {
  header: RowDataModel;
  rows: RowDataModel[];
  sortAction: (draggedRowId: number, targetRowId: number) => void;
  sortColumn: (columnNumber: number, direction: string) => void;
};

const RowsContainers: FC<RowsContainersProps> = ({
  header,
  rows,
  sortAction,
  sortColumn,
}) => {
  const [draggedRow, setDraggedRow] = useState<RowDataModel | undefined>(
    undefined,
  );

  const dragStartHandler = (
    event: React.DragEvent<HTMLDivElement>,
    data: RowDataModel,
  ): void => {
    event.dataTransfer.setData('draggtedrow', JSON.stringify(data));

    //console.log('dragStartHandler  event', event);

    setDraggedRow(data);
  };

  const dropHandler = (
    event: React.DragEvent<HTMLDivElement>,
    target: RowDataModel,
  ): void => {
    const storedData = event.dataTransfer.getData('draggtedrow');

    const source = JSON.parse(storedData) as RowDataModel;

    //console.log('dropHandler  event  target  data1', event, target, source);

    sortAction(source.id, target.id);

    setDraggedRow(undefined);
    event.dataTransfer.clearData('draggtedrow');
    event.preventDefault();
  };

  // This makes the third box become droppable
  const allowDrop = (
    event: React.DragEvent<HTMLDivElement>,
    data: RowDataModel,
  ): boolean => {
    // console.log('allowDrop', draggedRow);
    if (draggedRow) {
      if (data.label === 'Header' || draggedRow.id === data.id) {
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
            {<RowContainer row={header} rowIndex={0} sortColumn={sortColumn} />}
          </div>
          {rows.map((row, rowIndex) => (
            <RowContainer
              key={rowIndex}
              row={row}
              rowIndex={rowIndex}
              dragStartHandler={dragStartHandler}
              dropHandler={dropHandler}
              allowDrop={allowDrop}
              draggable
            />
          ))}
        </>
      )}
    </div>
  );
};

export default RowsContainers;
