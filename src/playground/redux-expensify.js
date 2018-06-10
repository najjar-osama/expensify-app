import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// ADD_EXPENSE

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_ExPENSE

const removeExpense = ({ id }) => ({
  type: "REMOVE_EXPENSE",
  id
});
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});
// SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});
// SORT_BY_DATE

const sortByDate = () => ({ type: "SORT_BY_DATE" });
//SORT_BY_AMOUNT
const sortByAmount = () => ({ type: "SORT_BY_AMOUNT" });
// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate
});
// SET_END_DATE
const setEndDate = (endDate = undefined) => ({ type: "SET_END_DATE", endDate });
/* Expenses Reducer */

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      //   return state.concat(action.expense);
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

/* Filters Reducer */

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

/* Get Visible Expenses */

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
/* Store creation */

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(sortByDate());
const exp1 = store.dispatch(
  addExpense({ description: "Coffee", amount: 7500, createdAt: 1000 })
);
const exp2 = store.dispatch(
  addExpense({ description: "Rent", amount: 76000, createdAt: -1000 })
);

/* store.dispatch(setStartDate(0));
store.dispatch(setEndDate(1000)); */

// store.dispatch(setTextFilter("e"));

/* store.dispatch(removeExpense({ id: exp1.expense.id }));

store.dispatch(editExpense(exp2.expense.id, { amount: 8899 }));

store.dispatch(setTextFilter("Osama Mohammad Najjar"));
store.dispatch(setTextFilter("Faysal Mohammad Najjar"));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(sortByAmount()); */

/* store.dispatch(setStartDate(125));
store.dispatch(setStartDate());

store.dispatch(setEndDate(125));
store.dispatch(setEndDate()); */
/* const demoState = {
  expenses: [
    {
      id: "exp1",
      description: "bills",
      note: "final payment",
      amount: 5600,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
}; */

/* const user = {
  name: "Osama",
  age: 25
}; */

/* order does matter when overwriting */
// console.log({
//   ...user,
//   location: "Rotterdam",
//   age: 29
// });
