import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

//destructure the 'props' to get the individual piece you need
const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={(e) => {
      dispatch(removeExpense({ id }))
    }}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);
