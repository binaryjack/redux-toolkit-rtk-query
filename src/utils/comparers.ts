import { RowDataModel } from '../model/tableModel';
import { validators } from './validators';
/*
const strings = ['č','é','A','b','Đ'];
 
const defaultSort = Array.from(strings).sort();
 
const simpleSort = Array.from(strings).sort((a, b) => a - b);
 
const localeSort = Array.from(strings).sort((a, b) => {
  return a.localCompare(b, 'en', { sensitivity: 'base' });
});
 
console.log(defaultSort);
console.log(simpleSort);
console
https://www.delftstack.com/fr/howto/javascript/javascript-sort-array-of-objects-alphabetically/
 
*/

const collator = new Intl.Collator('fr');

export const compareNumberColumn = (
    a: RowDataModel,
    b: RowDataModel,
    columnNumber: number,
    direction: string
): number => {
    if (!a || !b) return 0;

    if (validators.isNumber(a.columns[columnNumber].label) && validators.isNumber(b.columns[columnNumber].label)) {
        const aValue = +a.columns[columnNumber].label!;
        const bValue = +b.columns[columnNumber].label!;
        if (!aValue || !bValue) return 0;
        return sortingNumberMethod(aValue, bValue, direction);
    }
    if (validators.isText(a.columns[columnNumber].label) && validators.isText(b.columns[columnNumber].label)) {
        let aValue = a.columns[columnNumber].label!;
        let bValue = b.columns[columnNumber].label!;
        aValue = (!aValue ? "a" : aValue).toLowerCase();
        bValue = (!bValue ? "a" : bValue).toLowerCase();

        return sortingStringMethod(aValue, bValue, direction);
    }
    if (validators.isBoolean(a.columns[columnNumber].label) && validators.isBoolean(b.columns[columnNumber].label)) {
        let aValue = a.columns[columnNumber].label! === 'true' ? true : false;
        let bValue = b.columns[columnNumber].label! === 'true' ? true : false;
        return direction === 'asc' && aValue > bValue ? -1 : bValue > aValue ? 1 : 0;
    }
    if (validators.isDate(a.columns[columnNumber].label) && validators.isDate(b.columns[columnNumber].label)) {
        let aValue = new Date(a.columns[columnNumber].label!).toISOString()
        let bValue = new Date(b.columns[columnNumber].label!).toISOString()
        return sortingStringMethod(aValue, bValue, direction);
    }
    return 0;
};


export const sortingStringMethod = (
    a: string,
    b: string,
    direction: string,
): number => direction === 'asc' ? collator.compare(a, b) : collator.compare(b, a);

export const sortingNumberMethod = (
    a: number,
    b: number,
    direction: string,
): number => direction === 'asc' && a < b ? -1 : a > b ? 1 : 0;

export const compareIntegers = (a: RowDataModel, b: RowDataModel) => {
    if (a.id < b.id) {
        return 1;
    }
    if (a.id > b.id) {
        return -1;
    }
    return 0;
};