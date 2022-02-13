import { FC, useContext } from 'react'
import RowContainer from '../rowContainer/RowContainer'
import { TableContext } from '../tableContext'
import "./RowsContainer.scss"


export type RowsContainersProps = {

}

const RowsContainers: FC<RowsContainersProps> = () => {

    const { table } = useContext(TableContext)

    return <div className='rows-container'>
        {table.rows.map((row, rowIndex) =>
            <RowContainer key={rowIndex} row={row} rowIndex={rowIndex} />
        )}
    </div>
}


export default RowsContainers