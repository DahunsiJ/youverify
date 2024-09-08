
import React, { useState, useEffect, useRef } from 'react';

const CounterCard = ({ value, title, Icon, duration }) => {
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
    <div
      ref={countRef}
      className="bg-orange-100 px-16 w-56 transition-all duration-500 py-8 hover:bg-orange-600 hover:scale-105 hover:text-white text-orange-500 flex items-center justify-center flex-col"
    >
      {Icon}
      <span className="text-4xl block font-semibold">{count}</span>
      <span>{title}</span>
    </div>
  );
};

export default CounterCard;
