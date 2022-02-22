import { DataTypes } from '../model/tableModel';
import { DataApi } from '../table/adapter/columns/ColumnDataAdapter';


export type Data = {
    id: number
    lastName: string
}


export const dataFromApi: DataApi<Data> = {
    columns: [
        {
            label: 'id',
            code: 'id',
            dataType: DataTypes.Int,
            allowNull: false,
            sortable: true,
            editable: false
        },
        {
            label: 'last name',
            code: 'lastName',
            dataType: DataTypes.Text,
            allowNull: false,
            sortable: true,
            editable: true
        },
    ],
    data: [
        { id: 1, lastName: "Piana" },
        { id: 2, lastName: "Fassler" },
        { id: 3, lastName: "Gonçalves" },
        { id: 4, lastName: "Fischer" },
    ]
}