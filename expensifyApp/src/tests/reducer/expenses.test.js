import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '2'
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '20'
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense : {
      id: '4',
      description: 'Tea',
      amount: 100,
      createdAt: moment(0).add(2, 'days').valueOf(),
      note: 'Tea'
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test('should edit an expense', () => {
  const updates = {
    description: 'Gum of Thar',
    amount: 22500,
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates
  };

  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe('Gum of Thar');
  expect(state[0].amount).toBe(22500);
});

test('should not edit an expense if id not found', () => {
  const updates = {
    description: 'Gum of Thar',
    amount: 22500,
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '72671',
    updates
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});



// test('should handle add expense with undefined state', () => {
//   const action = {
//     type: 'ADD_EXPENSE',
//     expense : {
//       id: '123',
//       description: 'Rent',
//       amount: 100,
//       createdAt: 1000,
//       note: 'November Rent'
//     }
//   }
//   const state = expensesReducer(undefined, action);
//   expect(state).toEqual([action.expense]);
// });
//
