import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

//setTextFilter
test('should generate a text filter action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'TEXT_FILTER',
    text: ''
  });
});

test('should generate a text filter action object for a provided value', () => {
  const action = setTextFilter('rent');
  expect(action).toEqual({
    type: 'TEXT_FILTER',
    text: 'rent'
  });
});

//sortByAmount
test('should generate a filter to sort object by amount', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

//sortByDate
test('should generate a filter to sort an object by Date', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

//setStartDate
test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  });
});

//setEndDate
test('should generate end start date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  });
});