const max = require('./max');

describe("Max",() => {
    test('Max of [1,2,3,4]', () => {
        expect(max([1,2,3,4])).toEqual(4);
    })
})