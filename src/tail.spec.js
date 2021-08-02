const tail = require('./tail');

describe('Tail', () => {

    it('Tail of list[1,2,3]', () => {
        expect(tail([1,2,3])).toEqual([2,3]);
    });

    it('Tail of list[]', () => {
        expect(tail([])).toEqual([]);
    });

})
