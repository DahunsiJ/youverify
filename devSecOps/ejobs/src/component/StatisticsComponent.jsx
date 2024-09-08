
import React, { useState, useEffect, useRef } from 'react';

const StatisticsComponent = ({ value, statisticTitle, Logo, duration }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  const end = parseInt(value, 10) || 0;
  const animDuration = parseInt(duration, 10) || 2000;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = end / (animDuration / 16);

          const timer = setInterval(() => {
            start += increment;
            setCount(Math.floor(start));

            if (start >= end) {
              clearInterval(timer);
              setCount(end);
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 } 
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, animDuration]);

  return (
    <div ref={countRef} className="w-auto">
      <div className="flex items-center gap-2 font-bold text-4xl text-slate-50">
        {Logo}
        <h2>{count}</h2>
      </div>
      <h1 className="text-slate-50 text-md">{statisticTitle}</h1>
    </div>
  );
};

export default StatisticsComponent;
