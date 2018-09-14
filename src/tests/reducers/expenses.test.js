import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

//test for default state value
test('should set default state value', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' }); //initial state dispatch call from redux
  expect(state).toEqual([]);
});

// test for remove by id
test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense with wrong id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 'wrongID'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2], expenses[3]]);
});

test('should edit expense by id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      description: 'New description'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe('New description');
});

test('should not edit an expense with wrong id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: 'wrongID',
    updates: {
      description: 'New description'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});