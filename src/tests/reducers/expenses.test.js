import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("Should set default state", () => {
  const state = expensesReducer(undefined, {
    type: "@@INIT"
  });
  expect(state).toEqual([]);
});

test("Should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("Should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("Shoud add an expense", () => {
  const expense = {
    id: "4",
    text: "water bill",
    amount: 500,
    createdAt: 9000,
    note: "Happy Test"
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("Should edit the expense of a given id", () => {
  const updates = {
    description: "Mobile bill",
    amount: 6920
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[2].id,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state[2]).toEqual({
    ...expenses[2],
    ...updates
  });
});

test("Should not edit an expense if id is not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "-200",
    updates: {
      note: "Will never be set to an expense"
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
