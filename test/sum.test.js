const sum = require("../sum");

test("add function should add 2 integers correctly", () => {
  expect(sum.sum(1, 2)).toBe(3);
  expect(sum.sum(0, 0)).toBe(0);
  expect(sum.sum(-1, 2)).toBe(1);
});
