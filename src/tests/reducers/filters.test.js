import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("Should setup default filter values", () => {
  const state = filtersReducer(undefined, {
    type: "@@INIT"
  });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("Should set sort by to 'amount'", () => {
  const state = filtersReducer(undefined, {
    type: "SORT_BY_AMOUNT"
  });
  expect(state.sortBy).toBe("amount");
});

test("Should set sort by to 'date'", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const action = {
    type: "SORT_BY_DATE"
  };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("Should set text filter", () => {
  const text = "bills";
  const action = {
    type: "SET_TEXT_FILTER",
    text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test("Should set startDate filter", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: moment(),
    endDate: undefined
  };
  const startDate = moment(0).add(4, "days");
  const action = {
    type: "SET_START_DATE",
    startDate
  };
  const state = filtersReducer(currentState, action);
  expect(state.startDate).toEqual(startDate);
});

test("Should set endDate filter", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment()
  };
  const endDate = moment(0).add(10, "days");
  const action = {
    type: "SET_END_DATE",
    endDate
  };
  const state = filtersReducer(currentState, action);
  expect(state.endDate).toEqual(endDate);
});
