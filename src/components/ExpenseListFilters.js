import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={(e) => {
      //create an onChange handler to update input value. Make a dispatch call to the store with new text filter
      props.dispatch(setTextFilter(e.target.value));
    }}/>
    <select value={props.filters.sortBy} onChange={(e) => {
      if (e.target.value === 'date') {
        props.dispatch(sortByDate());
      } else if (e.target.value === 'amount') {
        props.dispatch(sortByAmount());
      };
    }}>
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
}


//connect state and expense list to redux and export to DashboardPage
export default connect(mapStateToProps)(ExpenseListFilters);
