import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import HeroVar from "@/components/HeroVar";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Site internet à Saint-Maximin-la-Sainte-Baume | Webdevfred",
    description: "Site internet à Saint-Maximin-La-Sainte-Baume, Webdevfred pour la création de site internet professionnel. Conception de site performant et sur mesure.",
    keywords: "développeur web var,site internet à saint-maximin-la-sainte-baume,développeur web saint-maximin-la-sainte-baume,création de site internet professionnel, site web professionnel, développement web, conception site web, WebDevFred",
    openGraph: {
      title: "Site internet à Saint-Maximin-la-Sainte-Baume | Webdevfred",
      description: "Site internet à Saint-Maximin-La-Sainte-Baume, Webdevfred pour la création de site internet professionnel. Conception de site performant et sur mesure.",
      url: "https://webdevfred.fr/site-internet-à-saint-maximin-la-sainte-baume",
      type: "website",
      images: [
        {
          url: "https://webdevfred.fr/logo.png", // Remplacez par le bon chemin vers votre image
          width: 1200,
          height: 630,
          alt: "Site internet à Saint-Maximin-la-Sainte-Baume",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Site internet à Saint-Maximin-la-Sainte-Baume | Webdevfred",
      description: "Site internet à Saint-Maximin-La-Sainte-Baume, Webdevfred pour la création de site internet professionnel. Conception de site performant et sur mesure.",
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

export default function CreationSiteInternetToulon() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
      <HeroVar 
          logoSrc="/logo.png"
          mainTitle="Site internet à Saint-Maximin-la-Sainte-Baume"
          subTitle="Transformez votre projet web en Expérience Utilisateur Fluide"
          description="Bonjour 👋 Je suis Frédéric, Développeur Web Var, Site internet à Saint-Maximin-la-Sainte-Baume."
          buttonText="Mes Compétences"
          buttonLink="#apropos"
        />
      <Grid />
      <RecentProjects />
      <Clients /> 
      <Experience />
      <Approach />
      <Footer  />
      </div>      
    </main>
  );
}
