import Link from "next/link";

export default async function Index() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl text-center mx-12 pt-12">
            Atteins ton <strong>Product Market Fit</strong> avec{" "}
            <strong>fluidité</strong> et <strong>sérénité</strong> !
          </h1>

          <ul className="text-xl my-8">
            <li className="m-4">
              Tu sais coder ? Tu rêves de lancer ton produit numérique et d'en
              vivre ?
            </li>
            <li className="m-4">
              Mais tu as peur que ça ne marche pas ? Que ce soit insurmontable ?
            </li>
            <li className="m-4">
              Alors rassure-toi, avec les bonnes techniques il y a "plus de peur
              que de mal" !
            </li>
          </ul>
          <Link
            href="/microsaasmaker"
            className="border-4 border-solid border-black rounded-lg shadow-lg shadow-gray-500 p-2 m-2 bg-orange-500 font-bold text-2xl"
          >
            Commence ici !
          </Link>
        </div>
      </div>
    </div>
  );
}
