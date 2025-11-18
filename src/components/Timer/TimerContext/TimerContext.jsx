import { createContext, useContext, useEffect, useState, useCallback } from 'react';

export const TimerContext = createContext();
export const useTimer = () => useContext(TimerContext);

export const TimerProvider = ({ children }) => {
  const [time, setTime] = useState(0);
  const [timerState, setTimerState] = useState('idle');
  const [timerMode, setTimerMode] = useState('countdown'); // Needed to distinguish mode
  const [countdownTime, setCountdownTime] = useState(60000); // 1 min
  const intervalTime = 10;

  // Define a function `playBeep` using `useCallback` so it doesn't get recreated on every render
const playBeep = useCallback((type) => {
  
  console.log(type);
  var beepTime, stopTime;

  switch(type) {
    case "short":
      beepTime = .15;
      stopTime = .25;
      break;
    case "long":
      beepTime = .4;
      stopTime = .5;
      break;
    default:
      beepTime = .15;
      stopTime = .25;
      break;
  }

  const context = new AudioContext(); // Create a new AudioContext, which is the main object for handling audio
  const oscillator = context.createOscillator(); // Create an oscillator node that generates periodic waveforms (sound)
  const gainNode = context.createGain(); // Create a gain node, which controls the volume of the sound

  oscillator.connect(gainNode); // Connect the oscillator output to the gain node input
  gainNode.connect(context.destination); // Connect the gain node output to the audio context's destination (speakers)
  oscillator.frequency.value = 800; // Set the oscillator frequency to 800 Hz (the pitch of the beep)
  
  oscillator.type = "sine"; // Set the waveform type of the oscillator to "sine" (smooth tone)
  gainNode.gain.setValueAtTime(0.3, context.currentTime); // Set the initial gain (volume) to 0.3 at the current audio time
  gainNode.gain.setValueAtTime(0.3, context.currentTime + beepTime); // Stay at the current gain level for "beepTime"
  
  // Reduce the volume exponentially to 0.01 until stopTime (fade out)
  gainNode.gain.exponentialRampToValueAtTime(
    0.01,
    context.currentTime + stopTime,
  );

  oscillator.start(context.currentTime); // Start the oscillator immediately
  oscillator.stop(context.currentTime + stopTime); // Stop the oscillator after stopTime
// Empty dependency array ensures `playBeep` is only created once
}, []);

  useEffect(() => {
    let intervalId;

    if (timerState === 'running') {
      intervalId = setInterval(() => {
        setTime(prevTime => {
          if (timerMode === 'countdown') {
            if (prevTime > 0) {
              // if less than three seconds are left AND on the second exactly, call the beep function
              if(prevTime <= 3000 && prevTime % 1000 == 0) {
                playBeep("short");
              }
              return prevTime - intervalTime;
            } else {
              playBeep("long");
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
  }, [
    timerState,
    timerMode,
    countdownTime,
    playBeep,
  ]);

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
