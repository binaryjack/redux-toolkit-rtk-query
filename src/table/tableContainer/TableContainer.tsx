import { FC, useEffect, useState } from 'react';
import { RowDataModel, TableDataModel } from '../../model/tableModel';
import RowsContainer from '../rowsContainer/RowsContainer';
import { tableGetters } from '../TableSelectors';
import { tableSetters, useTableActions } from '../TableSetters';
import './TableContainer.scss';

export type TableContainerProps = {
  data: TableDataModel;
};


const TableContainer: FC<TableContainerProps> = ({ data }) => {

  let [innerData, setInnerData] = useState<TableDataModel | undefined>(undefined);
  const [header, setHeader] = useState<RowDataModel | undefined>(undefined);
  const [mainDataset, setMainDataset] = useState<RowDataModel[] | undefined>(undefined);

  const [rowDragDropSort, sortByColumnAndDirection] = useTableActions(innerData, header, mainDataset)

  const sortColumn = (columnNumber: number, direction: string): void =>
    setInnerData(sortByColumnAndDirection(columnNumber, direction))

  const sortAction = (draggedRowId: number, targetRowId: number): void =>
    setInnerData(rowDragDropSort(draggedRowId, targetRowId));

  const setRows = (): void => data && setInnerData(tableSetters.initialSortRows(data, data.rows));

  useEffect(() => {
    if (!innerData) return
    setHeader(tableGetters.getHeader(innerData));
    setMainDataset(tableGetters.getRows(innerData));
  }, [innerData]);


  useEffect(() => {
    setRows();
  }, []);

  return (
    <div className="table-container">
      {mainDataset && header ? (
        <>
          <RowsContainer
            header={header}
            rows={mainDataset}
            sortAction={sortAction}
            sortColumn={sortColumn}
          />


        </>
      ) : (
        <div>No data</div>
      )}
    </div>
  );
};

export default TableContainer;
