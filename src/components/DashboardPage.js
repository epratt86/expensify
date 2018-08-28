import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const DashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ConnectedExpenseList />
  </div>
);

export default DashboardPage;