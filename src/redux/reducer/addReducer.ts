import type { IAction, IAddReducer } from './index.ts';

const state: IAddReducer = {
    addCount: 0
};

const addReducer = (initialState = state, action: IAction) => {
    console.log('Entered the add reducer');
    switch (action.type) {
        case 'ADD':
            return { addCount: initialState.addCount + 1 };
        default:
            return initialState;
    }
}

export default addReducer;