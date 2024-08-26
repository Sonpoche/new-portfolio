// app/mentions-legales/page.tsx
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function MentionsLegales() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <section className="py-10 text-white">
          <h1 className="text-3xl font-bold mb-6">Mentions Légales</h1>
          <p className="mb-4">
            Merci de lire avec attention les différentes modalités d’utilisation du présent site avant d’y parcourir ses pages. En vous connectant sur ce site, vous acceptez, sans réserves, les présentes modalités.
          </p>
          <p className="mb-4">
            Aussi, conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin 2004 pour la confiance dans l’économie numérique, les responsables du présent site internet <a href="https://www.webdevfred.fr" className="underline text-blue-400 hover:text-blue-300">https://www.webdevfred.fr</a> sont :
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Éditeur du Site :</h2>
          <p className="mb-4">
            Monsieur RAGAIGNE Frédéric (Freelancer WEB)
            <br />
            SIREN : 848210142
            <br />
            Affaire personnelle profession libérale
            <br />
            Adresse : 2bis rue la placette, 83670 VARAGES
            <br />
            Téléphone : 06 69 01 24 67
            <br />
            Le site a été conçu et mis en ligne par Frédéric RAGAIGNE.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Hébergement :</h2>
          <p className="mb-4">
            L'hébergeur du site <a href="https://www.webdevfred.fr" className="underline text-blue-400 hover:text-blue-300">https://www.webdevfred.fr</a> est la Société O2switch, dont le siège social est situé à Chem. des Pardiaux, 63000 Clermont-Ferrand.
            <br />
            Site Web : <a href="https://www.o2switch.fr/" className="underline text-blue-400 hover:text-blue-300">https://www.o2switch.fr/</a>
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Développement :</h2>
          <p className="mb-4">
            RAGAIGNE Frédéric
            <br />
            Adresse : 2 bis rue la placette, 83670 VARAGES
            <br />
            Site Web : <a href="https://www.webdevfred.fr" className="underline text-blue-400 hover:text-blue-300">https://www.webdevfred.fr</a>
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Propriété intellectuelle :</h2>
          <p className="mb-4">
            La structure générale, ainsi que l’intégralité du contenu du site internet, notamment les textes, graphiques, images, vidéos et sons composant ceux-ci, sont la propriété de Monsieur RAGAIGNE Frédéric.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Conditions d'utilisation :</h2>
          <p className="mb-4">
            Ce site <a href="https://www.webdevfred.fr" className="underline text-blue-400 hover:text-blue-300">https://www.webdevfred.fr</a> est proposé en différents langages web (HTML, HTML5, Javascript, CSS, etc…) pour un meilleur confort d’utilisation et un graphisme plus agréable. Nous vous recommandons de recourir à des navigateurs modernes comme Internet Explorer, Safari, Firefox, Google Chrome, etc.
          </p>
          <p className="mb-4">
            Frédéric RAGAIGNE met en œuvre tous les moyens dont il dispose pour assurer une information fiable et une mise à jour fiable de ses sites internet. Toutefois, des erreurs ou omissions peuvent survenir. L’internaute devra donc s’assurer de l’exactitude des informations auprès de Frédéric RAGAIGNE, et signaler toutes modifications du site qu’il jugerait utile. Frédéric Ragaigne n’est en aucun cas responsable de l’utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.
          </p>
        </section>
        <Footer />
      </div>
    </main>
  );
}
