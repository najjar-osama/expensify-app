import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("Should correctly render expenses summary with 1 expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expensesCount={1} expensesTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("Should correctly render expenses summary multiple  expenses", () => {
  const wrapper = shallow(
    <ExpensesSummary expensesCount={34} expensesTotal={2356489465442} />
  );
  expect(wrapper).toMatchSnapshot();
});
