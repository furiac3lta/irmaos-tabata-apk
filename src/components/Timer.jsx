import React, { useState, useEffect } from 'react';
import ProgressCircle from './ProgressCircle';
import { Link } from 'react-router-dom';

const Timer = ({ settings }) => {
  const [timeLeft, setTimeLeft] = useState(settings.warmupTime);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState('warmup');
  const [cycle, setCycle] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            return prev;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  useEffect(() => {
    if (timeLeft <= 0) {
      switch (mode) {
        case 'work':
          setMode('rest');
          setTimeLeft(settings.restTimeMinutes * 60 + settings.restTimeSeconds);
          break;
        case 'rest':
          if (cycle + 1 === settings.cycles) {
            setIsRunning(false);
            setCycle(0);
            setMode('warmup');
            setTimeLeft(settings.warmupTime);
          } else {
            setMode('warmup');
            setTimeLeft(settings.warmupTime);
            setCycle((prev) => prev + 1);
          }
          break;
        case 'warmup':
          setMode('work');
          setTimeLeft(settings.workTimeMinutes * 60 + settings.workTimeSeconds);
          break;
        default:
          break;
      }
    }
  }, [timeLeft, mode, settings, cycle]);

  useEffect(() => {
    const totalTime = mode === 'work' ? settings.workTimeMinutes * 60 + settings.workTimeSeconds : mode === 'rest' ? settings.restTimeMinutes * 60 + settings.restTimeSeconds : settings.warmupTime;
    setPercentage(((totalTime - timeLeft) / totalTime) * 100);
  }, [timeLeft, mode, settings]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setMode('warmup');
    setTimeLeft(settings.warmupTime);
    setCycle(0);
    setPercentage(0);
  };

  return (
      
    <div className="timer">
      <h1 className={`mode-label ${mode}`}>{mode.toUpperCase()}</h1>
      <ProgressCircle percentage={percentage} timeLeft={timeLeft} mode={mode} 
       />
      <div className="cycle-info">
        Cycle {cycle + 1} / {settings.cycles}
      </div>
      <div className="controls">
        <button onClick={handleStartPause} className="btn">
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={handleReset} className="btn">
          Reset
        </button>
        <Link to="/settings" state={{ settings }}>
          <button className="btn">Settings</button>
        </Link>
      </div>
    </div>
  );
};

export default Timer;
