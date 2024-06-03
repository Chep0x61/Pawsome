import React, { useState } from 'react';
import ShimmerButton from '../Components/ShimmerButton';
import toast from 'react-hot-toast';

interface AdjustProps {
  initialLimit: number;
  onConfirm: (limit: number) => void;
  onCancel: () => void;
}

const Adjust: React.FC<AdjustProps> = ({ initialLimit, onConfirm, onCancel }) => {
  const [limit, setLimit] = useState(initialLimit);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(Number(event.target.value));
  };

  const handleConfirm = () => {
    onConfirm(limit);
    toast.success('The daily limit has been updated !');
  };

  const handleCancel = () => {
    toast.error('The daily limit has not been changed.');
    onCancel();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-between w-80 mb-4">
          <p className="text-lg font-semibold text-center">Adjust the daily allowed serving quantity</p>
        </div>
        <p className="mb-4 text-lg font-semibold">Current limit : {limit}</p>
        <input
          type="range"
          min="0"
          max="20"
          value={limit}
          onChange={handleChange}
          className="w-64"
        />
        <div className='flex gap-4'>
          <ShimmerButton
            background="#e5e5e5"
            shimmerSize="0.1em"
            shimmerColor="#d89ca8"
            shimmerDuration="3s"
            onClick={handleCancel}
            className="mt-4 gap-4 rounded-lg flex p-2 items-center justify-center overflow-hidden bg-[#D0D0D0] color-[#f8f8f8] transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#f8f8f8] before:duration-500 before:ease-out hover:before:h-60 hover:before:w-60 text-black hover:text-black"
          >
            <span className="z-10 text-center">❌ Cancel</span>
          </ShimmerButton>
          <ShimmerButton
            background="#e5e5e5"
            shimmerSize="0.1em"
            shimmerColor="#d89ca8"
            shimmerDuration="3s"
            onClick={handleConfirm}
            className="mt-4 gap-4 rounded-lg flex p-2 items-center justify-center overflow-hidden bg-[#D0D0D0] color-[#f8f8f8] transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#f8f8f8] before:duration-500 before:ease-out hover:before:h-60 hover:before:w-60 text-black hover:text-black"
          >
            <span className="z-10 text-center">✅ Confirm</span>
          </ShimmerButton>
        </div>
      </div>
    </>
  );
};

export default Adjust;
