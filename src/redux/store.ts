import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { withExtraArgument } from 'redux-thunk';
import addReducer from "./reducer/addReducer.ts";
import minusReducer from "./reducer/minusReducer.ts";
// import myMiddleware from "./middleware/myMiddleware.ts";
// import myNextMiddleware from "./middleware/myNextMiddleware.ts";
// import myAsyncMiddleware from "./middleware/myAsyncMiddleware.ts";

const appReducer = combineReducers({
    add: addReducer,
    minus: minusReducer,
})

const store = createStore(appReducer, applyMiddleware(withExtraArgument({ name: 'Thunk middleware'})));

export type IStore = typeof Store;

export default store;