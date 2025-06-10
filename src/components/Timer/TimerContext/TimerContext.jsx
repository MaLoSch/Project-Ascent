import { createContext, useContext, useEffect, useState } from 'react';

export const TimerContext = createContext();
export const useTimer = () => useContext(TimerContext);

export const TimerProvider = ({ children }) => {
  const [time, setTime] = useState(0);
  const [timerState, setTimerState] = useState('idle');
  const [timerMode, setTimerMode] = useState('countdown'); // Needed to distinguish mode
  const [countdownTime, setCountdownTime] = useState(60000); // 1 min
  const intervalTime = 500;

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
    } else if (timerState === 'idle') {
      setTime(timerMode === 'countdown' ? countdownTime : 0);
    }

    return () => clearInterval(intervalId);
  }, [timerState, timerMode, countdownTime]);

  return (
    <TimerContext.Provider value={{
      time, setTime,
      timerState, setTimerState,
      timerMode, setTimerMode,
      countdownTime, setCountdownTime
    }}>
      {children}
    </TimerContext.Provider>
  );
};
