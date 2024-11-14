import React, { useState, useEffect } from 'react';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import StopOutlinedIcon from '@mui/icons-material/StopOutlined';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import './Timer.scss'

function Timer() {
  const [time, setTime] = useState(0);  // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false);  // Track if the timer is running
  const [isStopped, setIsStopped] = useState(false); // Track if the timer is stopped
  const [isCountdown, setIsCountdown] = useState(false); // track if timer is in countdown mode or stopwatch mode
  const [isFinished, setIsFinished] = useState(false); // track if timer is finished (only applicable in countdown mode)

  const intervalTime = 500; // interval time used to increment / decrement time -> 500ms is half a second

  const fixedCountdownTime = 3000; // 1 minute in milliseconds

  useEffect(() => {
    let intervalId; // variable to store setInterval function. This is used to cleanup the interval when the component is dismounted

    if (isRunning) {
      // Update time every second when the timer is running
      intervalId = setInterval(() => {
        setTime(prevTime => {
          // countdown mode -> decrement timer
          if(isCountdown) {
            console.log(prevTime)
            if(prevTime > 0) {
              return prevTime - intervalTime;
            } else {
              // countdown hits 0
              handleFinished(); // reset the timer !!!!! this should be handled differently
              return 0; // set clock to 0
            }
            //return prevTime > 0 ? prevTime - intervalTime : 0;
          
            // stopwatch mode -> increment time
          } else {
            return prevTime + intervalTime;
          }
        });
      }, intervalTime); // interval time should be a variable
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

  const handleFinished = () => {
    setIsFinished(true);
    setIsRunning(false);
    setIsStopped(true);
  }

  const toggleMode = () => {
    setIsRunning(false);
    setIsStopped(false);
    setIsCountdown(!isCountdown);
    setTime(!isCountdown ? fixedCountdownTime : 0); // set intial time based on mode
  }

  const changeHours = () => {
    console.log("change hours");
  }

  const changeMinutes = () => {
    console.log("change minutes");
  }

  const changeSeconds = () => {
    console.log("change seconds");
  }

  // Helper function to format time
  const formatTime = (time) => {
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / 60000);
    const hours = Math.floor(time / 3600000);
    
    return <>
      <span onClick={changeHours} className="hours">{String(hours).padStart(2, '0')}</span>:
      <span onClick={changeMinutes} className="minutes">{String(minutes).padStart(2, '0')}</span>:
      <span onClick={changeSeconds} className="seconds">{String(seconds).padStart(2, '0')}</span>
    </>;
  };

  return (
    <>
      <section className="side-padding">
        <div className="timer-mode">
          <p className="timer-label left">Stopwatch</p>
          <label className="switch">
            <input type="checkbox" onClick={toggleMode} />
            <span className="slider round" />
          </label>
          <p className="timer-label">Countdown</p>
              {/* {isCountdown ? "Switch to Stopwatch" : "Switch to Countdown"} */ }
        </div>
      </section>

      <section className="timer-container full-height side-padding">
        
        <div className="timer-counter">
          <h1 className="time">{formatTime(time)}</h1>
        </div>

        <div className="timer-controls">

          {!isRunning ? (
            <button onClick={handleStart}>
              <PlayArrowOutlinedIcon fontSize='.75rem' />
              <span className="button-label">{isStopped ? "Resume" : "Start"}</span>
            </button>
          ) : (
            <button onClick={handleStop}>
              <PauseOutlinedIcon fontSize=".75rem" />
              <span className="button-label">Pause</span>
            </button>
          )}
          {isStopped ? 
          <button onClick={handleReset}>
            <StopOutlinedIcon fontSize='.75rem' />
            <span className="button-label">Reset</span>
          </button> : <></>}
        </div>
      </section>
    </>
  );
};

export default Timer;