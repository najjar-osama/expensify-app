import uuid from "uuid";
import database from "../firebase/firebase";
import expenses from "../tests/fixtures/expenses";
// component calls action generator
// action generator returns object
// component dispatches function
// function runs ( has the ability to dispatch other ctions and do whatever)

// ADD_EXPENSE
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    return database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then(ref => {
        dispatch(addExpense({ id: ref.key, ...expense }));
      });
  };
};
// REMOVE_ExPENSE
export const removeExpense = ({ id }) => ({
  type: "REMOVE_EXPENSE",
  id
});

export const startRemoveExpense = ({ id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};
// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .update({ ...updates })
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

// SET_EXPENSES
export const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});

export const startSetExpenses = () => {
  const receivedExpenses = [];
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once("value")
      .then(snapshot => {
        snapshot.forEach(snapshotItem => {
          receivedExpenses.push({
            id: snapshotItem.key,
            ...snapshotItem.val()
          });
        });
        dispatch(setExpenses(receivedExpenses));
      });
  };
};
