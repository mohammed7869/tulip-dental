'use client';

import React from 'react';

interface DentalLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const DentalLoader: React.FC<DentalLoaderProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        {/* Main tooth shape with pulse animation */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full animate-pulse"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Tooth outline */}
          <path
            d="M50 10 C60 10, 70 15, 75 25 C80 35, 82 45, 80 55 C78 65, 75 70, 70 75 C65 80, 60 85, 50 85 C40 85, 35 80, 30 75 C25 70, 22 65, 20 55 C18 45, 20 35, 25 25 C30 15, 40 10, 50 10 Z"
            stroke="#0175e4"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
          />
          
          {/* Inner tulip design */}
          <path
            d="M45 25 C50 20, 55 20, 60 25 C58 30, 55 35, 50 35 C45 35, 42 30, 45 25 Z"
            fill="#e72802"
            className="animate-pulse"
          />
          
          {/* Crown detail */}
          <path
            d="M35 30 L45 25 L55 25 L65 30"
            stroke="#0175e4"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          
          {/* Root lines */}
          <path
            d="M40 75 L40 85 M50 75 L50 85 M60 75 L60 85"
            stroke="#0175e4"
            strokeWidth="2"
            className="animate-pulse"
          />
        </svg>
        
        {/* Rotating ring around the tooth */}
        <div className="absolute inset-0 animate-spin">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#0175e4"
              strokeWidth="2"
              strokeDasharray="8 8"
              fill="none"
              opacity="0.6"
            />
          </svg>
        </div>
        
        {/* Pulsing dots around the tooth */}
        <div className="absolute inset-0">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500 rounded-full animate-ping"
              style={{
                left: `${50 + 40 * Math.cos((i * 60) * Math.PI / 180)}%`,
                top: `${50 + 40 * Math.sin((i * 60) * Math.PI / 180)}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Loading text */}
      <p className="mt-4 text-gray-600 font-medium text-lg animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default DentalLoader;
