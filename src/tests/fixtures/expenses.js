import moment from 'moment';

//test data
export default [{
  id: '1',
  description: 'gum',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description: 'rent',
  note: '',
  amount: 109500,
  createdAt: moment(0).subtract(4, 'days').valueOf() //valueOf returns num instead of string value
}, {
  id: '3',
  description: 'credit card',
  note: '',
  amount: 6000,
  createdAt: moment(0).add(4, 'days').valueOf()
}];