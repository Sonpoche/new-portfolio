"use client";
import { cn } from "@/lib/utils";

const BlogCard = () => {
  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-11 group/card pb-20">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 hover/card:bg-black-50 opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10 ">
        </div>
        <div className="text">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            Métier
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            Mon guide pour la création de site internet pour Métier.
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default BlogCard;
