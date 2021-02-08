import { BalanceActionsTypes } from './balance.types';

const INITIAL_STATE = {
    balance: 0,
    expenses: 0,
    incomes: 0,
    expenses_items: [
        {
            id: 0,
            amount: 0,
            name: "",
        }
    ],
    incomes_items: [
        {
            id: 0,
            amount: 0,
            name: "",
        }
    ],
};

const balanceReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BalanceActionsTypes.CALCULATE_EXPENSES:
            return {
                ...state,
                expenses: state.expenses + action.payload,
            }
        case BalanceActionsTypes.CALCULATE_INCOMES:
            return {
                ...state,
                incomes: state.incomes + action.payload,
            }
        case BalanceActionsTypes.ADD_INCOME:
            return {
                ...state,
                incomes_items: [...state.incomes_items, action.payload],
            }
        default:
            return state;
    }
};

export default balanceReducer;