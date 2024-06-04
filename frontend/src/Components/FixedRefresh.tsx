import React from 'react';
import RefreshIcon from '../Assets/refresh.svg';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

const FixedRefresh: React.FC = () => {
  const refreshPage = () => {
    window.location.reload();
    toast.success('The page has been refreshed!');
  };

  return (
    <>
      <Toaster />
      <button
        className="fixed bottom-4 right-4 bg-[#e5e5e5] border border-2 border-[#d89ca8] rounded-full p-2 shadow-lg"
        onClick={refreshPage}
      >
        <img src={RefreshIcon} alt="Refresh" className="w-6 h-6" />
      </button>
    </>
  );
};

export default FixedRefresh;
