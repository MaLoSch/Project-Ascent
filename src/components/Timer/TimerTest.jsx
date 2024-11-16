import React, { useState, useEffect } from 'react';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import StopOutlinedIcon from '@mui/icons-material/StopOutlined';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import './Timer.scss'

function TimerTest() {

  const [timerMode, setTimerMode] = useState('countdown'); // keep track of timer mode (countdown and stopwatch)
  const [timerState, setTimerState] = useState('idle'); // states to keep track of different states
  const [countdownTime, setCountdownTime] = useState(3000);
  const [time, setTime] = useState(0);

  const intervalTime = 500; // interval used to increment / decrement time

  useEffect(() => {
    let intervalId; // variable to store setInterval function. This is used to clean up the interval when unmounting the component
    
    if(timerState === 'running') {
      
      // update time every interval when the timer is running
      intervalId = setInterval(() => {
        
        // useState function to set the time (where does prevTime come from?)
        setTime(prevTime => {
          
          if(timerMode === 'countdown') {
            // countdown mode

            if(prevTime > 0) {
              // there is still time left in the countdown
              return prevTime - intervalTime; // substract intervalTime from the remaining time
            } else {
              // no time remaining
              setTimerState('finished')
              return 0;
            }
          } else {
            // stopwatch mode
            return prevTime + intervalTime; // add intervalTime to prevTime
          }
        });
      }, intervalTime);
    }

    // Clean-up interval when component dismounts or when timer stops
    return () => clearInterval(intervalId);

  }, [timerMode, timerState]);

  const toggleTimerMode = () => {
    if(timerMode === 'countdown') {
      setTimerMode('stopwatch');
    } else {
      setTimerMode('countdown');
    }
  }

  const handleTimerStateChange = (newState) => {
    setTimerState(newState);
  }

  const changeHours = () => {}
  const changeMinutes = () => {}
  const changeSeconds = () => {}

  const formatTime = (time) => {
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / 60000);
    const hours = Math.floor(time / 3600000);
    
    return <>
      <span onClick={changeHours} className="hours">{String(hours).padStart(2, '0')}</span>:
      <span onClick={changeMinutes} className="minutes">{String(minutes).padStart(2, '0')}</span>:
      <span onClick={changeSeconds} className="seconds">{String(seconds).padStart(2, '0')}</span>
    </>;

    time = <>
      <span>00</span>
      :
      <span>00</span>
      :
      <span>00</span>
    </>
    return time;
  }

  // function to get the controls based on the current timer mode and timer state
  const getControls = () => {
    
    // variable to store the control UI
    let controls;

    switch(timerState) {
      // when the timer is idle
      case 'idle':
        controls = 
          <>
            <button onClick={() => handleTimerStateChange('running')}>
              <PlayArrowOutlinedIcon fontSize='.75rem' />
              <span className="button-label">Start</span>
            </button>
          </>
        break;

      // when the timer is running
      case 'running':
        controls =
          <>
            <button onClick={() => handleTimerStateChange('paused')}>
              <PauseOutlinedIcon fontSize='.75rem' />
              <span className="button-label">Pause</span>
            </button>
          </>
        break;

      // when the timer is paused
      case 'paused':
        controls =
          <>
            <button onClick={() => handleTimerStateChange('running')}>
              <PlayArrowOutlinedIcon fontSize='.75rem' />
              <span className="button-label">Resume</span>
            </button>
            <button onClick={() => handleTimerStateChange('idle')}>
              <StopOutlinedIcon fontSize='.75rem' />
              <span className="button-label">Reset</span>
            </button>
          </>
        break;

      // default state to catch potential errors
      default:
        controls = 
          <p>We encountered an error. Sorry, eh!</p>
        break;
    }

    // return the controls to the UI
    return controls;
  }

  return (
    <>
      <section className="side-padding">
        <div className="timer-mode">
          <p className="timer-label left">Countdown</p>
          <label className="switch">
            <input type="checkbox" onClick={toggleTimerMode} />
            <span className="slider round" />
          </label>
          <p className="timer-label">Stopwatch</p>
              {/* {isCountdown ? "Switch to Stopwatch" : "Switch to Countdown"} */ }
        </div>
      </section>

      <section className="timer-container full-height side-padding">
        
        <div className="timer-counter">
          <h1 className="time">{formatTime(time)}</h1>
        </div>

        <div className="timer-controls">
          {getControls()}
        </div>
      </section>
    </>
  );
};

export default TimerTest;