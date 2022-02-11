import { FC } from 'react'
import { RowDataModel } from '../../model/tableModel'
import Columns from '../columns/Columns'
import RowHeader from '../rowHeader/RowHeader'
import "./RowContainer.scss"

export type RowContainerProps = {
    rowIndex: number
    row: RowDataModel
}

const RowContainer: FC<RowContainerProps> = ({ rowIndex, row }) => {

    return <div className='row-container'>
        <RowHeader row={row} />
        <Columns rowIndex={rowIndex} row={row} />

    </div>


}


export default RowContainer