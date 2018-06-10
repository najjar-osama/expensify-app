import React from "react";
import ExpenseListItem from "../../components/ExpenseListItem";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";

test("Should render a single ExpensListItem with the given data", () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[2]} />);
  expect(wrapper).toMatchSnapshot();
});
