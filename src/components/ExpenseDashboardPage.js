import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
const ExpenseDashboardPage = () => (
  <header>
    <h1>Expensify!</h1>
    <ExpenseListFilters />
    <ExpenseList />
  </header>
);

export default ExpenseDashboardPage;
