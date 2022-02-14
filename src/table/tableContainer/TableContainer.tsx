import { FC } from 'react'
import { TableDataModel } from '../../model/tableModel'
import RowsContainer from '../rowsContainer/RowsContainer'
import "./TableContainer.scss"

export type TableContainerProps = {
    data: TableDataModel
}

const TableContainer: FC<TableContainerProps> = ({ data }) => {



    return <div className='table-container'>
        <RowsContainer rows={data.rows} />
    </div>
}

export default TableContainer