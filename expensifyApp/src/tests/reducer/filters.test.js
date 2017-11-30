import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Should setup default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'});

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('Should setup sortBy to amount', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

test('Should setup sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const action = {type: 'SORT_BY_DATE'};

  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should setup text filter', () => {
  const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'Rent'});
  expect(state.text).toBe('Rent');
});

test('should set start date', () => {
  const date = moment();
  const state = filtersReducer(undefined, {type: 'SET_START_DATE', date});
  expect(state.startDate).toBe(date);
});

test('should set end date', () => {
  const date = moment();
  const state = filtersReducer(undefined, {type: 'SET_END_DATE', date});
  expect(state.endDate).toBe(date);
});
