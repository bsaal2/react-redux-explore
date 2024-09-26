const increaseCountInitiate = () => ({
    type: 'ADD_LOADING'
})

const increaseCount = () => ({
    type: 'ADD'
});

const decreaseCountInitiate = () => ({
    type: 'MINUS_LOADING'
})

const decreaseCount = () => ({
    type: 'MINUS'
});

export { increaseCountInitiate, increaseCount, decreaseCountInitiate, decreaseCount };