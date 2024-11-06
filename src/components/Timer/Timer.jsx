import React, { useState, useEffect } from 'react';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import StopOutlinedIcon from '@mui/icons-material/StopOutlined';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import './Timer.scss'

const Timer = () => {
  const [time, setTime] = useState(0);  // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false);  // Track if the timer is running
  const [isStopped, setIsStopped] = useState(false); // Track if the timer is stopped
  const [isCountdown, setIsCountdown] = useState(false); // track if timer is in countdown mode or stopwatch mode

  const fixedCountdownTime = 60000; // 1 minute in milliseconds

  useEffect(() => {
    let intervalId; // variable to store setInterval function. This is used to cleanup the interval when the component is dismounted

    if (isRunning) {
      // Update time every second when the timer is running
      intervalId = setInterval(() => {
        setTime(prevTime => {
          if(isCountdown) {
            // countdown mode -> decrement time
            // is this still executed when the timer reaches zero?
            console.log(prevTime);
            return prevTime > 0 ? prevTime - 10 : 0;
          } else {
            // stopwatch mode -> increment time
            return prevTime + 10;
          }
        });
      }, 10); // interval time should be a variable
    }

    // Cleanup interval on component unmount or when timer stops
    return () => clearInterval(intervalId);
  }, [isRunning, isCountdown]);

  const handleStart = () => {
    if(isCountdown && time === 0) {
      setTime(fixedCountdownTime);
    }
    setIsRunning(true);
    setIsStopped(false);
  };
  const handleStop = () => {
    setIsRunning(false);
    setIsStopped(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsStopped(false);
    setTime(isCountdown ? fixedCountdownTime : 0); // rest to countdown or stopwatch mode
  };

  const toggleMode = () => {
    setIsRunning(false);
    setIsStopped(false);
    setIsCountdown(!isCountdown);
    setTime(!isCountdown ? fixedCountdownTime : 0); // set intial time based on mode
  }

  // Helper function to format time
  const formatTime = (time) => {
    const milliseconds = time % 1000;
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / 60000);
    
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(Math.floor(milliseconds / 10)).padStart(2, '0')}`;
  };

  return (
    <>
      <section className="timer-container full-height side-padding">
        
        <div className="timer-mode">
          <label className="switch">
            <input type="checkbox" onClick={toggleMode} />
            <span className="slider round" />
          </label>
              {/* {isCountdown ? "Switch to Stopwatch" : "Switch to Countdown"} */ }
        </div>
        
        <div className="timer-counter">
          <h1>{formatTime(time)}</h1>
        </div>

        <div className="timer-controls">

          {!isRunning ? (
            <button onClick={handleStart}>
              <PlayArrowOutlinedIcon fontSize='.75rem' />
              {isStopped ? "Resume" : "Start"}
            </button>
          ) : (
            <button onClick={handleStop}>
              <PauseOutlinedIcon fontSize=".75rem" />
              Pause
            </button>
          )}
          {isStopped ? 
          <button onClick={handleReset}>
            <StopOutlinedIcon fontSize='.75rem' />
            Reset
          </button> : <></>}
        </div>
      </section>
    </>
  );
};

export default Timer;