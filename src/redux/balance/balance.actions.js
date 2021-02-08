import { BalanceActionsTypes } from './balance.types';

export const calculateExpenses = value => ({
    type: BalanceActionsTypes.CALCULATE_EXPENSES,
    payload: value,
});

export const calculateIncomes = value => ({
    type: BalanceActionsTypes.CALCULATE_INCOMES,
    payload: value,
});

export const addIncome = value => ({
    type: BalanceActionsTypes.ADD_INCOME,
    payload: value,
});

export const addExpense = value => ({
    type: BalanceActionsTypes.ADD_EXPENSE,
    payload: value,
});