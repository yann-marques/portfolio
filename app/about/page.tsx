import Link from "next/link";

export default function About() {
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
              <h1 className="font-ibm-plex font-bold text-2xl flex gap-4 items-center"><span className="text-md font-normal">about.js &gt;</span>À propos de moi</h1>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[rgb(90,90,90)] my-3"></div>
          <div className="flex flex-col text-justify">
            <p className="font-ibm-plex">
              Je m’appelle Yann, j’ai <strong>22 ans</strong> et j’étudie à l’école 42 à Angoulême. Je recherche actuellement un stage de <strong>6 mois</strong> en développement logiciel, que j’aimerais ensuite prolonger par une alternance de deux ans.
            </p>
            <br />
            <p className="font-ibm-plex">Je code principalement en <strong>C</strong> et <strong>C++</strong> sous Linux, mais je m’intéresse aussi beaucoup au développement backend <strong>(NodeJS, TypeScript, bases de données, optimisation)</strong>.
              Ce qui me plaît le plus, c’est comprendre en profondeur comment un programme fonctionne, organiser le code de façon propre et chercher des solutions performantes.
            </p>
            <br />
            <p className="font-ibm-plex">Au fil de mes projets à 42, j’ai eu l’occasion de développer un <strong>shell</strong> unix en <strong>C</strong>, un serveur web <strong>HTTP</strong> en <strong>C++98</strong>, des images Docker, ou encore un jeu multijoueur en 3D avec <strong>NodeJS</strong>. Vous trouverez tous les pautres projets dans <Link href="/projects" className="font-ibm-plex hover:underline"><strong>Mes projets</strong></Link>. 
              En parallèle, je travaille aussi sur des projets persos comme un bot de trading sur la blockchain Solana.
            </p>
            <br />
            <p className="font-ibm-plex">Aujourd’hui, ce que je recherche, c’est une expérience en entreprise qui me permette de progresser dans le développement backend, de découvrir le travail en équipe et les méthodes de production logicielle, et surtout de mettre mes compétences au service de projets concrets.</p>
          </div>
        </div>
      </div>
    </div> 
  );
}