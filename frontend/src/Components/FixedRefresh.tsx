import React from 'react';
import RefreshIcon from '/refresh.svg';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

const FixedRefresh: React.FC = () => {
  return (
    <>
      <Toaster />
      <button
        className="fixed bottom-4 right-4 bg-[#e5e5e5] border border-2 border-[#d89ca8] rounded-full p-2 shadow-lg"
        onClick={() => {
          // Add your refresh logic here
          toast.success('The page has been refreshed !');
        }}
      >
        <img src={RefreshIcon} alt="Refresh" className="w-6 h-6" />
      </button>
    </>
  );
};

export default FixedRefresh;
