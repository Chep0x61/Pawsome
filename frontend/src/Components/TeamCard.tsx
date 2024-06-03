import React from 'react';

interface TeamCardProps {
    firstName: string;
    lastName: string;
    position: string;
    image: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ firstName, lastName, position, image }) => {
    return (
        <div className="p-4 bg-[#e5e5e5] border border-[#d89ca8] border-2 rounded-lg shadow-xl flex flex-col items-center">
            <div className="w-28 h-28 rounded-full overflow-hidden mb-2 bg-gray-100">
                <img src={image} alt={`${firstName} ${lastName}`} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold text-[#1a1a1a]">{`${firstName} ${lastName}`}</h3>
            <p className="text-[#af1743] font-medium">{position}</p>
        </div>
    );
};

export default TeamCard;
