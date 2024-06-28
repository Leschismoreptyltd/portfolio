import React, { useState, useEffect } from 'react';
import '../../styleSheets/gptFlipClock.css'; // Make sure to create this CSS file

const GptFlipClock = () => {
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setHours(now.getHours());
      setMinutes(now.getMinutes());
      setSeconds(now.getSeconds());
      setFlip(prevFlip => !prevFlip);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FBFAF8]">
      <div className="flip-clock">
        <div className={`flip-clock-card ${flip ? 'flip' : ''}`}>
          <div className="flip-clock-top">{formatTime(hours)}</div>
          <div className="flip-clock-bottom">{formatTime(hours)}</div>
        </div>
        <div className={`flip-clock-card ${flip ? 'flip' : ''}`}>
          <div className="flip-clock-top">{formatTime(minutes)}</div>
          <div className="flip-clock-bottom">{formatTime(minutes)}</div>
        </div>
        <div className={`flip-clock-card ${flip ? 'flip' : ''}`}>
          <div className="flip-clock-top">{formatTime(seconds)}</div>
          <div className="flip-clock-bottom">{formatTime(seconds)}</div>
        </div>
      </div>
    </div>
  );
};

export default GptFlipClock;
