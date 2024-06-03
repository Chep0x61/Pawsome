import Globe from "../../Components/Globe";
import ShimmerButton from "../../Components/ShimmerButton";
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center text-center">
      <div className="flex w-full overflow-hidden demi-diamond-background bg-[#f1f1f1]">
        <div className="flex flex-col items-center justify-items-start p-10 mb-64 md:mb-80">
          <div className="flex items-center justify-top gap-4">
            <img className="w-20 md:w-28" src="/paw.png" alt="Pawsome Logo" />
            <p className="text-center text-5xl md:text-7xl font-semibold leading-none text-sky-400">
              Pawsome
            </p>
          </div>
          <h2 className="mt-2 text-2xl md:text-3xl text-pretty max-w-[32rem] font-semibold">Let your pets feed themselves, anytime, anywhere. Still under your control. Effortless and worry-free !</h2>
          <ShimmerButton
          background="#e5e5e5"
          shimmerSize="0.1em"
          shimmerColor="#d89ca8"
          shimmerDuration="3s"
          onClick={handleButtonClick}
          className="my-4 md:my-8 gap-2 rounded-lg flex p-2 items-center justify-center overflow-hidden bg-[#D0D0D0] color-[#f8f8f8] transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#f8f8f8] before:duration-500 before:ease-out hover:before:h-64 hover:before:w-64 text-black hover:text-black"
        >
          <span className="z-10 text-center">🔎 Discover our application</span>
        </ShimmerButton>
        </div>
        <Globe className="mt-80 md:mt-64 lg:mt-72"/>
      </div>
      <div className="mt-8 animate-bounce">
      <svg
  xmlns="http://www.w3.org/2000/svg"
  width="30"
  height="30"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-paw-print"
>
  <circle cx="11" cy="4" r="2" />
  <circle cx="18" cy="8" r="2" />
  <circle cx="20" cy="16" r="2" />
  <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
</svg>

        </div>
    </div>
  );
}

export default Hero;
