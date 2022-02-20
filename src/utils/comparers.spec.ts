import { ColumnDataModel } from '../model/tableModel';
import { TableAdapter } from '../table/TableUtils';
import { TableDataModel } from './../model/tableModel';

const createTestMock = (): TableDataModel => {

    const c1: ColumnDataModel[] = [{ order: 0, value: "1" }]
    const c2: ColumnDataModel[] = [{ order: 0, value: "2" }]
    const c3: ColumnDataModel[] = [{ order: 0, value: "3" }]
    const c4: ColumnDataModel[] = [{ order: 0, value: "4" }]

    const tableDataMock = TableAdapter("Numbers")

    if (tableDataMock && tableDataMock.newRow) {

        const Row1 = tableDataMock.newRow("Row1")
        const Row2 = tableDataMock.newRow("Row2")
        const Row3 = tableDataMock.newRow("Row3")
        const Row4 = tableDataMock.newRow("Row4")

        Row1.addColumns!(c1)
        Row2.addColumns!(c2)
        Row3.addColumns!(c3)
        Row4.addColumns!(c4)
    }
    return tableDataMock
}

test('UTILS COMPARERS', () => {
    const testCases = {
        numbers: [],
        text: [],
        dates: [],
        complexObject: [],


    }



    // testCases.numbers.sort((a, b) => compareNumberColumn(a, b, direction))


    // expect(compareNumberColumn(testCases.text)).toBe(true);
    // expect(validators.isNumber(testCases.text)).toBe(false);


});
