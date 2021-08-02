const head = require('./head');

describe('Head', () => {

    it('Head of list[1,2,3]', () => {
        expect(head([1,2,3])).toEqual(1);
    });

    it('Head of list[]', () => {
        expect(head([])).toEqual(null);
    });

})
