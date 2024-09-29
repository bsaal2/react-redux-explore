
interface IAction {
    type: string;
    payload?: object;
}

interface IAddReducer {
    loading: boolean;
    addCount: number;
}

interface IMinusReducer {
    loading: boolean;
    minusCount: number;
}

export type { IAction, IAddReducer, IMinusReducer };