import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressCircle = ({ percentage, timeLeft, mode }) => {
  let color;
  switch (mode) {
    case 'work':
      color = '#738eee'; // Rojo para el trabajo
      break;
    case 'rest':
      color = '#66cdaa'; // Verde para el descanso
      break;
    case 'warmup':
      color = '#e6711b'; // Amarillo para el calentamiento
      break;
    default:
      color = '#9a988d';
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <CircularProgressbar
      value={percentage}
      text={formatTime(timeLeft)}
      styles={buildStyles({
        pathColor: color,
        textColor: '#FFFFFF',
        trailColor: '#d6d6d6',
      })}
      strokeWidth={3}
    />
  );
};

export default ProgressCircle;
