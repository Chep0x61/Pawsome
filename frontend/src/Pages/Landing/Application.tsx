import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShimmerButton from '../../Components/ShimmerButton';

const Application: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleButtonClick = () => {
        navigate('/dashboard');
    };

    return (
        <div id="application-section" className="flex flex-col items-center text-center mb-2">
            <h2 className="text-4xl font-bold mt-4 mb-8 underline decoration-[#AF1743]">Our Application</h2>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex">
                <ShimmerButton
                    background="#d89ca8"
                    shimmerColor="#1a1a1a"
                    shimmerDuration="3s"
                    borderRadius="10px"
                    onClick={handleButtonClick}
                    className="gap-2 rounded-lg flex p-2 items-center justify-center overflow-hidden bg-[#D0D0D0] color-[#f8f8f8] transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#f8f8f8] before:duration-500 before:ease-out hover:before:h-60 hover:before:w-60 text-black hover:text-black"
                >
                    <span className="relative z-10 text-center">🔎 Discover our Application</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`lucide lucide-arrow-right z-20 transition-transform ${isHovered ? 'translate-x-1.5' : ''}`}
                    >
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                    </svg>
                </ShimmerButton>
            </div>
        </div>
    );
};

export default Application;
