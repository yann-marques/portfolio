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
            <Link href="/portfolio" className="font-ibm-plex hover:underline">./Portfolio</Link>
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

            <p className="font-ibm-plex">Je m’appelle Yann, j’ai <strong>22</strong> ans et j’étudie actuellement à l’école 42 à Angoulême. Je recherche un stage de <strong>6 mois</strong> en développement logiciel, que j’aimerais ensuite prolonger par une alternance de deux ans.</p>
            <br />
            <p className="font-ibm-plex">Passionné d’informatique depuis mes <strong>16 ans</strong>, j’ai commencé en créant des serveurs de jeux sous Linux pour mes amis, ce qui m’a conduit à la programmation. J’ai d’abord appris le <strong>PHP</strong> et <strong>SQL</strong> pour développer des sites web, puis le <strong>Python</strong> avec <strong>Django (POO)</strong> et <strong>FastAPI (APIs)</strong>.</p>
            <br />
            <p className="font-ibm-plex">Aujourd’hui, à 42, je code principalement en <strong>C</strong> et <strong>C++</strong> sous <strong>Linux</strong>, en travaillant l’optimisation, la détection de fuites mémoire et la bonne organisation du code. Je m’intéresse aussi beaucoup au développement backend <strong>(Node.js, TypeScript, bases de données, optimisation)</strong>. Ce que j’aime avant tout, c’est comprendre en profondeur le fonctionnement des programmes et concevoir des solutions performantes.</p>
            <br />
            <p className="font-ibm-plex">Parmi mes projets notables :</p>
            <br />

            <ul className="list-inside list-disc px-4">
                <li className="font-ibm-plex"><strong>Shell Unix en C</strong> — un shell minimal avec parsing, gestion de processus et redirections.</li>
                <li className="font-ibm-plex"><strong>Serveur web HTTP en C++98</strong> — implémentation basique d'un serveur HTTP compatible C++98.</li>
                <li className="font-ibm-plex"><strong>Images Docker</strong> — création et optimisation d'images Docker pour plusieurs services.</li>
                <li className="font-ibm-plex"><strong>Jeu multijoueur 3D (Node.js)</strong> — backend Fastify et jeu avec BabylonJS</li>
                <li className="font-ibm-plex"><strong>Bot de trading sur Solana</strong> — projet perso d'automatisation de trading sur la blockchain Solana.</li>
            </ul>

            <br />
            <p className="font-ibm-plex">Ce portfolio présente mes compétences, mon parcours académique et professionnel, ainsi que l’ensemble de mes projets réalisés.</p>

          </div>
          <div className="flex flex-col justify-center items-center my-8">
              <h1 className="font-ibm-plex font-bold text-2xl flex gap-4 items-center">Je recherche actuellement un stage de 6 mois</h1>
              <div className="flex gap-6 my-2">
                <Link href="/cv" className="font-ibm-plex font-bold text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Mon CV</Link>
              </div>
            </div>
        </div>
      </div>
    </div> 
  );
}
