/* eslint-disable react/prop-types */
import { useState } from "react"

const withCounter = (CounterUtil, intialCount=0) => {
    
    const CounterWrap = () => {
        const[count, setCount] = useState(intialCount);

        const incrementCount = () => {
            setCount(prevCount => prevCount + 1);
        }

        const decrementCount = () => {
            setCount(prevCount => prevCount - 1);
        }

        return <CounterUtil count={count} increment={incrementCount} decrement={decrementCount} />
    }
    return CounterWrap;
}

const CounterCom = ({count, increment, decrement}) => {
    return(
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment Count</button><br />
            <button onClick={decrement}>Decrement Count</button>
        </div>
    )
}

const CounterWithHOC = withCounter(CounterCom)

function HOCDemoCode1(){
    return <CounterWithHOC />
}
export default HOCDemoCode1