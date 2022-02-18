import { FC, useEffect, useState } from 'react';
import { RowDataModel, TableDataModel } from '../../model/tableModel';
import { compareIntegers, compareNumberColumn } from '../../utils/comparers';
import RowsContainer from '../rowsContainer/RowsContainer';
import './TableContainer.scss';

export type TableContainerProps = {
  data: TableDataModel;
};

const tracing = (rows: RowDataModel[]) => {
  let trace = '';

  for (let i: number = 1; i < rows.length; i++) {
    trace += `source: ${rows[i].id} ${rows[i].columns[0].label} ${rows[i].columns[1].label}  ${rows[i].columns[2].label} ${rows[i].columns[3].label}\r\n `;
  }
  console.log(trace);
};

const TableContainer: FC<TableContainerProps> = ({ data }) => {

  const [innerData, setInnerData] = useState<TableDataModel | undefined>(undefined);
  const [header, setHeader] = useState<RowDataModel | undefined>(undefined);
  const [mainDataset, setMainDataset] = useState<RowDataModel[] | undefined>(undefined);

  const sortColumn = (columnNumber: number, direction: string): void => {
    console.log('sort Column', columnNumber, direction);
    if (!mainDataset || !header) return

    const sortedRows = [...mainDataset].sort((a, b) => compareNumberColumn(a, b, columnNumber, direction))
    const newTable: TableDataModel = {
      ...data,
      rows: [header, ...sortedRows]
    }

    setInnerData(newTable);

    console.log(tracing(newTable.rows));
  };

  const sortAction = (draggedRowId: number, targetRowId: number) => {
    if (!innerData) return;
    const source = innerData.rows.find((o) => o.id === draggedRowId);
    const target = innerData.rows.find((o) => o.id === targetRowId);

    if (!source || !target) return;

    source.id = targetRowId;
    target.id = draggedRowId;

    const newTable = {
      ...data,
      rows: [
        source,
        target,
        ...data.rows.filter((o) => o.id !== source.id && o.id !== target.id),
      ].sort(compareIntegers),
    };

    setInnerData(newTable);
  };

  const sortRows = () => {
    if (!innerData) return;
    const newTable: TableDataModel = {
      ...data,
      rows: innerData.rows.sort(),
    };
    console.log(newTable.rows);
    setInnerData(newTable);
  };

  const setRows = () => setInnerData(data);


  useEffect(() => {
    if (!innerData) return
    setHeader(innerData.rows.find((o) => o.label === 'Header'));
    setMainDataset(innerData.rows.filter((o) => o.label !== 'Header'));
  }, [innerData]);

  useEffect(() => {
    setRows();
    sortRows();
  }, []);

  return (
    <div className="table-container">
      {mainDataset && header ? (
        <>
          <RowsContainer
            header={header}
            rows={mainDataset}
            sortRows={sortRows}
            sortAction={sortAction}
            sortColumn={sortColumn}
          />

          <div className={"result"}>
            {JSON.stringify(innerData)}
          </div>
        </>
      ) : (
        <div>No data</div>
      )}
    </div>
  );
};

export default TableContainer;
