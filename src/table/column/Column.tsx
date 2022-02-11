import { FC } from 'react'
import { ColumnDataModel } from '../../model/tableModel'
import "./Column.scss"

export type ColumnsProps = {
    column: ColumnDataModel
}

const Column: FC<ColumnsProps> = ({ column }) => {

    return <div className="column-container">
        {column.label}
    </div>
}


export default Column