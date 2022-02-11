import { FC } from 'react'
import { RowDataModel } from '../../model/tableModel'
import Column from '../column/Column'
import "./Columns.scss"

export type ColumnsProps = {
    rowIndex: number
    row: RowDataModel
}

const Columns: FC<ColumnsProps> = ({ row, rowIndex }) => {

    return <div className='row-columns'>
        {row.columns.map((column, columnIndex) =>
            <Column key={`${rowIndex}${columnIndex}`} column={column} />
        )}
    </div>
}

export default Columns