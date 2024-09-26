import { Dispatch } from 'redux';
import { increaseCountInitiate, increaseCount } from '../action/countAction.ts';
import { IAction } from '../reducer';

const increaseCountActionCreator = () => {
    return (dispatch: Dispatch<IAction>) => {
        dispatch(increaseCountInitiate());

        setTimeout(() => {
            dispatch(increaseCount());
        }, 5000)
    }
}

export default increaseCountActionCreator;