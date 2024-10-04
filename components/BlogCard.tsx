"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const BlogCard = () => {
  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-11 group/card pb-20">
      <Link href="/blog/creation-de-site-internet-pour-paramedical">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(/creation-de-site-internet-pour-paramedicaux.webp)] bg-cover border-[2px] border-slate-800",
          "transition-transform duration-500 ease-in-out hover:scale-105  hover:translate-y-4"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 bg-custom-gradient"></div>
        <div className="flex flex-row items-center space-x-4 z-10 ">
        </div>
        <div className="text">
          <h2 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10 flex flex-row items-center gap-2">
            Paramédical <FaArrowRight className="h-4 w-4 cursor-pointer"  />
          </h2>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            Mon guide pour la création de site internet pour paramédicaux.
          </p>
        </div>
      </div>
        </Link>
        <Link href="/blog/creation-de-site-internet-pour-artisan">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(/creation-de-site-internet-pour-artisan.jpg)] bg-cover object-center border-[2px] border-slate-800",
          "transition-transform duration-500 ease-in-out hover:scale-105  hover:translate-y-4"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 bg-custom-gradient"></div>
        <div className="flex flex-row items-center space-x-4 z-10 ">
        </div>
        <div className="text">
          <h2 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10 flex flex-row items-center gap-2">
            Artisan <FaArrowRight className="h-4 w-4 cursor-pointer"  />
          </h2>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            Mon guide pour la création de site internet pour artisan.
          </p>
        </div>
      </div>
      </Link>
      <Link href="/blog/comment-creer-un-site-e-commerce">
      <div
      className={cn(
        "relative cursor-pointer overflow-hidden h-96 rounded-md shadow-xl mx-auto flex flex-col justify-between p-4",
        "bg-[url('/comment-creer-un-site-e-commerce.jpg')] bg-cover object-center border-[2px] border-slate-800 ",
        "transition-transform duration-500 ease-in-out hover:scale-105  hover:translate-y-4"
      )}
    >
        <div className="absolute w-full h-full top-0 left-0 bg-custom-gradient"></div>
        <div className="flex flex-row items-center space-x-4 z-10 ">
        </div>
        <div className="text">
          <h2 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10 flex flex-row items-center gap-2">
            E-commerce <FaArrowRight className="h-4 w-4 cursor-pointer"  />
          </h2>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            Mon guide pour la création de site internet pour e-commerce.
          </p>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default BlogCard;
