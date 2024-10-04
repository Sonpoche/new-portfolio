"use client";

import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { dummyContent, dummyContent2, dummyContent3, dummyContent4 } from "./dummyContent"; // Ajoutez ici de nouveaux dummyContent si nécessaire

interface ArticleContentProps {
  contentType: string; // On peut maintenant accepter n'importe quel type de contenu
}

// Objet qui mappe chaque type de contenu à ses données
const contentMap: Record<string, any[]> = {
  content1: dummyContent,
  content2: dummyContent2,
  content3: dummyContent3,
  content4: dummyContent4,
  // Ajoutez ici de nouveaux ensembles de données si besoin, ex:
  // content4: dummyContent4,
};

const ArticleContent: React.FC<ArticleContentProps> = ({ contentType }) => {
  // Sélection dynamique du contenu basé sur contentType
  const contentToDisplay = contentMap[contentType] || []; // Retourne un tableau vide si le type est invalide

  return (
    <TracingBeam className="px-6">
      <div className="w-full max-w-xs md:max-w-full mx-auto antialiased pt-4 mb-20 ml-6 md:ml-0 relative">
        {contentToDisplay.length > 0 ? (
          contentToDisplay.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="text-xl lg:text-3xl font-semibold mb-6">
                {item.title}
              </h2>
              <div className="text-md prose text-neutral-300 prose-sm dark:prose-invert">
                {item.description}
              </div>
            </div>
          ))
        ) : (
          <p className="text-neutral-400">Aucun contenu disponible pour ce type.</p>
        )}
      </div>
    </TracingBeam>
  );
};

export default ArticleContent;
