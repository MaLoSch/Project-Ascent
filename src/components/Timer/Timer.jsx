import { useState, useEffect } from 'react';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import StopOutlinedIcon from '@mui/icons-material/StopOutlined';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import TimeEditor from './TimerEditor/TimerEditor'; // Import the TimeEditor component
import useNoSleep from "use-no-sleep";
import './Timer.scss';

function TimerTest() {
  const [sleeping, setSleeping] = useState(false); // TEST
  const [timerMode, setTimerMode] = useState('countdown'); // 'countdown' or 'stopwatch'
  const [timerState, setTimerState] = useState('idle'); // 'idle', 'running', 'paused', 'finished'
  const [countdownTime, setCountdownTime] = useState(60000);
  const [time, setTime] = useState(countdownTime);
  const intervalTime = 500;

  useNoSleep(sleeping);

  useEffect(() => {
    let intervalId;

    if (timerState === 'running') {
      intervalId = setInterval(() => {
        setTime(prevTime => {
          if (timerMode === 'countdown') {
            if (prevTime > 0) {
              return prevTime - intervalTime;
            } else {
              setTimerState('finished');
              return 0;
            }
          } else {
            return prevTime + intervalTime;
          }
        });
      }, intervalTime);
    }

    return () => clearInterval(intervalId);
  }, [timerMode, timerState]);

  const toggleTimerMode = () => {
    setTimerMode(prevMode => {
      const newMode = prevMode === 'countdown' ? 'stopwatch' : 'countdown';
      setTimerState('idle');
      setTime(newMode === 'countdown' ? countdownTime : 0);
      return newMode;
    });
  };

  useEffect(() => {
    if (timerState === 'idle') {
      setTime(timerMode === 'countdown' ? countdownTime : 0);
    }
  }, [timerState, countdownTime, timerMode]);

  const formatTime = (time) => {
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / 60000) % 60;
    const hours = Math.floor(time / 3600000);

    if (timerMode === 'countdown' && timerState === 'idle') {
      return <TimeEditor time={{ hours, minutes, seconds }} setTime={setCountdownTime} />;
    }

    return (
      <>
        <span>{String(hours).padStart(2, '0')}</span>:
        <span>{String(minutes).padStart(2, '0')}</span>:
        <span>{String(seconds).padStart(2, '0')}</span>
      </>
    );
  };

  const handleStart = () => {
    setSleeping(true);
    setTimerState('running'); // set TimerState to "running"
  }

  const handleIdle = () => {
    setSleeping(false);
    setTimerState('idle'); // set TimerState to "idle"
  }

  const getControls = () => {
    switch (timerState) {
      case 'idle':
        return (
          <button onClick={handleStart}>
            <PlayArrowOutlinedIcon fontSize='.75rem' />
            <span className="button-label">Start</span>
          </button>
        );
      case 'running':
        return (
          <button onClick={() => setTimerState('paused')}>
            <PauseOutlinedIcon fontSize='.75rem' />
            <span className="button-label">Pause</span>
          </button>
        );
      case 'paused':
        return (
          <>
            <button onClick={() => setTimerState('running')}>
              <PlayArrowOutlinedIcon fontSize='.75rem' />
              <span className="button-label">Resume</span>
            </button>
            <button onClick={handleIdle}>
              <StopOutlinedIcon fontSize='.75rem' />
              <span className="button-label">Reset</span>
            </button>
          </>
        );
      case 'finished':
        return (
          <button onClick={handleIdle}>
            <StopOutlinedIcon fontSize='.75rem' />
            <span className="button-label">Reset</span>
          </button>
        );
      default:
        return <p>Error</p>;
    }
  };

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
        </div>
      </section>

      <section className="timer-container full-height side-padding">
        <div className="timer-counter">
          <h1 className="time">{formatTime(time)}</h1>
        </div>

        <div className="timer-controls">{getControls()}</div>
      </section>
    </>
  );
}

export default TimerTest;
