import { BalanceActionsTypes } from './balance.types';

export const calculateExpenses = value => ({
    type: BalanceActionsTypes.CALCULATE_EXPENSES,
    payload: value,
});

export const calculateIncomes = value => ({
    type: BalanceActionsTypes.CALCULATE_INCOMES,
    payload: value,
});