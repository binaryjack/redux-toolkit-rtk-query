import { FC } from 'react'
import { TableDataModel } from '../model/tableModel'
import "./TableComponent.scss"
import TableContainer from './tableContainer/TableContainer'
import { TableContext } from './tableContext'

export type TableDataProps = {
    data: TableDataModel
}

const TableComponent: FC<TableDataProps> = ({ data }) => {

    const { id, uniqueKey, name } = data


    return <div className='table-component'>
        <span className='table-id'>{id}</span>
        <span className='table-unique-key'>{uniqueKey}</span>
        <span className='table-name'>{name}</span>

        <TableContext.Provider value={{ table: data }} >
            <TableContainer />
        </TableContext.Provider>
    </div>

}


export default TableComponent