import { useCallback, useEffect, useState } from 'react'

const useThrottle = (cb, delay) => {
    const[lastCall, setLastCall] = useState(0);

    const throttleCb = useCallback((...args) => {
        let cur = Date.now();
        if(cur - lastCall >= delay){
            cb(...args);
            setLastCall(cur);
        }
    }, [cb, delay, lastCall])

    return throttleCb;
}

const ThrottledComponent = () => {
  const[counter, setCounter] =  useState(0);

  const throttleIncrement = useThrottle(() => {
    setCounter(prevCount => prevCount+1);
  },1000)

  useEffect(() => {
    const timerId = setTimeout(throttleIncrement, 100);
    return () => {
        clearTimeout(timerId);
    }
  }) 

  return (
    <div>
        <h2>Throttled Count:{counter}</h2>
    </div>
  )
}

export default ThrottledComponent