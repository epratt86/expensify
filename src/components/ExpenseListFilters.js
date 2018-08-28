import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={(e) => {
      //create an onChange handler to update input value. Make a dispatch call to the store with new text filter
      props.dispatch(setTextFilter(e.target.value));
    }}/>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
}


//connect state and expense list to redux and export to DashboardPage
export default connect(mapStateToProps)(ExpenseListFilters);
