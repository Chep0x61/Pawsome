import React, { useState, useEffect } from 'react';
import { ref, get } from 'firebase/database';
import { database } from '../../firebase';
import CustomModal from '../../Components/CustomModal';
import Adjust from '../../Modals/Adjust';
import Dispense from '../../Modals/Dispense';
import StatCard from '../../Components/StatCard';
import Avatar from '../../Components/Avatar';
import DotPattern from '../../Components/Dot-pattern';
import ShimmerButton from '../../Components/ShimmerButton';
import FixedRefresh from '../../Components/FixedRefresh';
import Confetti from 'react-confetti';

const Dashboard: React.FC = () => {
  const [kibblesLeft, setKibblesLeft] = useState('?');
  const [dailyRequestCounter, setDailyRequestCounter] = useState('?');
  const [dailyFeedCounter, setDailyFeedCounter] = useState('?');
  const [dailyServiceLimit, setDailyServiceLimit] = useState(0);

  useEffect(() => {
    const kibblesLeftRef = ref(database, 'kibblesLeft');
    const dailyRequestCounterRef = ref(database, 'dailyRequestCounter');
    const dailyFeedCounterRef = ref(database, 'dailyFeedCounter');
    const dailyServiceLimitRef = ref(database, 'dailyServiceLimit');

    get(kibblesLeftRef).then((snapshot) => {
      setKibblesLeft(snapshot.val());
    });

    get(dailyRequestCounterRef).then((snapshot) => {
      setDailyRequestCounter(snapshot.val());
    });

    get(dailyFeedCounterRef).then((snapshot) => {
      setDailyFeedCounter(snapshot.val());
    });

    get(dailyServiceLimitRef).then((snapshot) => {
      setDailyServiceLimit(Number(snapshot.val()));
    });
  }, []);

  const statsData = [
    { title: 'Feed', value: dailyFeedCounter, icon: '😋' },
    { title: 'Remaining', value: kibblesLeft, icon: '🎚️', circle: true },
    { title: 'Limit', value: dailyServiceLimit, icon: '🛑' },
    { title: 'Requests', value: dailyRequestCounter, icon: '🙀' },
  ];

  const [modalState, setModalState] = useState({
    isDispenseModalOpen: false,
    isAdjustModalOpen: false,
    limit: dailyServiceLimit,
  });

  useEffect(() => {
    setModalState((prevState) => ({
      ...prevState,
      limit: dailyServiceLimit,
    }));
  }, [dailyServiceLimit]);

  const [showConfetti, setShowConfetti] = useState(false);

  const toggleModal = (modal: 'dispense' | 'adjust', limit?: number) => {
    setModalState(prevState => ({
      ...prevState,
      [`is${modal.charAt(0).toUpperCase() + modal.slice(1)}ModalOpen` as keyof typeof prevState]: !prevState[`is${modal.charAt(0).toUpperCase() + modal.slice(1)}ModalOpen` as keyof typeof prevState],
      limit: limit !== undefined ? limit : prevState.limit,
    }));
  };

  const handleConfirm = () => {
    // Add your logic for confirming the action of feeding the animal
    toggleModal('dispense');
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 6000); // Hide the confetti after 3 seconds
  };

  const handleCancel = () => {
    // Add your logic for canceling the action of feeding the animal
    toggleModal('dispense');
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center text-center">
      {showConfetti && <Confetti numberOfPieces={200} />}
      <DotPattern className="z-[-1]" />
      <FixedRefresh />
      <Avatar />
      <p className="font-semibold text-lg mb-1">Daily Stats below about your Pawsome.</p>
      <div className="grid grid-cols-2 gap-4">
        {statsData.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} icon={stat.icon} circle={stat.circle} />
        ))}
      </div>

      <div className="mt-4 flex flex-col justify-center items-center gap-4">
        <ShimmerButton
          background="#e5e5e5"
          shimmerSize="0.1em"
          shimmerColor="#d89ca8"
          shimmerDuration="3s"
          onClick={() => toggleModal('adjust')}
          className="gap-2 rounded-lg flex p-2 items-center justify-center overflow-hidden bg-[#D0D0D0] color-[#f8f8f8] transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#f8f8f8] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 text-black hover:text-black"
        >
          <span className="z-10 text-center">🔐 Adjust the daily limit</span>
        </ShimmerButton>

        <ShimmerButton
          background="#e5e5e5"
          shimmerSize="0.1em"
          shimmerColor="#d89ca8"
          shimmerDuration="3s"
          onClick={() => toggleModal('dispense')}
          className="gap-2 rounded-lg flex p-2 items-center justify-center overflow-hidden bg-[#D0D0D0] color-[#f8f8f8] transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#f8f8f8] before:duration-500 before:ease-out hover:before:h-60 hover:before:w-60 text-black hover:text-black"
        >
          <span className="z-10 text-center">💝 Dispense a portion of food</span>
        </ShimmerButton>
      </div>

      <CustomModal isOpen={modalState.isDispenseModalOpen} onRequestClose={() => toggleModal('dispense')}>
        <Dispense onConfirm={handleConfirm} onCancel={handleCancel} />
      </CustomModal>

      <CustomModal isOpen={modalState.isAdjustModalOpen} onRequestClose={() => toggleModal('adjust')}>
        <Adjust initialLimit={modalState.limit} onConfirm={(limit) => toggleModal('adjust', limit)} onCancel={() => toggleModal('adjust')} />
      </CustomModal>
    </div>
  );
};

export default Dashboard;
