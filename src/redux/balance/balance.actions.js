import { BalanceActionsTypes } from './balance.types';

export const addToBalance = value => ({
    type: BalanceActionsTypes.ADD_TO_BALANCE,
    payload: value,
});

export const substractFromBalance = value => ({
    type: BalanceActionsTypes.SUBSTRACT_FROM_BALANCE,
    payload: value,
});