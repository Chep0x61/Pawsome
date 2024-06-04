import { get, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { database } from '../firebase';

import Doggo from "../Assets/doggo.jpg";

const Avatar = () => {
  const [isArduinoOnline, setIsArduinoOnline] = useState(false);

  useEffect(() => {
    const isArduinoOnlineRef = ref(database, 'isArduinoOnline');
  
    get(isArduinoOnlineRef).then((snapshot) => {
      const value = snapshot.val();
      console.log('isArduinoOnline:', value);
      setIsArduinoOnline(value);
    });
  }, []);
  

  return (
    <div className="flex gap-4">
      <div className="relative inline-flex my-4">
        <img
          src={Doggo}
          alt="avatar"
          className="border border-4 border-[#d89ca8] inline-block relative object-cover object-center rounded-full w-44 h-44 md:w-52 md:h-52"
        />
        <span
          className={`absolute min-w-[18px] min-h-[18px] rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none grid place-items-center top-[14%] right-[14%] translate-x-2/4 -translate-y-2/4 ${isArduinoOnline ? 'bg-green-500' : 'bg-red-500'} text-white border-2 border-white`}
        ></span>
      </div>
    </div>
  );
};

export default Avatar;
