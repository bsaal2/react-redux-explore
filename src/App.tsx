import { useState, useEffect } from 'react';
import store from './redux/store.ts';
import { increaseCount, decreaseCount } from './redux/action/countAction.ts';

function App() {
    const [addCount, setAddCount] = useState(store.getState().add?.addCount);
    const [minusCount, setMinusCount] = useState(store.getState().minus.minusCount);

  const onIncreaseHandler = () => {
      store.dispatch(increaseCount());
  }

  const onDecreaseHandler = () => {
      store.dispatch(decreaseCount());
  }

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setAddCount(store.getState().add?.addCount);
            setMinusCount(store.getState().minus.minusCount);
        });

        return () => {
            unsubscribe();
        };
    }, []);

  return (
    <section id="myCountApp">
        <p>Add Count: { addCount }</p>
        <p>Minus Count: { minusCount }</p>
        <button onClick={onIncreaseHandler}>Add count</button>
        <button onClick={onDecreaseHandler}>Decrease count</button>
    </section>
  )
}

export default App
