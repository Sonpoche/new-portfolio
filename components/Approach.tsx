import { CardSpotlight } from "@/components/ui/card-spotlight";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h2 className="heading">
            Mon approche pour <span className="text-purple"> vos projets</span>
        </h2>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
    <CardSpotlight className="h-96 w-full">
      <p className="text-5xl font-bold relative z-20 mt-2 text-white">
        Phase 1 🎓
      </p>
      <div className="text-purple text-xl font-semibold mt-4 relative z-20">
      Etude de votre secteur d'activité
      </div>
    
        <p className="text-neutral-300 mt-4 relative z-20 text-md">
          Pour une <strong>création de site internet professionnel</strong> réussie, je prends le temps de comprendre vos besoins et objectifs, afin de vous offrir des solutions sur mesure et efficaces.
        </p>
      

    </CardSpotlight>
    <CardSpotlight className="h-96 w-full">
      <p className="text-5xl font-bold relative z-20 mt-2 text-white">
        Phase 2 👨‍💻
      </p>
      <div className="text-purple text-xl font-semibold mt-4 relative z-20">
        Création et Hébergement du site
      </div>
    
      <p className="text-neutral-300 mt-4 relative z-20 text-md">
        Nous commençons par créer une première version de votre site, que nous ajustons en fonction de vos besoins et des éventuelles modifications. Par la suite, nous sélectionnons <strong>un nom de domaine adapté à votre activité</strong> et <strong>hébergeons le site sur une plateforme sécurisée.</strong>
      </p>


      

    </CardSpotlight>
    <CardSpotlight className="h-96 w-full">
      <p className="text-5xl font-bold relative z-20 mt-2 text-white">
        Phase 3 📡
      </p>
      <div className="text-purple text-xl font-semibold mt-4 relative z-20">
        Mise en ligne et suivi du site
      </div>
    
        <p className="text-neutral-300 mt-4 relative z-20 text-md">
          <strong>Mise en ligne de votre site</strong> après les vérifications : tout est prêt, c'est parti ! Grâce à une <strong>maintenance régulière</strong>, nous veillons à ce que votre contenu reste à jour et opérationnel.
        </p>
      

    </CardSpotlight>
    </div>
    </section>
  );
}

export default Approach;