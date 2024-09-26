import type { IAction, IAddReducer } from './index.ts';

const state: IAddReducer = {
    loading: false,
    addCount: 0
};

const addReducer = (initialState = state, action: IAction) => {
    console.log('Entered the add reducer');
    switch (action.type) {
        case 'ADD_LOADING':
            return { ...initialState, loading: true };
        case 'ADD':
            console.log('entered the add case');
            return { addCount: initialState.addCount + 1, loading: false };
        default:
            return initialState;
    }
}

export default addReducer;