import { FC } from 'react'
import { RowDataModel } from '../../model/tableModel'
import RowContainer from '../rowContainer/RowContainer'
import "./RowsContainer.scss"


export type RowsContainersProps = {
    rows: RowDataModel[]
}

const RowsContainers: FC<RowsContainersProps> = ({ rows }) => {


    return <div className='rows-container'>
        {rows.map((row, rowIndex) =>
            <RowContainer key={rowIndex} row={row} rowIndex={rowIndex} />
        )}
    </div>
}


export default RowsContainers