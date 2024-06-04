import { useState, useEffect } from "react";
import { toast } from 'react-hot-toast';
import ShimmerButton from "./ShimmerButton";
import Paw from "../Assets/paw.png";
import Rat from "../Assets/rat.svg";
import Cat from "../Assets/cat.svg";
import Dog from "../Assets/dog.svg";
import Fish from "../Assets/fish.svg";
import Squirrel from "../Assets/squirrel.svg";
import Rabbit from "../Assets/rabbit.svg";

interface FixedNavbarProps {
  onConfettiClick: () => void;
}

const FixedNavbar: React.FC<FixedNavbarProps> = ({ onConfettiClick }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [randomSvg, setRandomSvg] = useState<string | null>(null);
  const [currentSvgIndex, setCurrentSvgIndex] = useState(0);
  const [svgs] = useState([
    { name: 'Rat', svg: Rat },
    { name: 'Cat', svg: Cat },
    { name: 'Dog', svg: Dog },
    { name: 'Fish', svg: Fish },
    { name: 'Squirrel', svg: Squirrel },
    { name: 'Rabbit', svg: Rabbit }
  ]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * svgs.length);
    setRandomSvg(svgs[randomIndex].svg);
    setCurrentSvgIndex(randomIndex);
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;

    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollClick = (path: string) => {
    const websiteSection = document.getElementById(path);

    if (websiteSection) {
      const offsetTop = websiteSection.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleConfettiClick = () => {
    onConfettiClick();
  
    const animalName = svgs[currentSvgIndex].name;
    toast.success(`Your ${animalName} has been fed! ✨`);
  
    let newIndex = Math.floor(Math.random() * svgs.length);
    while (newIndex === currentSvgIndex) {
      newIndex = Math.floor(Math.random() * svgs.length);
    }
    setRandomSvg(svgs[newIndex].svg);
    setCurrentSvgIndex(newIndex);
  };  
  

  return (
    <nav
      className={`fixed bottom-4 left-0 right-0 mx-auto h-16 z-[9] w-[95%] sm:w-[90%] md:w-[60%] rounded-lg border border-[#e5e5e5] overflow-hidden`}
    >
      <div
        className="h-full bg-gradient-to-r transition-all duration-300"
        style={{
          backgroundImage: `linear-gradient(to right, #e5e5e5 ${scrollProgress}%, #f8f8f8 ${scrollProgress}%)`,
        }}
      >
        <div className="flex justify-between items-center h-full md:px-4">
          <div className="flex ml-2 md:ml-4 gap-2">
            <img className="w-12" src={Paw} alt="Pawsome Logo" />
          </div>

          <div className="hidden sm:flex md:flex flex-row gap-2 text-base">
            <ShimmerButton background="#d89ca8" shimmerColor="#1a1a1a" shimmerDuration="3s" onClick={() => handleScrollClick("project-section")}
              className="gap-2 rounded-lg flex p-2 items-center justify-center overflow-hidden bg-[#D0D0D0] color-[#f8f8f8] transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#f8f8f8] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 text-black hover:text-black">
              <span
                className="z-10 text-center">Project</span>
            </ShimmerButton >

            <ShimmerButton background="#d89ca8" shimmerColor="#1a1a1a" shimmerDuration="3s" onClick={() => handleScrollClick("team-section")}
              className="gap-2 rounded-lg flex p-2 items-center justify-center overflow-hidden bg-[#D0D0D0] color-[#f8f8f8] transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#f8f8f8] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 text-black hover:text-black">
              <span
                className="z-10 text-center">Team</span>
            </ShimmerButton >

            <ShimmerButton background="#d89ca8" shimmerColor="#1a1a1a" shimmerDuration="3s" onClick={() => handleScrollClick("application-section")}
              className="gap-2 rounded-lg flex p-2 items-center justify-center overflow-hidden bg-[#D0D0D0] color-[#f8f8f8] transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#f8f8f8] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 text-black hover:text-black">
              <span
                className="z-10 text-center">Application</span>
            </ShimmerButton >
          </div>

          <div className="flex mr-2 md:mr-0">
            <ShimmerButton background="#d89ca8" shimmerColor="#1a1a1a" shimmerDuration="3s" borderRadius="10px" onClick={handleConfettiClick} className="gap-2 rounded-lg relative flex p-2 items-center justify-center overflow-hidden bg-[#D0D0D0] transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#f8f8f8] before:duration-500 before:ease-out hover:before:h-60 hover:before:w-60">
              <span className="relative z-10 text-center">Feed me</span>
              {randomSvg && <img className="relative z-20" src={randomSvg} alt="Random Pet SVG" />}
            </ShimmerButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FixedNavbar;
