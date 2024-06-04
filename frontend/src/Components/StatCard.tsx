import React from 'react';
import CircularProgressBar from './CircularProgressBar';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  circle?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, circle = false }) => {
  return (
    <div className="flex flex-col justify-start items-center p-2 w-32 h-32 md:w-36 md:h-36 bg-[#e5e5e5] border border-2 border-[#d89ca8] rounded-lg shadow-xl">
      <div className='flex justify-between items-center w-full mx-1'>
        <p className='text-xl'>{icon}</p>
        <h3 className='text-sm md:text-base font-semibold text-red-400'>{title}</h3>
      </div>
      <div className="flex flex-grow justify-center items-center">
        {circle ? (
          <CircularProgressBar percentage={String(value)} color={"#d89ca8"} />
        ) : (
          <p className='text-xl md:text-2xl font-bold'>{value}</p>
        )}
      </div>
    </div>
  );
};

export default StatCard;
