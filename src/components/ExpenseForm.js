import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //does props.expense exist? if so, use props.expense.description value. if not, use a blank string
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      //amount is stored in cents, divide by 100 to get dollar value then convert to string
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    //if no amount it means user removed from form. Whipe form clear. Then
    //match the regular expression to make sure keys entered start with a number has a decimal and then 2 numbers
  if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
    this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    //if user selects a date, save it to the state
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    //prevent page from reloading
    e.preventDefault();
    //if there is no description or amount don't let user submit
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({error: 'Please fill out form before submitting.'}));
    } else {
      this.setState(() => ({error: ''}));
      this.props.onSubmit({
        //when form is submitted update state
        description: this.state.description,
        //convert amount to a number w/ base 10 '.00'
        amount: parseFloat(this.state.amount, 10) * 100,
        //get actual value of createdAt instead of string value
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    };
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            placeholder="description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            type="text"
            placeholder="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea 
            placeholder="enter a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
            >
          </textarea>
          <button>Submit Expense</button>
        </form>
      </div>
    );
  };
};