import Image from 'next/image';
import React from 'react';

const cards = [
  {
    id: 1,
    image: '/limportance-dune-maintenance-dun-site-internet.webp',
    title: "Maintenance d'un Site Internet",
    description: 'Pourquoi la maintenance de votre site internet est essentielle.',
    link: '/blog/maintenance-site-internet',
  },
  {
    id: 2,
    image: '/quel-est-le-cout-de-lhebergement-dun-site-internet.webp',
    title: "Hébergement d'un Site Internet",
    description: 'Quel est son coût et comprendre son fonctionnement ?',
    link: '/blog/hebergement-site-internet',
  },
  {
    id: 3,
    image: '/role-du-webmaster.webp',
    title: 'Le Rôle du Webmaster',
    description: 'Pourquoi engager un professionnel pour son projet ?',
    link: '/blog/le-role-indispensable-du-webmaster',
  },
  {
    id: 4,
    image: '/creation-de-site-internet-pour-artisan.jpg',
    title: 'Artisans',
    description: 'Mon guide pour la création de site internet pour artisan.',
    link: '/blog/creation-de-site-internet-pour-artisan',
  },
  {
    id: 5,
    image: '/creation-de-site-internet-pour-paramedicaux.webp',
    title: 'Paramédicaux',
    description: 'Mon guide pour la création de site internet pour paramédicaux.',
    link: '/blog/creation-de-site-internet-pour-paramedical',
  },
  {
    id: 6,
    image: '/comment-creer-un-site-e-commerce.jpg',
    title: 'E-commerce',
    description: 'Mon guide pour la création de site internet e-commerce.',
    link: '/blog/comment-creer-un-site-e-commerce',
  },
  // Ajoute autant de cartes que tu veux ici
];

type Card = {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;  // Ajout du champ 'link'
};

const getRandomCards = (num: number): Card[] => {
  const shuffled = [...cards].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const PinnedBlog: React.FC = () => {
  const randomCards = getRandomCards(3);

  return (
    <div>
      <h2 className="lg:text-left text-center text-[30px] md:text-4xl lg:text-5xl mt-5 mb-5 font-bold">
            Découvrez d'autres <span className="text-purple">Astuces</span> 
      </h2>
      <div className="w-full grid lg:grid-cols-3 gap-11 md:grid-cols-1 mt-2 lg:mt-10 pb-20">
        {randomCards.map((card) => (
          <a
            key={card.id}
            href={card.link}
            className="relative w-full lg:h-[350px] md:h-[300px] h-[250px] bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg border border-slate-800"
            aria-label={card.title}  // Ajoute une description pour l'accessibilité
          >
            <Image
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
              width={128} // Par exemple 128px
              height={128} // Par exemple 128px
            />
            <div className="absolute inset-0 bg-custom-gradient flex flex-col justify-end p-4">
              <h3 className="md:text-lg text-md font-bold mb-2">{card.title}</h3>
              <p className="md:text-sm text-xs">{card.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PinnedBlog;
