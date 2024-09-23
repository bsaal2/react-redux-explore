interface IAction {
    type: string;
    payload?: object;
}

interface IMinusReducer {
    minusCount: number;
}

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