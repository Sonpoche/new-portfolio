"use client";
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import { IoCopyOutline } from 'react-icons/io5';

type ArticleHeaderProps = {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  subTitle: string;
  additionalInfo: string;
  contactText: string;
  listItems: string[];
  email: string;
};

const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  title,
  description,
  imageUrl,
  altText,
  subTitle,
  additionalInfo,
  contactText,
  listItems,
  email,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
  };

  return (
    <div className="w-full group/card mt-2 lg:mt-10 pb-20">
      <div
        className={cn(
          "overflow-hidden relative card h-full rounded-md shadow-xl mx-auto backgroundImage flex flex-col justify-between px-9 py-6 lg:px-36 lg:py-12",
          "border-[2px] border-slate-800"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0"></div>
        <h2 className="font-bold text-md md:text-lg text-left text-neutral-200 relative z-10 items-center justify-center pb-8 lg:pb-16">
          {description}
        </h2>
        <div className="w-full flex flex-col lg:flex-row gap-10">
          <img
            src={imageUrl}
            alt={altText}
            className="object-cover rounded-md w-full lg:w-[50%]"
          />
          <div className="flex flex-col">
            <h3 className="font-bold text-md lg:text-xl text-left text-purple">
              {subTitle}
            </h3>
            <p className="text-sm md:text-md text-left text-neutral-200 pt-1 pb-10">
              {additionalInfo}
            </p>
            <p className="font-semibold text-sm md:text-base text-left text-neutral-200">
              {contactText}
            </p>
            <ul className="list-disc pt-3 marker:text-purple text-sm md:text-base mb-4">
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between lg:gap-5">
              <a href={`mailto:${email}`}>
                <MagicButton title="Devis gratuit" icon={<FaLocationArrow />} position="right" />
              </a>
              <MagicButton
                title={copied ? "E-mail Copié" : "Copier mon E-mail"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
