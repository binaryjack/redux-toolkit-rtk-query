import { CellDataModel, ColumnDataModel } from '../../../model/tableModel';
import { patterns, validators } from '../../../utils/validators';
import { DataTypes } from './../../../model/tableModel';

const HeadColumn = (value: any, editable: boolean = false, sortable: boolean = true): ColumnDataModel => {
    const col: ColumnDataModel = {
        order: 0,
        value: value,
        active: true,
        sortable,
        editable
    }
    return col
}
const IntColumn = (value: any, editable: boolean = true, sortable: boolean = true): ColumnDataModel => {
    if (value && !validators.isNumber(value)) {
        console.error(`the value: ${value} is not of type Number`);
        return {} as ColumnDataModel;
    }

    let cell = undefined
    if (editable) {
        cell = { value: value, format: patterns.number, active: true } as CellDataModel
    }

    const col: ColumnDataModel = {
        order: 0,
        value: value,
        dataType: DataTypes.Int,
        active: true,
        editable,
        sortable,
        cell: editable ? cell : undefined
    }
    return col
}
const BigIntColumn = (value: any, editable: boolean = true, sortable: boolean = true): ColumnDataModel => {
    if (value && !validators.isBigInt(value)) {
        console.error(`the value: ${value} is not of type Big Number`);
        return {} as ColumnDataModel;
    }

    let cell = undefined
    if (editable) {
        cell = { value: value, format: patterns.bigNumbers, active: true } as CellDataModel
    }

    const col: ColumnDataModel = {
        order: 0,
        value: value,
        dataType: DataTypes.BigInt,
        active: true,
        editable,
        sortable,
        cell: editable ? cell : undefined
    }
    return col
}
const TextColumn = (value: any, editable: boolean = true, sortable: boolean = true): ColumnDataModel => {
    if (value && !validators.isText(value)) {
        console.error(`the value: ${value} is not of type text`);
        return {} as ColumnDataModel;
    }

    let cell = undefined
    if (editable) {
        cell = { value: value, active: true } as CellDataModel
    }

    const col: ColumnDataModel = {
        order: 0,
        value: value,
        dataType: DataTypes.Text,
        active: true,
        editable,
        sortable,
        cell: editable ? cell : undefined
    }
    return col
}
const GUIDColumn = (value: any, editable: boolean = true, sortable: boolean = true): ColumnDataModel => {
    if (value && !validators.isGUID(value)) {
        console.error(`the value: ${value} is not of type GUID`);
        return {} as ColumnDataModel;
    }

    let cell = undefined
    if (editable) {
        cell = { value: value, format: patterns.GUID, active: true } as CellDataModel
    }

    const col: ColumnDataModel = {
        order: 0,
        value: value,
        dataType: DataTypes.GUID,
        active: true,
        editable,
        sortable,
        cell: editable ? cell : undefined
    }
    return col
}
const HourColumn = (value: any, editable: boolean = true, sortable: boolean = true): ColumnDataModel => {
    if (value && !validators.isHour(value)) {
        console.error(`the value: ${value} is not of type Hour`);
        return {} as ColumnDataModel;
    }

    let cell = undefined
    if (editable) {
        cell = { value: value, format: patterns.hour, active: true } as CellDataModel
    }

    const col: ColumnDataModel = {
        order: 0,
        value: value,
        dataType: DataTypes.Hour,
        active: true,
        editable,
        sortable,
        cell: editable ? cell : undefined
    }
    return col
}
const DateColumn = (value: any, editable: boolean = true, sortable: boolean = true): ColumnDataModel => {
    if (value && !validators.isDate(value)) {
        console.error(`the value: ${value} is not of type Date`);
        return {} as ColumnDataModel;
    }

    let cell = undefined
    if (editable) {
        cell = { value: value, format: patterns.date, active: true } as CellDataModel
    }

    const col: ColumnDataModel = {
        order: 0,
        value: value,
        dataType: DataTypes.Date,
        active: true,
        editable,
        sortable,
        cell: editable ? cell : undefined
    }
    return col
}
const TextAreaColumn = (value: any, editable: boolean = true, sortable: boolean = true): ColumnDataModel => {
    if (value && !validators.isText(value)) {
        console.error(`the value: ${value} is not of type Text`);
        return {} as ColumnDataModel;
    }

    let cell = undefined
    if (editable) {
        cell = { value: value, active: true } as CellDataModel
    }

    const col: ColumnDataModel = {
        order: 0,
        value: value,
        dataType: DataTypes.TextArea,
        active: true,
        editable,
        sortable,
        cell: editable ? cell : undefined
    }
    return col
}

export interface ColumnsFactories {
    dataType: DataTypes,
    fn: (value: any, editable: boolean, sortable: boolean) => ColumnDataModel
}

export const columnFactories: ColumnsFactories[] = [
    { dataType: DataTypes.Header, fn: HeadColumn },
    { dataType: DataTypes.Int, fn: IntColumn },
    { dataType: DataTypes.BigInt, fn: BigIntColumn },
    { dataType: DataTypes.Text, fn: TextColumn },
    { dataType: DataTypes.GUID, fn: GUIDColumn },
    { dataType: DataTypes.Date, fn: DateColumn },
    { dataType: DataTypes.Hour, fn: HourColumn },
    { dataType: DataTypes.TextArea, fn: TextAreaColumn }
]