import Head from "next/head";
import Link from "next/link";

async function getRepos() {
  const res = await fetch("https://api.github.com/users/yann-marques/repos", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Failed to fetch repos");

  return res.json();
}

export default async function Projects() {

  const repos = await getRepos();

  return (
    <div className="w-full flex flex-col items-center">
      
        <div className="w-4xl mt-8 flex justify-center">
            <div className="flex my-8 bg-dark py-2 px-4 rounded-md shadow-[0px_0px_30px_2px_rgb(90,90,90,90)]">
            <ul className="flex flex-row gap-4">
                <Link href="/" className="font-ibm-plex hover:underline">./Accueil</Link>
                <Link href="/projects" className="font-ibm-plex hover:underline">./Projets</Link>
            </ul>
            </div>
        </div>


        <div className="flex flex-col w-5xl">
            <div className="flex flex-col my-8 w-full">
                <div className="flex gap-52 items-center justify-between">
                    <div className="flex">
                        <h1 className="font-ibm-plex font-bold text-2xl flex gap-4 items-center">Mes projets</h1>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[rgb(90,90,90)] my-3"></div>
            </div>

            <div className="flex flex-col items-center">
                <div className="grid gap-6 md:grid-cols-4">
                    {repos.map((repo: any) => (
                        <a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block border border-gray-500 bg-gradient-to-br from-[#454545] to-[#000000] rounded-xl p-4 hover:shadow-lg transition"
                        >
                            <h2 className="text-xl font-semibold">{repo.name}</h2>
                                <p className="text-gray-400 text-sm mt-1">
                                {repo.description || "No description"}
                                </p>
                            <div className="flex items-center gap-4 text-xs text-gray-200 mt-3">
                                <span>⭐ {repo.stargazers_count}</span>
                                <span>🍴 {repo.forks_count}</span>
                                <span>🛠 {repo.language || "Unknown"}</span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="flex flex-col my-8 w-full">
                    <div className="flex gap-52 items-center justify-between">
                        <div className="flex">
                            <h1 className="font-ibm-plex font-bold text-2xl flex gap-4 items-center">Mes statistiques Github</h1>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-[rgb(90,90,90)] my-3"></div>
                </div>
                
                <div className="flex w-full justify-around gap-6 mb-10">
                    <div className="flex flex-col">
                        <img
                            src="https://github-stats-extended.vercel.app/api?username=yann-marques&show_icons=true&theme=dark&count_private=true"
                            alt="GitHub Stats"
                            className="rounded-lg h-full"
                        />
                    </div>
                    <div className="flex flex-col">
                        <img
                            src="https://github-stats-extended.vercel.app/api/top-langs/?username=yann-marques&layout=compact&theme=dark"
                            alt="Top Languages"
                            className="rounded-lg h-full"
                        />
                    </div>
                </div>
            </div>
        </div>


    </div>

  );
}