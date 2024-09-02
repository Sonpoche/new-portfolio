
import BlogCard from "@/components/BlogCard";

import Footer from "@/components/Footer";

import HeroBlog from "@/components/HeroBlog";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

import { Metadata } from 'next';
 
export const metadata: Metadata = {
    title: "Guide et Astuce pour Créer un Site Internet Spécifique à Chaque Métier | Webdevfred",
    description: "Découvrez mon guide et astuce pour créer un site internet spécifique à chaque métier. Obtenez des conseils pratiques pour réussir votre projet web.",
    keywords: "création de site internet,création de site internet professionnel, site web professionnel, développement web, conception site web, Guide et Astuce pour Créer un Site Internet Spécifique à Chaque Métier, WebDevFred",
    openGraph: {
      title: "Guide et Astuce pour Créer un Site Internet Spécifique à Chaque Métier | Webdevfred",
      description: "Découvrez mon guide et astuce pour créer un site internet spécifique à chaque métier. Obtenez des conseils pratiques pour réussir votre projet web.",
      url: "https://webdevfred.fr/blog",
      type: "website",
      images: [
        {
          url: "https://webdevfred.fr/logo.png", // Remplacez par le bon chemin vers votre image
          width: 1200,
          height: 630,
          alt: "Aperçu du site Webdevfred",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Guide et Astuce pour Créer un Site Internet Spécifique à Chaque Métier | Webdevfred",
      description: "Découvrez mon guide et astuce pour créer un site internet spécifique à chaque métier. Obtenez des conseils pratiques pour réussir votre projet web.",
      images: "https://webdevfred.fr/logo.png", // Assurez-vous que l'image correspond à vos besoins
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico", // Assurez-vous que le chemin est correct
    },
  };

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
      <HeroBlog />
      <BlogCard />
      <Footer  />
      </div>      
    </main>
  );
}
