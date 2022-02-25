import { FC, useState } from 'react';
import { ColumnDataModel } from '../../model/tableModel';
import './Cell.scss';

export type CellsProps = {
  id?: string
  column: ColumnDataModel;
  edit: boolean;
  update?: (column: ColumnDataModel, newValue?: any) => void;
};

const Cell: FC<CellsProps> = ({ id, column, update, edit }): JSX.Element => {

  const [updatedValue, setUpdatedValue] = useState<any | undefined>(undefined)

  const updateHandler = (newValue: any) => {
    setUpdatedValue(newValue)
    console.log(updatedValue)
  };

  return (
    <div id={"id"} className="cell-container">
      {edit && column.editable && column.cell ?
        <>
          <input data-testid={`${id}-test-edit`} className='cell-value-edit' defaultValue={column.value} onChange={(e) => updateHandler(e.currentTarget.value)} />
          {column.cell.errors &&
            <div className='cell-validation-errors'>
              <ul>
                {column.cell.errors.map(error => {
                  return <li>{error.code} {error.text}</li>
                })}
              </ul>
            </div>
          }
        </> :
        <div data-testid={`${id}-test`} className='cell-value'>{column.value}</div>
      }
    </div>
  );
};

export default Cell;
