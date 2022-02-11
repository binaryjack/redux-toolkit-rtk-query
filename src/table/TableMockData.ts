import { ColumnDataModel } from '../model/tableModel'
import { TableAdapter } from './TableUtils'

const columnsDefinition: ColumnDataModel[] = [
    { order: 0, label: "id" },
    { order: 1, label: "last name" },
    { order: 2, label: "first name" },
    { order: 3, label: "birth date" },
    { order: 4, label: "address" },
    { order: 5, label: "phone number" }
]


const columns1: ColumnDataModel[] = [
    { order: 0, label: "1" },
    { order: 1, label: "Piana" },
    { order: 2, label: "Tadeo" },
    { order: 3, label: "24.10.1977" },
    { order: 4, label: "Cèdres 12" },
    { order: 5, label: "076/3751795" }
]

const columns2: ColumnDataModel[] = [
    { order: 0, label: "2" },
    { order: 1, label: "Fassler" },
    { order: 2, label: "Caroline" },
    { order: 3, label: "16.11.1996" },
    { order: 4, label: "Cèdres 12" },
    { order: 5, label: "079/4064569" }
]

const columns3: ColumnDataModel[] = [
    { order: 0, label: "3" },
    { order: 1, label: "Gonçalves" },
    { order: 2, label: "Féliciane" },
    { order: 3, label: "10.05.1985" },
    { order: 4, label: "Les Accacias 22" },
    { order: 5, label: "078/5252633" }
]



const tableDataMock = TableAdapter("Customers Mock")

if (tableDataMock && tableDataMock.addRow) {

    const headerRow = tableDataMock.addRow("Header")
    const Row1 = tableDataMock.addRow("Row1")
    const Row2 = tableDataMock.addRow("Row2")
    const Row3 = tableDataMock.addRow("Row3")

    headerRow.addColumns!(columnsDefinition)
    Row1.addColumns!(columns1)
    Row2.addColumns!(columns2)
    Row3.addColumns!(columns3)


}

export default tableDataMock





