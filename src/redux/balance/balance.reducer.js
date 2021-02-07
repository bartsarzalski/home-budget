import { BalanceActionsTypes } from './balance.types';

const INITIAL_STATE = {
    balance: 0,
    expenses: 0,
    incomes: 0,
};

const balanceReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BalanceActionsTypes.CALCULATE_EXPENSES:
            return {
                ...state,
                expenses: state.expenses + action.payload,
            }
        case BalanceActionsTypes.CALUCALTE_INCOMES:
            return {
                ...state,
                incomes: state.incomes + action.payload,
            }
        default:
            return state;
    }
};

export default balanceReducer;