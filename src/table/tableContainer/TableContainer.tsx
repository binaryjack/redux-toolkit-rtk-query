import { FC, useEffect, useState } from 'react';
import { RowDataModel, TableDataModel } from '../../model/tableModel';
import RowsContainer from '../rowsContainer/RowsContainer';
import './TableContainer.scss';

export type TableContainerProps = {
  data: TableDataModel;
};

const compareIntegers = (a: RowDataModel, b: RowDataModel) => {
  if (a.id < b.id) {
    return 1;
  }
  if (a.id > b.id) {
    return -1;
  }
  return 0;
};


const isText = (value: any) => typeof value === 'string'
const isNumber = (value: any) => typeof value === 'number' || isText(value) && /^[0-9\.\,]+$/.test(value)
const isBoolean = (value: any) => typeof value === 'boolean'
const isBigInt = (value: any) => typeof value === 'bigint'
const isHour = (value: any) => isText(value) && /^([0-2]{1}[0-9]{1})\:([0-5]{1}[0-9]{1})\:?([0-5]{1}[0-9]{1})?$/.test(value)
const isDate = (value: any) => isText(value) && /^([0-3]{1}[0-9]{3})\-?\\?\.?([0-1]{1}|00|01|02|03|04|05|06|07|08|09|10|11|12)\-?\\?\.?([0-3]{1}[0-9]{1})?$/.test(value)







const compareNumberColumn = (
  a: RowDataModel,
  b: RowDataModel,
  columnNumber: number,
  direction: string
): number => {
  if (!a || !b) return 0;

  if (isNumber(a.columns[columnNumber].label) && isNumber(b.columns[columnNumber].label)) {
    const aValue = +a.columns[columnNumber].label!;
    const bValue = +b.columns[columnNumber].label!;
    if (!aValue || !bValue) return 0;
    return direction === 'asc' ? aValue - bValue : bValue - aValue;
  }
  if (isText(a.columns[columnNumber].label) && isText(b.columns[columnNumber].label)) {
    let aValue = a.columns[columnNumber].label!;
    let bValue = b.columns[columnNumber].label!;
    aValue = (!aValue ? "a" : aValue).toLowerCase();
    bValue = (!bValue ? "a" : bValue).toLowerCase();

    return direction === 'asc' && aValue < bValue ? -1 : aValue < bValue ? 1 : 0;
  }
  if (isBoolean(a.columns[columnNumber].label) && isBoolean(b.columns[columnNumber].label)) {
    let aValue = a.columns[columnNumber].label! === 'true' ? true : false;
    let bValue = b.columns[columnNumber].label! === 'true' ? true : false;
    return direction === 'asc' && aValue < bValue ? -1 : 1;
  }

  if (isDate(a.columns[columnNumber].label) && isDate(b.columns[columnNumber].label)) {
    let aValue = new Date(a.columns[columnNumber].label!)
    let bValue = new Date(b.columns[columnNumber].label!)
    return direction === 'asc' && aValue < bValue ? -1 : 1;
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


  console.log("isText test", isText("test"))
  console.log("isNumber 1234", isNumber(123))
  console.log("isHour 02:05", isHour('02:05'))
  console.log("isHour 23:59:59", isHour('23:59:59'))
  console.log("isHour 23:59:79", isHour('23:59:75'))
  console.log("isDate 2021-12-24", isDate('2021-12-24'))
  console.log("isDate 2021-12-24", isDate('2021-10-02'))



  const sortColumn = (columnNumber: number, direction: string): void => {
    console.log('sort Column', columnNumber, direction);

    const newTable = {
      ...data,
      rows: [...data.rows].sort((a, b) =>
        compareNumberColumn(a, b, columnNumber, direction),
      ),
    };

    setInnerData(newTable);

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

    setInnerData(newTable);




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
