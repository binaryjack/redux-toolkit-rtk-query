

export const patterns = {
    number: /^[0-9\.\,]{,10}$/,
    bigNumbers: /\b(?:[0-9]{1,18}|[1-8][0-9]{18}|9(?:[01][0-9]{17}|2(?:[01][0-9]{16}|2(?:[0-2][0-9]{15}|3(?:[0-2][0-9]{14}|3(?:[0-6][0-9]{13}|7(?:[01][0-9]{12}|20(?:[0-2][0-9]{10}|3(?:[0-5][0-9]{9}|6(?:[0-7][0-9]{8}|8(?:[0-4][0-9]{7}|5(?:[0-3][0-9]{6}|4(?:[0-6][0-9]{5}|7(?:[0-6][0-9]{4}|7(?:[0-4][0-9]{3}|5(?:[0-7][0-9]{2}|80[0-7]))))))))))))))))\b/,
    hour: /^([0-2]{1}[0-9]{1})\:([0-5]{1}[0-9]{1})\:?([0-5]{1}[0-9]{1})?$/,
    date: /^([0-3]{1}[0-9]{3})\-?\\?\.?([0-1]{1}|00|01|02|03|04|05|06|07|08|09|10|11|12)\-?\\?\.?([0-3]{1}[0-9]{1})?$/,
    GUID: /^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$/
}

const isText = (value: any) => typeof value === 'string'
const isNumber = (value: any) => typeof value === 'number' || isText(value) && patterns.number.test(value)
const isBoolean = (value: any) => typeof value === 'boolean'
const isBigInt = (value: any) => typeof value === 'bigint' || patterns.bigNumbers.test(value)
const isHour = (value: any) => isText(value) && patterns.hour.test(value)
const isDate = (value: any) => isText(value) && patterns.date.test(value)
const isGUID = (value: any) => patterns.GUID.test(value);

export const validators = {
    isText,
    isNumber,
    isBoolean,
    isBigInt,
    isHour,
    isDate,
    isGUID
}