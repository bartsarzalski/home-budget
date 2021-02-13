import { ItemsActionTypes } from './items.types';

const INITIAL_STATE = {
    income: [],
    expenses: [],
    total: {
        exp: '',
        inc: '',
    }
};

const itemsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ItemsActionTypes.ADD_INCOME:
            return {
                ...state,
                income: [...state.income, action.payload],
            }
        case ItemsActionTypes.ADD_EXPENSE:
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        default:
            return state;
    }
};

export default itemsReducer;