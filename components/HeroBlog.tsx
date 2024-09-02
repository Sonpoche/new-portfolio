import { FaLocationArrow } from "react-icons/fa6";


import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
  return (
    <div className="lg:pb-15 pt-15 pb-0 " id="home">
      
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#034C60"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="teal" />
      </div>
    

      

      <div className="flex lg:justify-start justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="w-full h-full lg:items-start items-center flex flex-col">
          <a href="/">
            <img src="/logo.png" alt="logo" className="w-60 h-60 object-contain" />
          </a>
          </div>
          <h1 className="lg:text-left text-center text-[40px] md:text-5xl lg:text-6xl mt-5 mb-5 font-bold">
            Guide et Astuce pour créer un site internet <span className="text-purple">spécifique à chaque métier.</span> 
          </h1>

          <p className="lg:text-left text-center md:tracking-wider mb-4 text-sm md:text-md lg:text-lg">
            Lors de la création d'un site internet pour votre activité, il est crucial de bien réfléchir à votre stratégie : communication, offres, argumentaire, et présentation aux visiteurs. Avec mon <strong className="text-purple">guide et astuce pour créer un site internet spécifique à chaque métier</strong>, je vous aiderai à poser les bonnes questions et à obtenir des conseils adaptés pour réussir la conception de votre site web, métier par métier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
