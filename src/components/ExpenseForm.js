import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFoucesd: false,
      error: ""
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(Object.assign({}, this.state, { description }));
  };
  onNoteChange = e => {
    const note = e.target.value;
    this.setState(Object.assign({}, this.state, { note }));
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(Object.assign({}, this.state, { amount }));
    }
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(Object.assign({}, this.state, { createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFoucesd: focused }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      const error = "description and amount fields are mandatory.";
      this.setState(Object.assign({}, this.state, { error }));
    } else {
      const error = "";
      this.setState(Object.assign({}, this.state, { error }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div>
        <div>{this.state.error && <p>{this.state.error}</p>}</div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            autoFocus
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFoucesd}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            id="datePicker_AddExpense"
          />
          <textarea
            placeholder="Add note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>
            {this.props.expense ? "Update expense" : "Add Expense"}
          </button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
