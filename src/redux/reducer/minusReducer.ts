import { IAction, IMinusReducer } from './index.ts';

const state: IMinusReducer = {
    minusCount: 0
}

const minusReducer = (initialState = state, action: IAction) => {
    console.log('Entered the minus reducer');
    switch(action.type) {
        case 'MINUS':
            return { minusCount: initialState.minusCount - 1 };
        default:
            return initialState;
    }
}

export default minusReducer;