import { ItemsActionTypes } from './items.types';

const INITIAL_STATE = {
    income: [
        {
            id: "",
            description: "",
            value: 0,
        }
    ],
    expenses: [
        {
            id: "",
            description: "",
            value: 0,
        }
    ],
    total: {
        exp: 0,
        inc: 0,
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
                expense: [...state.income, action.payload]
            }
        default:
            return state;
    }
};

export default itemsReducer;