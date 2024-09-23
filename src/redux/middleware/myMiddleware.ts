import { Middleware } from 'redux';
import { IAction } from '../reducer';

const myMiddleware: Middleware<object, IAction>= (store) => (next) => (action) => {
    console.log('My middleware called before reducer', store, action);

    const value = next(action);

    console.log('My middleware called after reducer', value);

    return value;
}

export default myMiddleware;