import {Middleware} from 'redux';

const myNextMiddleware: Middleware = (store) => (next) => (action) => {
    console.log('Before myNextMiddleware', store, action);

    next(action);

    console.log('After myNextMiddleware', store.getState());

    return store.getState();
}

export default myNextMiddleware;