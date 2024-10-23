"use client";

import React, { useEffect, useState } from "react";

const ShootingStars: React.FC = () => {
  const [stars, setStars] = useState<{ id: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const createStars = () => {
      const newStars = Array.from({ length: 20 }, (_, index) => ({
        id: index,
        delay: Math.random() * 5,
        duration: 1 + Math.random() * 2,
      }));
      setStars(newStars);
    };

    createStars();
    const interval = setInterval(createStars, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="shooting-stars-container">
      {stars.map(star => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
      <style jsx>{`
        .shooting-stars-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }
        .shooting-star {
          position: absolute;
          width: 2px;
          height: 10px;
          background-color: white;
          border-radius: 50%;
          animation: shoot linear infinite;
        }
        @keyframes shoot {
          from {
            transform: translateX(0) translateY(0) rotate(-45deg);
            opacity: 1;
          }
          to {
            transform: translateX(1000px) translateY(1000px) rotate(-45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ShootingStars;
