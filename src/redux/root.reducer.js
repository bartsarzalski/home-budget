import { combineReducers } from 'redux';
//import { persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';

import ItemsReducer from './items/items.reducer';

/* const persistConfig = {
    key: "root",
    storage,
    whitelist: ['balance']
} */

const rootReducer = combineReducers({
    data: ItemsReducer,
});

//export default persistReducer(persistConfig, rootReducer);
export default rootReducer;