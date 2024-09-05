"use client";

import { cn } from "@/lib/utils";
import { FaArrowRight } from "react-icons/fa6";


const PinnedBlog = () => {
  return (
    <div>
    <h1 className="lg:text-left text-center text-[34px] mt-5 mb-5 font-bold">
        Découvrez d'Autres Articles Qui Pourraient Vous  <span className="text-purple">Intéresser</span> 
          </h1>

    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-11 group/card  mt-2 lg:mt-10 pb-20">
        
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(/role-du-webmaster-et-pourquoi-en-engager-un.jpg)] bg-cover border-[2px] border-slate-800",
          "transition-transform duration-500 ease-in-out hover:scale-105  hover:translate-y-4"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 bg-custom-gradient"></div>
        <div className="flex flex-row items-center space-x-4 z-10 ">
        </div>
        <div className="text">
          <h2 className="font-bold text-md md:text-lg text-gray-50 relative z-10 flex flex-row items-center gap-2">
          Le Rôle du Webmaster et Pourquoi En Engager Un.
          </h2>
        </div>
      </div>

      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(/quel-est-le-cout-de-lhebergement-dun-site-internet.jpeg)] bg-cover object-center border-[2px] border-slate-800 ",
          "transition-transform duration-500 ease-in-out hover:scale-105  hover:translate-y-4"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0  bg-custom-gradient"></div>

        <div className="flex flex-row items-center space-x-4 z-10 ">
        </div>
        <div className="text">
          <h2 className="font-bold text-md md:text-lg text-gray-50 relative z-10 flex flex-row items-center gap-2">
          Quel est le Coût de l’Hébergement d’un Site Internet ? 
          </h2>
          
        </div>
      </div>
      <div
      className={cn(
        "relative cursor-pointer overflow-hidden h-96 rounded-md shadow-xl mx-auto flex flex-col justify-between p-4",
        "bg-[url(/limportance-dune-maintenance-dun-site-internet.jpg)] bg-cover border-[2px] border-slate-800 ",
        "transition-transform duration-500 ease-in-out hover:scale-105  hover:translate-y-4"
      )}
    >
        <div className="absolute w-full h-full top-0 left-0 bg-custom-gradient"></div>
        <div className="flex flex-row items-center space-x-4 z-10 ">
        </div>
        <div className="text">
          <h2 className="font-bold text-md md:text-lg text-gray-50 relative z-10 flex flex-row items-center gap-2">
          Comprendre l'importance d'une Maintenance d’un Site Internet.
          </h2>
          
        </div>
      </div>
      </div>
    </div>
  );
}

export default PinnedBlog;
