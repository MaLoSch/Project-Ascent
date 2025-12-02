import { useTimer } from '../TimerContext/TimerContext';
import './MiniTimer.scss';

function MiniTimer() {
  const { activeTime, timerState, timerPhase, reps, sets } = useTimer();

  const formatTime = (time) => {
    const millis = Math.floor(time % 1000) / 10;
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / 60000) % 60;
    const hours = Math.floor(time / 3600000);

    return (
      <>
        <span>{String(hours).padStart(2, '0')}</span>:
        <span>{String(minutes).padStart(2, '0')}</span>:
        <span>{String(seconds).padStart(2, '0')}</span>:
        <span>{String(millis).padStart(2, '0')}</span>
      </>
    );
  };

  if (timerState !== 'running' && timerState !== 'paused') return null;

  return (
    <div className={`mini-timer ${timerState}`}>
      <div className="mini-timer-phase">
        <span>{timerPhase.charAt(0).toUpperCase() + timerPhase.slice(1)}</span>
      </div>
      <div className="mini-timer-display">
        {formatTime(activeTime)}
      </div>
      <div className="mini-timer-counter">
        <span>Reps: {reps}</span>
        &nbsp;
        <span>Sets: {sets}</span>
      </div>
    </div>
  );
}

export default MiniTimer;
