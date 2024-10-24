import React, { useState, useEffect } from 'react';
import './Timer.scss'

const Timer = () => {
  const [time, setTime] = useState(0);  // Time in seconds
  const [isRunning, setIsRunning] = useState(false);  // Track if the timer is running

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      // Update time every second when the timer is running
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    }

    // Cleanup interval on component unmount or when timer stops
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  // Helper function to format time
  const formatTime = (time) => {
    const milliseconds = time % 1000;
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / 60000);
    
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(Math.floor(milliseconds / 10)).padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      {!isRunning ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <button onClick={handleStop}>Stop</button>
      )}
      
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;