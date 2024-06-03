import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  iconPosition: 'left' | 'right';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, iconPosition }) => {
  return (
    <div className={`flex flex-col w-[90%] md:w-4/5 lg:max-w-[900px] p-4 bg-[#e5e5e5] border border-[#d89ca8] border-2 rounded shadow-lg mb-4 flex`}>
      <div className={`flex justify-between ${iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse'} items-center mb-2`}>
      <p className="text-3xl sm:text-4xl md:text-5xl">{icon}</p>
      <h3 className="text-xl sm:text-2xl font-bold mb-2 underline decoration-[#af1743]">{title}</h3>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
