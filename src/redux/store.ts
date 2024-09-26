import { legacy_createStore as createStore, combineReducers, applyMiddleware, Dispatch } from 'redux'
import addReducer from "./reducer/addReducer.ts";
import minusReducer from "./reducer/minusReducer.ts";
// import myMiddleware from "./middleware/myMiddleware.ts";
// import myNextMiddleware from "./middleware/myNextMiddleware.ts";
import myAsyncMiddleware from "./middleware/myAsyncMiddleware.ts";

const appReducer = combineReducers({
    add: addReducer,
    minus: minusReducer,
})

const store = createStore(appReducer, applyMiddleware(myAsyncMiddleware));

export type IStore = typeof Store;

export default store;