import { useReducer } from 'react'

const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        case 'RESET':
            return {count: 0}
        default:
            return state;
    }
}

const UseReducerDemoExample1 = () => {
  const intialState = {
    count : 0
  }

  const[state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
        <h2>Count: {state.count}</h2>
        <button onClick={() => dispatch({ type: 'INCREMENT'})}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT'})}>Decrement</button>
        <button onClick={() => dispatch({ type: 'RESET'})}>Reset</button>
    </div>
  )
}

export default UseReducerDemoExample1 