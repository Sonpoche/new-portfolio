import { FaLocationArrow } from "react-icons/fa6";


import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
  return (
    <div className="lg:pb-20 lg:pt-24 pt-15 pb-0 " id="home">
      
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
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
    

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-small-white/[0.3] bg-grid-small-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="w-full h-full items-center justify-center flex flex-col">
          <img src="/logo.png" alt="logo" className="w-40 h-40 object-contain" />
          </div>
          <h1 className="uppercase tracking-widest text-xs text-center text-white max-w-100">
          <b>Création de Site Internet Professionnel</b>
          </h1>
          
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <h2 className="text-center text-[40px] md:text-5xl lg:text-6xl mt-5 mb-5 font-bold">
            Transformez votre projet web en <span className="text-purple">Expérience Utilisateur Fluide</span> 
            
          </h2>

          <h3 className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            Bonjour 👋 Je suis Frédéric, spécialisé dans la <br/><b>création de sites internet professionnels et modernes.</b>
          </h3>

          <a href="#apropos">
            <MagicButton
              title="Mes Compétences"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
