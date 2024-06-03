import React from 'react';

interface CircularProgressBarProps {
  percentage: string;
  color: string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ percentage, color }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (parseInt(percentage) / 100) * circumference;

  return (
    <svg className='w-20 h-20 md:w-24 md:h-24 overflow-hidden' viewBox="0 0 100 100">
      <circle
        stroke="#e0e0e0"
        fill="transparent"
        r={radius}
        cx="50"
        cy="55"
        strokeWidth="10"
      />
      <circle
        stroke={color}
        fill="transparent"
        r={radius}
        cx="50"
        cy="55"
        strokeWidth="10"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform="rotate(-90 50 55)"
      />
      <text className='font-bold text-2xl' x="50" y="55" textAnchor="middle" dy=".3em">
        {percentage}%
      </text>
    </svg>
  );
};

export default CircularProgressBar;
