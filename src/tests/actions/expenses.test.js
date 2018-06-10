import { addExpense, removeExpense, editExpense } from "../../actions/expenses";
import moment from "moment";
test("Should set up remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("Should setup edit expense action object", () => {
  const action = editExpense("123abc", {
    description: "this s expense test description",
    amount: 5000,
    createdAt: 9000,
    note: "this is test expense note"
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      description: "this s expense test description",
      amount: 5000,
      createdAt: 9000,
      note: "this is test expense note"
    }
  });
});

test("should setup add Expesne Action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 200,
    createdAt: 1000,
    note: "this edit test"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("Should setup add expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      amount: 0,
      note: "",
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
