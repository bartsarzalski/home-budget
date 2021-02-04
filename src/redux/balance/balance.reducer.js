import { BalanceActionsTypes } from './balance.types';

const INITIAL_STATE = {
    balance: 10000
};

const balanceReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BalanceActionsTypes.ADD_TO_BALANCE:
            return {
                ...state,
                balance: state.balance + action.payload,
            }
        case BalanceActionsTypes.SUBSTRACT_FROM_BALANCE:
            return {
                ...state,
                balance: state.balance - action.payload,
            }
        default:
            return state;
    }
};

export default balanceReducer;