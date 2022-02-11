import { FC } from 'react'
import { RowDataModel } from '../../model/tableModel'
import "./RowHeader.scss"

export type RowHeaderProps = {
    row: RowDataModel
}

const RowHeader: FC<RowHeaderProps> = ({ row }) => {

    return <div className='row-header'>
        <span>{row.id}    </span>
        <span>{row.label}    </span>
    </div>
}


export default RowHeader