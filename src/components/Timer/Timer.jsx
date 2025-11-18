import { useState } from 'react';
import { useTimer } from './TimerContext/TimerContext';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import StopOutlinedIcon from '@mui/icons-material/StopOutlined';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import TimeEditor from './TimerEditor/TimerEditor';
import useNoSleep from "use-no-sleep";
import './Timer.scss';

function Timer() {
  const [noSleep, setNoSleep] = useState(false);
  const {
    time,
    setTime,
    timerState,
    setTimerState,
    timerMode,
    setTimerMode,
    countdownTime,
    setCountdownTime
  } = useTimer();

  useNoSleep(noSleep);

  const toggleTimerMode = () => {
    setNoSleep(false);
    setTimerMode(prevMode => {
      const newMode = prevMode === 'countdown' ? 'stopwatch' : 'countdown';
      setTimerState('idle');
      setTime(newMode === 'countdown' ? countdownTime : 0);
      return newMode;
    });
  };

  const handleStart = () => {
    setNoSleep(true);
    setTimerState('running');
  };

  const handleIdle = () => {
    setNoSleep(false);
    setTimerState('idle');
  };

  const formatCountdownTime = (time) => {
    const millis = Math.floor(time % 1000) / 10;
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
        <span className="millis">{String(millis).padStart(2, '0')}</span>
      </>
    );
  };

  const getControls = () => {
    switch (timerState) {
      case 'idle':
        return (
          <button onClick={handleStart}>
            <PlayArrowOutlinedIcon fontSize=".75rem" />
            <span className="button-label">Start</span>
          </button>
        );
      case 'running':
        return (
          <button onClick={() => setTimerState('paused')}>
            <PauseOutlinedIcon fontSize=".75rem" />
            <span className="button-label">Pause</span>
          </button>
        );
      case 'paused':
        return (
          <>
            <button onClick={() => setTimerState('running')}>
              <PlayArrowOutlinedIcon fontSize=".75rem" />
              <span className="button-label">Resume</span>
            </button>
            <button onClick={handleIdle}>
              <StopOutlinedIcon fontSize=".75rem" />
              <span className="button-label">Reset</span>
            </button>
          </>
        );
      case 'finished':
        return (
          <button onClick={handleIdle}>
            <StopOutlinedIcon fontSize=".75rem" />
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
          <p className={`timer-label left ${timerMode === "countdown" ? "active" : ""}`}>Countdown</p>
          <label className="switch">
            <input type="checkbox" onClick={toggleTimerMode} />
            <span className="slider round" />
          </label>
          <p className={`timer-label ${timerMode === "stopwatch" ? "active" : ""}`}>Stopwatch</p>
        </div>
      </section>

      <section className={"timer-container full-height side-padding"}>
        
        {/**

        <div className="timer-sets">
          <h1 className="set-time">{formatTime(time)}</h1>
        </div>

        <div className="timer-reps">
          <h1 className="rep-time">{formatTime(time)}</h1>
        </div>

        */}

        <div className="timer-counter">
          <h1 className="counter-time">{formatCountdownTime(time)}</h1>
        </div>

        <div className="timer-controls">{getControls()}</div>
      </section>
    </>
  );
}

export default Timer;
