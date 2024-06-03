import { useState } from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import FixedNavbar from "./Components/FixedNavbar";
import Hero from "./Pages/Landing/Hero";
import DotPattern from "./Components/Dot-pattern";
import Features from "./Pages/Landing/Features";
import Team from "./Pages/Landing/Team";
import Confetti from 'react-confetti';
import { Toaster } from 'react-hot-toast';
import Application from "./Pages/Landing/Application";
import Dashboard from "./Pages/App/Dashboard";

const App = () => {
    const [showConfetti, setShowConfetti] = useState(false);

    const handleConfettiClick = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 8000);
    };

    return (
        <Router>
            <div className="fixed z-[998]">
                <Toaster />
                {showConfetti && <Confetti numberOfPieces={100} recycle={false} width={window.innerWidth} height={window.innerHeight} />}
            </div>
            <DotPattern className="z-[-1]"/>
            <Routes>
                <Route path="/" element={
                    <>
                        <FixedNavbar onConfettiClick={handleConfettiClick} />
                        <Hero />
                        <Features />
                        <Team />
                        <Application />
                        <div className="mb-24"></div>
                    </>
                } />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
