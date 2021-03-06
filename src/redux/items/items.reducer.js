import { ItemsActionTypes } from './items.types';

const INITIAL_STATE = {
    incomes: [],
    expenses: [],
};

const itemsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ItemsActionTypes.ADD_INCOME:
            return {
                ...state,
                incomes: [...state.incomes, action.payload],
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