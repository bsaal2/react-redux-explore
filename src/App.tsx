import { FC } from 'react';
import { connect } from 'react-redux';
import { IState } from './redux/store.ts';
import increaseCountActionCreator from './redux/actionCreator/increaseCount.ts';
import decreaseCountActionCreator from './redux/actionCreator/decreaseCount.ts'
import { IAddReducer, IMinusReducer } from './redux/reducer';

import Loading from './components/Loading.tsx';

interface IAppProps {
    addObj: IAddReducer,
    minusObj: IMinusReducer
    increaseCountActionCreator: Function;
    decreaseCountActionCreator: Function;
}

const App: FC<IAppProps> = ({ addObj, minusObj, increaseCountActionCreator, decreaseCountActionCreator }) => {
    const addLoading = addObj?.loading;
    const minusLoading = minusObj?.loading;

  const onIncreaseHandler = () => {
      increaseCountActionCreator();
  }

  const onDecreaseHandler = () => {
      decreaseCountActionCreator();
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

const mapStateToProps = (state: IState) => ({ addObj: state.add, minusObj: state.minus });
const mapDispatchToProps = {
    increaseCountActionCreator,
    decreaseCountActionCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
