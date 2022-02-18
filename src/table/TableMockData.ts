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

const columns4: ColumnDataModel[] = [
    { order: 0, label: "4" },
    { order: 1, label: "Fischer" },
    { order: 2, label: "Michaël" },
    { order: 3, label: "20.09.1986" },
    { order: 4, label: "Juste-Olivier 12" },
    { order: 5, label: "079/6359856" }
]

const columns5: ColumnDataModel[] = [
    { order: 0, label: "5" },
    { order: 1, label: "Fontal" },
    { order: 2, label: "Monica" },
    { order: 3, label: "14.04.1979" },
    { order: 4, label: "Eglantine 96" },
    { order: 5, label: "077/1246565" }
]

const columns6: ColumnDataModel[] = [
    { order: 0, label: "6" },
    { order: 1, label: "Zigler" },
    { order: 2, label: "Alain" },
    { order: 3, label: "04.12.1965" },
    { order: 4, label: "Lavaux 12, av de" },
    { order: 5, label: "079/8546925" }
]


const columns7: ColumnDataModel[] = [
    { order: 0, label: "7" },
    { order: 1, label: "Zappella" },
    { order: 2, label: "Rocane" },
    { order: 3, label: "14.10.1975" },
    { order: 4, label: "Chamonix-la-croix 56" },
    { order: 5, label: "078/3657154" }
]


const columns8: ColumnDataModel[] = [
    { order: 0, label: "8" },
    { order: 1, label: "Gester" },
    { order: 2, label: "Oliver" },
    { order: 3, label: "01.05.1959" },
    { order: 4, label: "Accacias 56" },
    { order: 5, label: "079/652.26.54" }
]

const tableDataMock = TableAdapter("Customers Mock")

if (tableDataMock && tableDataMock.addRow) {

    const headerRow = tableDataMock.addRow("Header")
    const Row1 = tableDataMock.addRow("Row1")
    const Row2 = tableDataMock.addRow("Row2")
    const Row3 = tableDataMock.addRow("Row3")
    const Row4 = tableDataMock.addRow("Row4")
    const Row5 = tableDataMock.addRow("Row5")
    const Row6 = tableDataMock.addRow("Row6")
    const Row7 = tableDataMock.addRow("Row7")
    const Row8 = tableDataMock.addRow("Row8")

    headerRow.addColumns!(columnsDefinition)
    Row1.addColumns!(columns1)
    Row2.addColumns!(columns2)
    Row3.addColumns!(columns3)
    Row4.addColumns!(columns4)
    Row5.addColumns!(columns5)
    Row6.addColumns!(columns6)
    Row7.addColumns!(columns7)
    Row8.addColumns!(columns8)


}

export default tableDataMock





