import React from 'react';
import FeatureCard from '../../Components/FeatureCard';

const featuresData = [
  {
    title: "Self-Feeding Automation",
    description: "Allow your pets to feed themselves anytime, anywhere with automated feeding schedules, ensuring they get their meals even when you're not around.",
    icon: "🐾"
  },
  {
    title: "Remote Monitoring",
    description: "Easily monitor the status of your pet's bowl from anywhere using our app. Receive notifications for low food levels and keep track of their feeding habits.",
    icon: "📱"
  },
  {
    title: "Customizable Feeding Limits",
    description: "Set daily feeding limits and control portion sizes to ensure your pets get the right amount of food. Adjust settings remotely to fit your pet's specific dietary needs.",
    icon: "📊"
  }
];


const Features: React.FC = () => {
  return (
    <div id="project-section" className="flex flex-col items-center text-center mb-2">
      <h2 className="text-4xl font-bold mt-4 mb-4 underline decoration-[#AF1743]">Our Project</h2>
      <p className="text-lg max-w-[80%] md:max-w-[64%] lg:max-w-[720px] font-medium my-4">With Pawsome, let your pets feed themselves anytime, anywhere, while you stay in control. Monitor bowl status, set daily limits and feed them when needed. Effortless and stress-free feeding at your fingertips !</p>

      <div className="grid grid-cols-1 justify-items-center">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            iconPosition={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
