import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      
      <div className="w-4xl mt-8 flex justify-between">

        <div className="flex">
          <img className="h-42 rounded-2xl" src="/images/profile.jpeg" alt="" />
        </div>

        <div className="flex my-16 bg-dark py-2 px-4 rounded-md shadow-[0px_0px_30px_2px_rgb(90,90,90,90)]">
          <ul className="flex flex-row gap-4">
            <Link href="/" className="font-ibm-plex hover:underline">./Accueil</Link>
            <Link href="/about" className="font-ibm-plex hover:underline">./À propos</Link>
            <Link href="/projects" className="font-ibm-plex hover:underline">./Projets</Link>
            <Link href="/cv" className="font-ibm-plex hover:underline">./CV</Link>
          </ul>
        </div>

      </div>

      <div className="flex my-8 w-4xl">
        <div>
          <div className="flex gap-52 items-center justify-between">
            <div className="flex">
              <h1 className="font-ibm-plex font-bold text-2xl flex gap-4 items-center">ymarques@Yann-Marques$ <span className="text-md font-normal">accueil.js</span></h1>
            </div>
            <div className="flex">
              <p className="font-ibm-plex">welcome to home 👋</p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[rgb(90,90,90)] my-3"></div>
          <div className="flex flex-col text-justify">
            <p className="font-ibm-plex">Je suis actuellement étudiant à l’école 42 en développement informatique.</p>
            <br />
            <p className="font-ibm-plex">Je programme depuis plusieurs années déjà.
              Tout a commencé avec ma passion pour les jeux vidéo : je créais des serveurs de jeux dédiés pour mes amis, ce qui m’a rapidement conduit à découvrir Linux vers l’âge de 16 ans.
              C’est à ce moment-là que je me suis initié à la programmation.</p>
            <br />
            <p className="font-ibm-plex">Mes premiers pas ont été en <strong>PHP</strong> et <strong>SQL</strong>, en réalisant des sites web avec des amis.
              Par la suite, j’ai évolué vers <strong>Python</strong>, où j’ai appris la programmation orientée objet avec <strong>Django</strong>, puis approfondi mes connaissances sur le fonctionnement des <strong>APIs</strong> grâce à <strong>FastAPI</strong>.</p>
            <br />
            <p className="font-ibm-plex">Aujourd’hui, à 42, je développe en <strong>C</strong> et <strong>C++</strong> sous Linux en utilisant des outils de debug et de détection de fuite mémoire.
              L'optimisation des ressources du programme et bonne organisation du code font partie des bases de mon cursus.</p>
            <br />
            <p className="font-ibm-plex">Dans ce portfolio, vous trouverez des informations sur mes compétences, mon parcours académique et professionnel, ainsi que mes projets réalisés.</p>
          </div>
          <div className="flex flex-col justify-center items-center my-8">
              <h1 className="font-ibm-plex font-bold text-2xl flex gap-4 items-center">Je recherche actuellement un stage de 6 mois</h1>
              <div className="flex gap-6 my-2">
                <Link href="/about" className="font-ibm-plex font-bold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">À propos</Link> 
                <Link href="/cv" className="font-ibm-plex font-bold text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Mon CV</Link>
              </div>
            </div>
        </div>
      </div>
    </div> 
  );
}
