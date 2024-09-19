// TracingBeam.tsx
"use client";

import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { dummyContent, dummyContent2 } from "./dummyContent";

interface ArticleContentProps {
  contentType: 'content1' | 'content2'; // Détermine quel ensemble de données utiliser
}

const ArticleContent: React.FC<ArticleContentProps> = ({ contentType }) => {
  const contentToDisplay = contentType === 'content1' ? dummyContent : dummyContent2;

  return (
    <TracingBeam className="px-6">
      <div className="w-full max-w-xs md:max-w-full mx-auto antialiased pt-4 mb-20 ml-6 md:ml-0 relative">
        {contentToDisplay.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="text-xl lg:text-3xl font-semibold mb-6">
              {item.title}
            </h2>
            <div className="text-md prose text-neutral-300 prose-sm dark:prose-invert">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
};

export default ArticleContent;
