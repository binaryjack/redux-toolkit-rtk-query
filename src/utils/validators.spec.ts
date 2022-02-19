import { validators } from './validators';


test('UTILS VALIDATORS', () => {
    const testCases = {
        text: "is the text",
        intNumber: 123,
        bigInt: 523452346357234572346346,
        date: '2021-12-24',
        hour: '02:05',
        hour2: '23:59:59',
        wrongHour: '23:59:75',
        GUID: "123e4567-e89b-12d3-a456-9AC7CBDCEE52",
        wrongGUID: "123e4567-h89b-12d3-a456-9AC7CBDCEE52",
        GUID2: "{123e4567-e89b-12d3-a456-9AC7CBDCEE52}"


    }

    expect(validators.isText(testCases.text)).toBe(true);
    expect(validators.isNumber(testCases.text)).toBe(false);

    expect(validators.isNumber(testCases.intNumber)).toBe(true);
    expect(validators.isBigInt(testCases.bigInt)).toBe(true);

    expect(validators.isDate(testCases.date)).toBe(true);
    expect(validators.isHour(testCases.hour)).toBe(true);
    expect(validators.isHour(testCases.hour2)).toBe(true);
    expect(validators.isHour(testCases.wrongHour)).toBe(false);

    expect(validators.isHour(testCases.text)).toBe(false);

    expect(validators.isGUID(testCases.wrongGUID)).toBe(false);
    expect(validators.isGUID(testCases.GUID)).toBe(true);
    expect(validators.isGUID(testCases.GUID2)).toBe(true);

});
