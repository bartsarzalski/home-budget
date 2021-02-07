import { combineReducers } from 'redux';
//import { persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';

import balanceReducer from './balance/balance.reducer';

/* const persistConfig = {
    key: "root",
    storage,
    whitelist: ['balance']
} */

const rootReducer = combineReducers({
    calculations: balanceReducer,
});

//export default persistReducer(persistConfig, rootReducer);
export default rootReducer;