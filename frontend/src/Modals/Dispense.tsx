import React from 'react';
import SlideButton from 'react-slide-button';
import ShimmerButton from '../Components/ShimmerButton';
import toast from 'react-hot-toast';

interface DispenseProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const Dispense: React.FC<DispenseProps> = ({ onConfirm, onCancel }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-1">
        <div className="flex justify-between w-80 mb-4">
          <p className="text-lg font-semibold text-center">Are you sure you want to dispense a portion of food?</p>
        </div>
        <SlideButton
          mainText="Slide to confirm"
          overlayText="Confirmed"
          onSlideDone={() => {
            onConfirm();
            toast.success('A portion of food has been dispensed !');
          }}
          customCaretWidth={40}
          minSlideWidth={0.8}
          minSlideVelocity={0.6}
          classList="w-64 h-12 bg-gray-200 rounded-full"
          overlayClassList="bg-[#d89ca8]"
          caretClassList="bg-white rounded-full shadow-md"
        />
        <ShimmerButton
          background="#e5e5e5"
          shimmerSize="0.1em"
          shimmerColor="#d89ca8"
          shimmerDuration="3s"
          onClick={() => {
            onCancel();
            toast.error('No food has been dispensed.');
          }}
          className="mt-4 gap-4 rounded-lg flex p-2 items-center justify-center overflow-hidden bg-[#D0D0D0] color-[#f8f8f8] transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#f8f8f8] before:duration-500 before:ease-out hover:before:h-60 hover:before:w-60 text-black hover:text-black"
        >
          <span className="z-10 text-center">❌ Cancel</span>
        </ShimmerButton>
      </div>
    </>
  );
};

export default Dispense;
