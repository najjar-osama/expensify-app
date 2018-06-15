import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      setTextFilter={setTextFilter}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      filters={filters}
    />
  );
});

test("Should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should render ExpenseListFilters with alt data correctly", () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test("Should handle text change", () => {
  const event = {
    target: {
      value: "let's test"
    }
  };
  wrapper.find("input").prop("onChange")(event);
  expect(setTextFilter).toHaveBeenLastCalledWith(event.target.value);
});

test("Should handle Dates change", () => {
  wrapper.find("DateRangePicker").prop("onDatesChange")({
    startDate: altFilters.startDate,
    endDate: altFilters.endDate
  });
  expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

test("Should handle sortByDate correctly", () => {
  wrapper.setProps({
    filters: altFilters
  });
  const event = {
    target: {
      value: "date"
    }
  };
  wrapper.find("select").prop("onChange")(event);
  expect(sortByDate).toHaveBeenCalledWith();
});

test("Should handle sortByAmount correctly", () => {
  const event = {
    target: {
      value: "amount"
    }
  };
  wrapper.find("select").prop("onChange")(event);
  expect(sortByAmount).toHaveBeenCalledWith();
});

test("Should handle DatesFocusChange", () => {
  const calendarFocused = "endDate";
  wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused);
  expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});
