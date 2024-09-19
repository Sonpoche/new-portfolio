
import ArticleHeader from "@/components/ArticleHeader";

import Footer from "@/components/Footer";
import PinnedBlog from "@/components/PinnedBlog";

import ArticleContent from "@/components/TracingBeam";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Spotlight } from "@/components/ui/Spotlight";
import { navItems } from "@/data";

import { Metadata } from 'next';

import { articles } from "@/data/articleData";

 
export const metadata: Metadata = {
    title: "Création de site internet pour Artisan | Webdevfred",
    description: "Guide de création de site internet pour Artisan : conseils sur l'ergonomie, et le contenu pour attirer plus de clients et valoriser votre savoir-faire.",
    keywords: "création de site internet pour artisan,artisan,création de site internet professionnel, site web professionnel, développement web, conception site web, WebDevFred",
    openGraph: {
      title: "Création de site internet pour Artisan | Webdevfred",
      description: "Guide de création de site internet pour Artisan : conseils sur l'ergonomie, et le contenu pour attirer plus de clients et valoriser votre savoir-faire.",
      url: "https://webdevfred.fr/blog/creation-de-site-internet-pour-artisan",
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
      title: "Création de site internet pour Artisan | Webdevfred",
      description: "Guide de création de site internet pour Artisan : conseils sur l'ergonomie, et le contenu pour attirer plus de clients et valoriser votre savoir-faire.",
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

  export default function Blog() {
    // Sélectionnez l'article avec l'ID 1
    const article = articles.find((article) => article.id === 2);
  
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
                    <img src="/logo.png" alt="logo" className="w-40 h-40 object-contain" />
                  </a>
                </div>
                <h1 className="lg:text-left text-center text-[34px] md:text-5xl lg:text-5xl mt-5 mb-5 font-bold">
                  Création de Site Internet pour <span className="text-purple">Artisan</span>
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
          <ArticleContent contentType="content2" />  {/* Affiche dummyContent */}
          <PinnedBlog />
          <Footer />
        </div>
      </main>
    );
  }
  