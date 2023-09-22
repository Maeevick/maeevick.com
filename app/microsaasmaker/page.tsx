import Link from "next/link";

export default async function Index() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl text-center mx-12 pt-12">
            <strong>MicroSaaS Maker !</strong>
          </h1>
          <h2 className="text-xl text-center m-8">
            Bienvenue dans l'espace formation pour devenir un•e MicroSaaS Maker.
          </h2>
          <p className="text-lg text-center m-8">
            Si tu es arrivé•e sur cette page, c'est que d'une manière ou d'une
            autre tu t'intéresses à la création et au lancement de SaaS
            (Software as a Service) et plus particulièrement à la catégorie des
            MicroSaaS.
          </p>
          <p>
            Afin que tu ne perdes pas ton temps ou pire que tu achètes quelque
            chose dont tu ne veux pas, dont tu n'as pas besoin, laisse moi te
            préciser quelques points.
          </p>
          <ul>
            <li>
              <p>
                &#10060; - Si tu cherches une recette magique et une voie facile
                pour gagner de l'argent : passe ton chemin.
              </p>
              <p>
                &#128077; - Avec de la persévérance et les bonnes techniques un
                MicroSaaS peut être très lucratif ( &gt; 1M ARR).
              </p>
            </li>
            <li>
              <p>
                &#10060; - Si tu cherches une formation No Code, je ne suis pas
                compétent pour te former sur ces sujets.
              </p>
              <p>
                &#128077; - Avec un niveau débutant en programmation, tu pourras
                suivre la formation et t'en servir pour te perfectionner.
              </p>
            </li>
          </ul>
          <span className="text-xl text-center italic m-8">A venir...</span>
        </div>
      </div>
    </div>
  );
}
