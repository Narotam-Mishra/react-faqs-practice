import { useEffect, useState } from 'react';
import '../styles/stopwatch.css';

const StopWatch = () => {
  // state to change and store time
  const [time, setTime] = useState(0);
  
//   state to check whether stopwatch is running or not
const [isRunning, setIsRunning] = useState(false);

useEffect(() => {
    let intervalId;
    if(isRunning){
        // setting time from 0 to 1 in every 10 millisecond using setInterval()
        intervalId = setInterval(() => setTime(time+1), 10);
    }
    // clean up task
    return () => clearInterval(intervalId);
}, [isRunning, time])

  // hours calculation
  let hours = Math.floor(time / 360000);
  
  // minutes calculation
  let minutes = Math.floor((time % 360000) / 6000);
  
  // seconds calculation
  let seconds = Math.floor((time % 6000) / 100);

  // milliseconds calculation
  let milliseconds = time % 1000;

  //   method to start and stop timer
  const startAndStopTimer = () => {
    setIsRunning(!isRunning);
  }

  // method to reset timer back to 0
  const reset = () => {
    setTime(0);
  }

  return (
    <div className="stopwatch-container">
      <h2 className='header-text'>StopWatch</h2>
      <p className="stopwatch-time">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <div className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={startAndStopTimer}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="stopwatch-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default StopWatch