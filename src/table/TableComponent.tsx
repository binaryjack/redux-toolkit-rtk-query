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

    const selecRowId = (id: number) => {
        console.log(`Row: ${id}`)
    }
    const onDrop = (event: EventTarget, targetId: number) => {
        console.log(`drag drop: ${event}  => ${targetId}`)
    }




    return <div className='table-component'>
        <span className='table-id'>{id}</span>
        <span className='table-unique-key'>{uniqueKey}</span>
        <span className='table-name'>{name}</span>

        <TableContext.Provider value={{ selectRow: selecRowId, onDrop: onDrop }} >
            <TableContainer data={data} />
        </TableContext.Provider>
    </div>

}


export default TableComponent