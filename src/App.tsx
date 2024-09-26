import { useState, useEffect } from 'react';
import store from './redux/store.ts';
import { increaseCountInitiate, decreaseCountInitiate } from './redux/action/countAction.ts';

const Loading = () => (
    <span>Loading...</span>
)

function App() {
    const [addObj, setAddObj] = useState(store.getState().add);
    const [minusObj, setMinusObj] = useState(store.getState().minus);

    const addLoading = addObj?.loading;
    const minusLoading = minusObj?.loading;

  const onIncreaseHandler = () => {
      store.dispatch(increaseCountInitiate());
  }

  const onDecreaseHandler = () => {
      store.dispatch(decreaseCountInitiate());
  }

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            console.log('entered');
            setAddObj(store.getState().add);
            setMinusObj(store.getState().minus);
        });

        return () => {
            unsubscribe();
        };
    }, []);

  return (
    <section id="myCountApp">
        <p>Add Count:
            { addLoading && <Loading /> }
            { !addLoading && <span>{ addObj?.addCount }</span> }
        </p>

        <p>Minus Count:
            { minusLoading && <Loading /> }
            { !minusLoading && <span>{ minusObj?.minusCount }</span> }
        </p>
        <button onClick={onIncreaseHandler}>Add count</button>
        <button onClick={onDecreaseHandler}>Decrease count</button>
    </section>
  )
}

export default App
