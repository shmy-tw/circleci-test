const sum = require("./sum");

test('add 1 + 2 equal 3', () => {
	expect(sum(1, 2)).toEqual(3);
});
