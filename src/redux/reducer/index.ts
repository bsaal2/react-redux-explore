interface IAction {
    type: string;
    payload?: object;
}

interface IAddReducer {
    addCount: number;
}

interface IMinusReducer {
    minusCount: number;
}

export type { IAction, IAddReducer, IMinusReducer };