import { FaEnvelope } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-10 relative z-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 z-0">
        <Image
          src="/grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
          width={128} // Par exemple 128px
          height={128} // Par exemple 128px
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h2 className="heading lg:max-w-[45vw]">
          Prêt à <span className="text-purple">propulser 🚀</span> votre présence numérique au niveau supérieur ?
        </h2>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contactez-moi dès aujourd'hui et discutons de comment je peux vous aider à atteindre vos objectifs.
        </p>
        <a href="mailto:ragaignef@gmail.com">
          <MagicButton
            title="ragaignef@gmail.com"
            icon={<FaEnvelope />}
            position="left"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between gap-6 items-center relative z-10">
        <Image src="/logo.png" alt="logo" className="w-20 h-20 object-contain" 
        width={128} // Par exemple 128px
        height={128} // Par exemple 128px
        />
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Webdevfred
        </p>
        <Link href="/mentions-legales">
          <span className="md:text-base text-sm md:font-normal font-light cursor-pointer">
            Mentions Légales
          </span>
        </Link>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link key={info.id} href={info.link}>
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <Image
                  src={info.img}
                  alt={info.id.toString()}
                  width={20}
                  height={20}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

