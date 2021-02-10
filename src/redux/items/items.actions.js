import { ItemsActionTypes } from './items.types';

export const addIncome = value => ({
    type: ItemsActionTypes.ADD_INCOME,
    payload: value,
});

export const addExpense = value => ({
    type: ItemsActionTypes.ADD_EXPENSE,
    payload: value,
});