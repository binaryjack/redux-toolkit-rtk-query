import { FC, useContext } from 'react'
import { RowDataModel } from '../../model/tableModel'
import Columns from '../columns/Columns'
import RowHeader from '../rowHeader/RowHeader'
import { TableContext } from '../tableContext'
import "./RowContainer.scss"

export type RowContainerProps = {
    rowIndex: number
    row: RowDataModel
}

const RowContainer: FC<RowContainerProps> = ({ rowIndex, row }) => {

    const { onDrop } = useContext(TableContext)




    return <div draggable onDrop={(obj) => onDrop(obj.currentTarget, row.id)} className='row-container'>
        <RowHeader row={row} />
        <Columns rowIndex={rowIndex} row={row} />

    </div>


}


export default RowContainer