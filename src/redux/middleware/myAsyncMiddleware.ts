import { Middleware, Dispatch } from 'redux';
import { IAction, IAddReducer, IMinusReducer } from '../reducer';
import { increaseCount, decreaseCount } from '../action/countAction.ts';


/** Custom redux middleware function implementation **/
const myAsyncMiddleware: Middleware<object, { add: IAddReducer, minus: IMinusReducer }, Dispatch<IAction>> = (store) => (next) => (action) => {
    const actionObj = action as Dispatch<IAction>;

    if (actionObj.type === 'ADD_LOADING') {
        setTimeout(() => {
            store.dispatch(increaseCount());
        }, 5000);
    } else if (actionObj.type === 'MINUS_LOADING') {
        setTimeout(() => {
            store.dispatch(decreaseCount());
        }, 5000);
    }

    return next(action);
}

export default myAsyncMiddleware;