import { IAction } from '../reducer';

const increaseCountInitiate = (): IAction => ({
    type: 'ADD_LOADING'
})

const increaseCount = (): IAction => ({
    type: 'ADD'
});

const decreaseCountInitiate = (): IAction => ({
    type: 'MINUS_LOADING'
})

const decreaseCount = (): IAction => ({
    type: 'MINUS'
});

export { increaseCountInitiate, increaseCount, decreaseCountInitiate, decreaseCount };