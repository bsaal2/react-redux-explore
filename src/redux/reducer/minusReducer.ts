import { IAction, IMinusReducer } from './index.ts';

const state: IMinusReducer = {
    loading: false,
    minusCount: 0
}

const minusReducer = (initialState = state, action: IAction) => {
    console.log('Entered the minus reducer');
    switch(action.type) {
        case 'MINUS_LOADING':
            return { ...initialState, loading: true };
        case 'MINUS':
            return { minusCount: initialState.minusCount - 1, loading: false };
        default:
            return initialState;
    }
}

export default minusReducer;