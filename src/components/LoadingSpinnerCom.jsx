
import { useEffect } from 'react';
import { useState } from 'react'
import Spinner from './Spinner';

const LoadingSpinnerCom = () => {
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating some asynchronous operation
    setTimeout(() => {
        setLoading(false);
    },2000)
  }, []);

  return (
    <div>
        { loading ? <Spinner /> : <h1>Data Loaded Successfully!</h1>}
    </div>
  )
}

export default LoadingSpinnerCom