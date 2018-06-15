import getExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("Should return 0 when no expenses provide", () => {
  expect(getExpensesTotal()).toBe(0);
});

test("Should return 195 as one single given expense", () => {
  expect(getExpensesTotal([expenses[0]])).toBe(195);
});
test("Should return 114195 as total expense for the given expenses", () => {
  expect(getExpensesTotal(expenses)).toBe(114195);
});
