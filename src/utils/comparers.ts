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

export const sortColumnAction = (
    a: RowDataModel,
    b: RowDataModel,
    columnNumber: number,
    direction: string
): number => {
    if (!a || !b) return 0;

    if (validators.isNumber(a.columns[columnNumber].value) && validators.isNumber(b.columns[columnNumber].value)) {
        const aValue = +a.columns[columnNumber].value!;
        const bValue = +b.columns[columnNumber].value!;
        if (!aValue || !bValue) return 0;
        return sortingNumberMethod(aValue, bValue, direction);
    }
    if (validators.isText(a.columns[columnNumber].value) && validators.isText(b.columns[columnNumber].value)) {
        let aValue = a.columns[columnNumber].value!;
        let bValue = b.columns[columnNumber].value!;
        aValue = (!aValue ? "a" : aValue).toLowerCase();
        bValue = (!bValue ? "a" : bValue).toLowerCase();

        return sortingStringMethod(aValue, bValue, direction);
    }
    if (validators.isBoolean(a.columns[columnNumber].value) && validators.isBoolean(b.columns[columnNumber].value)) {
        let aValue = a.columns[columnNumber].value! === 'true' ? true : false;
        let bValue = b.columns[columnNumber].value! === 'true' ? true : false;
        return direction === 'asc' && aValue > bValue ? -1 : bValue > aValue ? 1 : 0;
    }
    if (validators.isDate(a.columns[columnNumber].value) && validators.isDate(b.columns[columnNumber].value)) {
        let aValue = new Date(a.columns[columnNumber].value!).toISOString()
        let bValue = new Date(b.columns[columnNumber].value!).toISOString()
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
): number => direction === 'asc' ? ascNumber(a, b) : descNumber(a, b)


const ascNumber = (a: number, b: number) => a - b
const descNumber = (a: number, b: number) => b - a


export const comparers = {
    ascNumber,
    descNumber
}