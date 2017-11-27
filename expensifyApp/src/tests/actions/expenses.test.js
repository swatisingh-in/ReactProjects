import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('Should set up removeExpense action Object', () => {
  const action = removeExpense( {id: '123abc'} );
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('Should set up editExpense action Object', () => {
  const action = editExpense('123abc', {description: "Rent", amount: 100});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {description: 'Rent', amount: 100}
  });
});

test('Should setup addExpense action Object with provided values', () => {
  const expense = {
    description : "Rent",
    note : "November Rent",
    amount : 1400,
    createdAt : 1000
  }

  const action = addExpense(expense);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expense
    }
  });
});

test('Should setup addExpense action Object with default values', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note : '',
      amount : 0,
      createdAt : 0
    }
  });
});
