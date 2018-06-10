import {
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount,
  setTextFilter
} from "../../actions/filters";
import moment from "moment";

test("Should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("Should generate set end date action object", () => {
  const action = setEndDate(moment(100));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(100)
  });
});

test("Should setup sort by date action object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  });
});

test("Should seup sort by amount action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});

test("Should setup set text filter action object with the provided data", () => {
  const action = setTextFilter("rent");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "rent"
  });
});

test("Should setupa set text filter action object with the default data", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});
