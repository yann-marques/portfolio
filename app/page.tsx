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
            <Link href="/projects" className="font-ibm-plex hover:underline">./Projets</Link>
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
            <p className="font-ibm-plex">Je m’appelle Yann, j’ai <strong>23</strong> ans et j’étudie actuellement à l’école 42 Paris.</p>
            <br />
            <p className="font-ibm-plex">Je programme depuis plusieurs années déjà.
              Tout a commencé avec ma passion pour les jeux vidéo : je créais des serveurs de jeux dédiés pour mes amis, ce qui m’a rapidement conduit à découvrir Linux vers l’âge de 16 ans.
              C’est à ce moment-là que je me suis initié à la programmation.</p>
            <br />
            <p className="font-ibm-plex">Mes premiers pas ont été en <strong>PHP</strong> et <strong>SQL</strong>, en réalisant des sites web avec des amis.
              Puis j'ai approfondi mes connaissances web avec plusieurs frameworks <strong>(Nest, Django, FastAPI, React, Next)</strong> et exploré différents types d'APIs <strong>(Rest, GraphQL, gRPC, WebSockets)</strong> grâce à <strong>plusieurs projets personnels</strong>.</p>
            <br />
            <p className="font-ibm-plex">À 42, je développe en majeur partie avec des langages "système" comme <strong>C</strong>, <strong>C++</strong>, <strong>Rust</strong> sous Linux.
              L'optimisation des ressources du programme et bonne organisation du code font partie des bases de mon cursus.</p>
            <br />
            <p className="font-ibm-plex">Après le tronc commun de 42, j'ai fait un stage de 6 mois en tant que développeur web fullstack à Paris.
              J'ai pu découvrir le monde professionnel et travailler en équipe sur une codebase importante. Cela m'a apporté une expérience sur quelques technos que je ne connaissais pas <strong>(Django, Ansible, Pipline CI/DC GitHub, AWS)</strong>.</p>
            <br />
            <p className="font-ibm-plex">Dans ce portfolio, vous trouverez des informations sur mes compétences, mon parcours académique et professionnel, ainsi que mes projets réalisés.</p>
          </div>
          <div className="flex flex-col justify-center items-center my-8">
              <h1 className="font-ibm-plex font-bold text-2xl flex gap-4 items-center">Je suis actuellement en alternance: 2026-2028</h1>
              <div className="flex gap-4 my-4">
                <Link href="/about" className="font-ibm-plex font-bold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">À propos</Link> 
                <Link href="/cv" className="font-ibm-plex font-bold text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Mon CV</Link>
              </div>
            </div>
        </div>
      </div>
    </div> 
  );
}
