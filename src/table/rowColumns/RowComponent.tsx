import { FC } from 'react'
import { TableDataModel } from '../../model/tableModel'
import "./RowComponent.scss"


export type RowComponentProps = {
    data: TableDataModel
}

const RowComponent: FC<RowComponentProps> = ({ data }) => {

    return <>{ }</>
}


export default RowComponentProps