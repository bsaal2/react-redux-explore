import { Dispatch } from 'redux';
import { increaseCountInitiate, increaseCount } from '../action/countAction.ts';
import {IAction, IAddReducer, IMinusReducer} from '../reducer';

const increaseCountActionCreator = () => {
    return (dispatch: Dispatch<IAction>, getState: { add: IAddReducer, minus: IMinusReducer }, extraPayload: { name: string }) => {
        console.log('Extra arguments', extraPayload, getState);
        dispatch(increaseCountInitiate());

        setTimeout(() => {
            dispatch(increaseCount());
        }, 5000)
    }
}

export default increaseCountActionCreator;