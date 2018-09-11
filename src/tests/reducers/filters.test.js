import moment from 'moment';
import filtersReducer from '../../reducers/filters';


test('should setup default filter values', () => {
  //first argument is for state. if undefined default values are used. 
  //'type @@INIT' is the initial action that redux makes
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const state = filtersReducer(undefined, { type: 'TEXT_FILTER', text: 'testing' });
  expect(state.text).toBe('testing');
});

test('should set startDate', () => {
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    date: startDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test('should set endDate', () => {
  const endDate = moment();
  const action = {
    type: 'SET_END_DATE',
    date: endDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});