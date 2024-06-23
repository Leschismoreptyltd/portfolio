import React, { useEffect, useState } from 'react';

const FlipUnit = ({ current, previous }) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (current !== previous) {
      setFlipped(true);
      const timeout = setTimeout(() => setFlipped(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [current, previous]);

  return (
    <div className="flip-unit">
      <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">{previous}</div>
        <div className="flip-card-back">{current}</div>
      </div>
    </div>
  );
};

export default FlipUnit;