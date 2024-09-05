import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    
    {
      title: "Septembre 2024",
      content: (
        <div>
          <h3 className="text-lg md:text-2xl mb-4 text-black dark:text-white max-w-7xl">
            Créer un Site Internet pour un Artisan : Une Présence <span className="text-purple">Renforcée</span>
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Pour un artisan, un <strong>site internet</strong> bien conçu est essentiel pour se démarquer et attirer de nouveaux clients. Créer un <strong>site internet adapté aux artisans</strong> vous permet de mettre en valeur votre savoir-faire, de présenter vos réalisations, et de détailler vos prestations. Un site optimisé aide à renforcer votre <strong>présence en ligne</strong>, à gagner en crédibilité, et à développer votre activité en touchant une clientèle plus large.
          </p>
          <a href="/">
          <p className="text-neutral-800 dark:text-[#2C90AA] underline text-xs md:text-sm font-bold mb-8">
            Découvrez comment créer un site internet efficace pour un artisan. ( A Venir  ...)
            </p>
          </a>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/dasilva.png"
              alt="création de site internet pour couvreur à aix-en-provence"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border-[2px] border-slate-800"
            />
            <img
              src="/couvreur-penia.png"
              alt="création de site internet pour couvreur à saint-paul-de-vence"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border-[2px] border-slate-800"
            />
            <img
              src="gpproclean.png"
              alt="création de site internet pour nettoyage de toiture/façade à saint-paul-de-vence"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border-[2px] border-slate-800"
            /> 
          </div>
        </div>
      ),
    },
    {
      title: "Août 2024",
      content: (
        <div>
          <h3 className="text-lg md:text-2xl mb-4 text-black dark:text-white max-w-7xl">
            Créer un Site Internet pour un Paramédical : Une Communication <span className="text-purple">Optimisée</span>
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          En tant que <strong>paramédical</strong>, votre <strong>présence en ligne</strong> est essentielle pour établir une relation de confiance
          avec vos patients et communiquer efficacement vos services.
          Créer un <strong>site internet personnalisé</strong> vous permet de présenter clairement vos spécialités,
          vos valeurs, et d'informer vos patients sur vos disponibilités et conseils.
          Un site bien conçu est la clé pour optimiser votre communication, <strong>attirer de nouveaux patients</strong>,
          et renforcer votre crédibilité dans le domaine paramédical.
          </p>
          <a href="/">
          <p className="text-neutral-800 dark:text-[#2C90AA] underline text-xs md:text-sm font-bold mb-8">
            Découvrez comment créer un site internet efficace pour un paramédical. ( A Venir  ...)
            </p>
          </a>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/cigala.png"
              alt="création de site internet pour psychomotricien"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border-[2px] border-slate-800 "
            />
            <img
              src="/florence.png"
              alt="création de site internet pour naturopathe"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border-[2px] border-slate-800 "
            />
            <img
              src="/aurelie-canva.png"
              alt="création de site internet pour psychanalyste"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border-[2px] border-slate-800"
            />
            <img
              src="/ga-hypnose.png"
              alt="création de site internet pour hypnothérapeute"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border-[2px] border-slate-800"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Juillet 2024",
      content: (
        <div>
          <h3 className="text-lg md:text-2xl mb-4 text-black dark:text-white max-w-7xl">
            Créer un Site Internet E-commerce : Une Boutique en ligne <span className="text-purple">Performante</span>
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Créez une <strong>boutique en ligne performante</strong> avec mon guide spécialisé pour les sites e-commerce. Découvrez les meilleures pratiques pour optimiser la performance de votre site, attirer plus de clients, et augmenter vos ventes. Chaque étape est pensée pour garantir que votre e-commerce se distingue dans un marché compétitif.
          </p>
          <a href="/">
          <p className="text-neutral-800 dark:text-[#2C90AA] underline text-xs md:text-sm font-bold mb-8">
            Découvrez comment créer un site internet e-commerce efficace. ( A Venir  ...)
            </p>
          </a>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/tabac-brut.png"
              alt="création de site internet e-commerce vente de tabac brut"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border-[2px] border-slate-800 "
            />
            <img
              src="/you-boost.png"
              alt="création de site internet e-commerce vente de followers"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border-[2px] border-slate-800 "
            />
            <img
              src="/bougie-gourmande.png"
              alt="création de site internet e-commerce vente de bougie"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border-[2px] border-slate-800"
            />
          </div>
        </div>
      ),
    },

    
    
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
