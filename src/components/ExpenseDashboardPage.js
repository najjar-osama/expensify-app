import React from "react";
import ExpenseList from "./ExpenseList";
import ExpensesSummary from "./ExpensesSummary";
import ExpenseListFilters from "./ExpenseListFilters";
const ExpenseDashboardPage = () => (
  <header>
    <h1>Expensify!</h1>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </header>
);

export default ExpenseDashboardPage;
