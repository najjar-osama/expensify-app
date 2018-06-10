import React from "react";
import { ExpenseList } from "../../components/ExpenseList";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";

test("should render expense list with expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test("Should render ExpenseList with empty message", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
