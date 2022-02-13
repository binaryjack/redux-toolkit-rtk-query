import { FC, useContext } from 'react'
import RowsContainer from '../rowsContainer/RowsContainer'
import { TableContext } from '../tableContext'
import "./TableContainer.scss"

export type TableContainerProps = {

}

const TableContainer: FC<TableContainerProps> = () => {

    const { table } = useContext(TableContext)

    return <div className='table-container'>
        <RowsContainer />
    </div>
}

export default TableContainer