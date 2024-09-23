import { legacy_createStore as createStore, combineReducers } from 'redux'
import addReducer from "./reducer/addReducer.ts";
import minusReducer from "./reducer/minusReducer.ts";

const appReducer = combineReducers({
    add: addReducer,
    minus: minusReducer,
})

const store = createStore(appReducer);

export default store;