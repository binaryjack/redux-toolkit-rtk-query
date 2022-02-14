import { FC, useEffect, useState } from 'react';
import { RowDataModel, TableDataModel } from '../../model/tableModel';
import RowsContainer from '../rowsContainer/RowsContainer';
import './TableContainer.scss';

export type TableContainerProps = {
  data: TableDataModel;
};

var compareIntegers = (a: RowDataModel, b: RowDataModel) => {
  if (a.id < b.id) {
    return 1;
  }
  if (a.id > b.id) {
    return -1;
  }
  return 0;
};

var compareNumberColumn = (
  a: RowDataModel,
  b: RowDataModel,
  columnNumber: number,
): 1 | 0 | -1 => {
  if (!a || !b) return 0;

  if (a.id === 0 || b.id === 0) return 0;

  const aValue = +a.columns[columnNumber].label!;
  const bValue = +b.columns[columnNumber].label!;
  if (!aValue || !bValue) return 0;

  if (aValue < bValue) {
    return -1;
  }
  if (aValue > bValue) {
    return 1;
  }
  return 0;
};

const tracing = (table: TableDataModel) => {
  let trace = '';

  for (let i: number = 1; i < table.rows.length; i++) {
    trace += `source: ${table.rows[i].id} ${table.rows[i].columns[0].label} ${table.rows[i].columns[1].label}  ${table.rows[i].columns[2].label} ${table.rows[i].columns[3].label}\r\n `;
  }

  console.log(trace);
};

const TableContainer: FC<TableContainerProps> = ({ data }) => {
  const [innerData, setInnerData] = useState<TableDataModel | undefined>(
    undefined,
  );

  const sortColumn = (columnNumber: number, direction: string): void => {
    console.log('sort Column', columnNumber, direction);

    const newTable = {
      ...data,
      rows: [...data.rows].sort((a, b) =>
        compareNumberColumn(a, b, columnNumber),
      ),
    };

    setInnerData((_store) => (_store = newTable));

    console.log(tracing(newTable));
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

    setInnerData((_store) => (_store = newTable));

    const newSource = newTable.rows[draggedRowId - 1];
    const newTarget = newTable.rows[targetRowId - 1];

    // const trace =
    //   `source: ${source.id} ${source.columns[2].label} \r\n ` +
    //   `target: ${target.id} ${target.columns[2].label} \r\n ` +
    //   `--------------------------------------------------------  \r\n` +
    //   `new source: ${newSource.id} ${newSource.columns[2].label} \r\n ` +
    //   `new target: ${newTarget.id} ${newTarget.columns[2].label} \r\n `;
  };

  const sortRows = () => {
    if (!innerData) return;
    const newTable: TableDataModel = {
      ...data,
      rows: innerData.rows.sort(),
    };
    console.log(newTable.rows);
    setInnerData((_store) => (_store = newTable));
  };

  const setRows = () => setInnerData(data);

  useEffect(() => {
    setRows();
    sortRows();
  }, []);

  return (
    <div className="table-container">
      {innerData ? (
        <RowsContainer
          rows={innerData.rows}
          sortRows={sortRows}
          sortAction={sortAction}
          sortColumn={sortColumn}
        />
      ) : (
        <div>No data</div>
      )}
    </div>
  );
};

export default TableContainer;
