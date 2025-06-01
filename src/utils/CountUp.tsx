import React, { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const startTime = Date.now();
    const startValue = 0;
    const endValue = end;
    const changeValue = endValue - startValue;

    const easeOutCubic = (t: number) => {
      return 1 - Math.pow(1 - t, 3);
    };

    const updateCount = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      
      countRef.current = Math.floor(startValue + changeValue * easedProgress);
      setCount(countRef.current);

      if (progress < 1) {
        timerRef.current = window.requestAnimationFrame(updateCount);
      }
    };

    timerRef.current = window.requestAnimationFrame(updateCount);

    return () => {
      if (timerRef.current !== null) {
        window.cancelAnimationFrame(timerRef.current);
      }
    };
  }, [end, duration]);

  return <span>{count}</span>;
};

export default CountUp;