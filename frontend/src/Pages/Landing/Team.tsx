import React from 'react';
import TeamCard from '../../Components/TeamCard';

interface TeamMember {
    id: number;
    firstName: string;
    lastName: string;
    position: string;
    image: string;
}

const Team: React.FC = () => {
    const teamMembers: TeamMember[] = [
        { id: 1, firstName: 'Jeanne', lastName: 'Boulet', position: 'Team Frontend', image: '/victor.guyot@epitech.eu.jpg' },
        { id: 2, firstName: 'Jozuha', lastName: 'Bastiani', position: 'Team Hardware', image: '/maxence.amouroux@epitech.eu.jpg' },
        { id: 3, firstName: 'Mathias', lastName: 'De Busschere', position: 'Team Hardware', image: '/alexandre.coyras@epitech.eu.jpg' },
        { id: 4, firstName: 'Thibault', lastName: 'Thuillier', position: 'Team Frontend', image: '/thibault.thuillier@epitech.eu.jpg' },

    ];

    return (
        <div id="team-section" className="flex flex-col items-center my-8">
            <h2 className="text-4xl font-bold mb-4 underline decoration-[#AF1743]">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {teamMembers.map(member => (
                    <TeamCard
                        key={member.id}
                        firstName={member.firstName}
                        lastName={member.lastName}
                        position={member.position}
                        image={member.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Team;
