import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Création de Site Internet Professionnel | Webdevfred",
  description: "Découvrez les services de Webdevfred pour la création de sites internet professionnels. Nous concevons des sites performants et sur mesure pour répondre à vos besoins.",
  keywords: "création de site internet, site web professionnel, développement web, conception site internet, webdevfred",
  openGraph: {
    title: "Création de Site Internet Professionnel | Webdevfred",
    description: "Webdevfred propose des solutions de création de sites internet sur mesure pour votre entreprise. Obtenez un site performant et optimisé.",
    url: "https://webdevfred.fr",
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
    title: "Création de Site Internet Professionnel | Webdevfred",
    description: "Confiez la création de votre site internet professionnel à Webdevfred, spécialiste en sites web vitrine, e-commerce.",
    images: "https://webdevfred.fr/logo.png", // Assurez-vous que l'image correspond à vos besoins
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#00101A", // Adaptez la couleur à votre palette
  icons: {
    icon: "/favicon.ico", // Assurez-vous que le chemin est correct
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <SpeedInsights />
          </body>
    </html>
  );
}
