import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let wrapper, history, editExpense, startRemoveExpense;

beforeEach(() => {
  history = {
    push: jest.fn()
  };
  editExpense = jest.fn();
  startRemoveExpense = jest.fn();
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[2]}
      editExpense={editExpense}
      removeExpense={startRemoveExpense}
      history={history}
    />
  );
});

test("Should render EditExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should handle EditExpense correctly", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test("Should handle startRemoveExpense correctly", () => {
  //wrapper.find("button").prop("onClick")(expenses[2].id);
  /*or */ wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[2].id);
});
