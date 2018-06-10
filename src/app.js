import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";
import "./styles/styles.scss";

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});

store.dispatch(
  addExpense({ description: "water bill", amount: 4500, createdAt: 4500 })
);
store.dispatch(addExpense({ description: "Gas bill", amount: 900 }));

store.dispatch(addExpense({ description: "Rent", amount: 109500 }));

// store.dispatch(setTextFilter("water"));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
