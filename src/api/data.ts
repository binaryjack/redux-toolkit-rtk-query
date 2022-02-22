import { DataTypes } from '../model/tableModel';
import { DataApi, DataRow } from '../table/adapter/columns/ColumnDataAdapter';

export const dataFromApi: DataApi<DataRow> = {
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
        {
            label: 'first name',
            code: 'firstName',
            dataType: DataTypes.Text,
            allowNull: false,
            sortable: true,
            editable: true
        },
        {
            label: 'birth date',
            code: 'birthDate',
            dataType: DataTypes.Text,
            allowNull: false,
            sortable: true,
            editable: true
        },
        {
            label: 'address',
            code: 'address',
            dataType: DataTypes.Text,
            allowNull: false,
            sortable: true,
            editable: true
        },
        {
            label: 'phone number',
            code: 'phoneNumber',
            dataType: DataTypes.Text,
            allowNull: false,
            sortable: true,
            editable: true
        },
        {
            label: 'sort order',
            code: 'sortOrder',
            dataType: DataTypes.Text,
            allowNull: false,
            sortable: true,
            editable: true
        }],
    data: [
        { id: 1, lastName: "Piana", firstName: "Tadeo", birthDate: "24.10.1977", address: "Cèdres 12", phoneNumber: "076/3751795", sortOrder: 0 },
        { id: 2, lastName: "Fassler", firstName: "Caroline", birthDate: "16.11.1996", address: "Cèdres 12", phoneNumber: "079/4064569", sortOrder: 0 },
        { id: 3, lastName: "Gonçalves", firstName: "Féliciane", birthDate: "10.05.1985", address: "Les Accacias 22", phoneNumber: "078/5252633", sortOrder: 0 },
        { id: 4, lastName: "Fischer", firstName: "Michaël", birthDate: "20.09.1986", address: "Juste-Olivier 12", phoneNumber: "079/6359856", sortOrder: 0 },
        { id: 5, lastName: "Fontal", firstName: "Monica", birthDate: "14.04.1979", address: "Eglantine 96", phoneNumber: "077/1246565", sortOrder: 0 },
        { id: 6, lastName: "Zigler", firstName: "Alain", birthDate: "04.12.1965", address: "Lavaux 12, av de", phoneNumber: "079/8546925", sortOrder: 0 },
        { id: 7, lastName: "Zappella", firstName: "Rocane", birthDate: "14.10.1975", address: "Chamonix-la-croix 56", phoneNumber: "078/3657154", sortOrder: 0 },
        { id: 8, lastName: "Gester", firstName: "Oliver", birthDate: "01.05.1959", address: "Accacias 56", phoneNumber: "079/652.26.54", sortOrder: 0 }
    ]
}