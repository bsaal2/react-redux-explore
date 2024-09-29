import { useDispatch, useSelector } from 'react-redux';
import { IState } from './redux/store.ts';
import increaseCountActionCreator from './redux/actionCreator/increaseCount.ts';
import decreaseCountActionCreator from './redux/actionCreator/decreaseCount.ts'

import Loading from './components/Loading.tsx';

function App() {
    const dispatch = useDispatch();
    const addObj = useSelector((state: IState) => state.add);
    const minusObj = useSelector((state: IState) => state.minus);

    const addLoading = addObj?.loading;
    const minusLoading = minusObj?.loading;

  const onIncreaseHandler = () => {
      dispatch(increaseCountActionCreator() as any);
  }

  const onDecreaseHandler = () => {
      dispatch(decreaseCountActionCreator() as any);
  }
    //     const unsubscribe = store.subscribe(() => {
    //         console.log('entered');
    //         setAddObj(store.getState().add);
    //         setMinusObj(store.getState().minus);
    //     });

    //     return () => {
    //         unsubscribe();
    //     };
    // }, []);

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
