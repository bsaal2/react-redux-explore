import { Dispatch } from 'redux';
import { IAction } from '../reducer';
import { decreaseCount, decreaseCountInitiate } from '../action/countAction.ts';

const decreaseCountActionCreator = () => {
    return (dispatch: Dispatch<IAction>) => {
        dispatch(decreaseCountInitiate())

        setTimeout(() => {
            dispatch(decreaseCount());
        }, 5000);
    }
}

export default decreaseCountActionCreator;