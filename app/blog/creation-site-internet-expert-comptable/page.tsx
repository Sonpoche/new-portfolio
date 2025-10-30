import ArticleHeader from "@/components/ArticleHeader";

import Footer from "@/components/Footer";
import PinnedBlog from "@/components/PinnedBlog";

import ArticleContent from "@/components/TracingBeam";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Spotlight } from "@/components/ui/Spotlight";
import { navItems } from "@/data";

import { Metadata } from 'next';

import { articles } from "@/data/articleData";
import Image from "next/image";

 
export const metadata: Metadata = {
    title: "Création Site Internet Expert Comptable 2025 | Guide Complet",
    description: "Découvrez comment créer un site internet performant pour votre cabinet d'expertise comptable. Guide 2025 avec conseils pratiques, coûts et optimisation SEO ✓",
    keywords: "création site internet expert comptable, site web expert comptable, site internet cabinet comptable, création site comptable en ligne, prix site expert comptable, devis site comptable, agence web expert comptable",
    openGraph: {
      title: "Création Site Internet Expert Comptable 2025 | Guide Complet",
      description: "Découvrez comment créer un site internet performant pour votre cabinet d'expertise comptable. Guide 2025 avec conseils pratiques, coûts et optimisation SEO ✓",
      url: "https://webdevfred.fr/blog/creation-site-internet-expert-comptable",
      type: "website",
      images: [
        {
          url: "https://webdevfred.fr/og-expert-comptable.webp", // Remplacez par le bon chemin vers votre image
          width: 1200,
          height: 630,
          alt: "Création Site Internet Expert Comptable 2025",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Création Site Internet Expert Comptable 2025 | Guide Complet",
      description: "Découvrez comment créer un site internet performant pour votre cabinet d'expertise comptable. Guide 2025 avec conseils pratiques, coûts et optimisation SEO ✓",
      images: "https://webdevfred.fr/logo.png", // Assurez-vous que l'image correspond à vos besoins
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        }
    },
    icons: {
      icon: "/favicon.ico", // Assurez-vous que le chemin est correct
    },
  };

  export default function Webmaster() {
    // Sélectionnez l'article avec l'ID 1
    const article = articles.find((article) => article.id === 5);
  
    if (!article) return <p>Article not found</p>;
  
    return (
      <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <div className="lg:pb-15 pt-15 pb-0" id="home">
            <div>
              <Spotlight
                className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                fill="white"
              />
              <Spotlight
                className="h-[80vh] w-[50vw] top-10 left-full"
                fill="#034C60"
              />
              <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="teal" />
            </div>
            <div className="flex lg:justify-start justify-center relative my-20 z-10">
              <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <div className="w-full h-full lg:items-start items-center flex flex-col">
                  <a href="/">
                    <Image src="/logo.png" alt="logo" className="w-40 h-40 object-contain" 
                    width={128} // Par exemple 128px
                    height={128} // Par exemple 128px
                    />
                  </a>
                </div>
                <h1 className="lg:text-left text-center text-[34px] md:text-5xl lg:text-5xl mt-5 mb-5 font-bold">
                Création Site Internet <span className="text-purple">Expert Comptable</span> : Guide Complet 2025
                </h1>
              </div>
            </div>
          </div>
          {/* Passez les données de l'article comme props à ArticleHeader */}
          <ArticleHeader
            title={article.title}
            description={article.description}
            imageUrl={article.imageUrl}
            altText={article.altText}
            subTitle={article.subTitle}
            additionalInfo={article.additionalInfo}
            contactText={article.contactText}
            listItems={article.listItems}
            email={article.email}
          />
          <ArticleContent contentType="content4" />  {/* Affiche dummyContent */}
          <PinnedBlog />
          <Footer />
        </div>
      </main>
    );
  }
  