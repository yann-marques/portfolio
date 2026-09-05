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
    <div className="flex w-full flex-col items-center px-4 sm:px-6">
      
        <div className="mt-8 flex w-full max-w-4xl justify-center">
            <div className="my-8 flex rounded-md bg-dark px-4 py-2 shadow-[0px_0px_30px_2px_rgb(90,90,90,90)]">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                <Link href="/" className="font-ibm-plex hover:underline">./Accueil</Link>
                <Link href="/projects" className="font-ibm-plex hover:underline">./Projets</Link>
            </ul>
            </div>
        </div>


        <main className="flex w-full max-w-5xl flex-col">
            <div className="flex flex-col my-8 w-full">
                <div className="flex items-center justify-between">
                    <div className="flex min-w-0 justify-center">
                        <h1 className="font-ibm-plex text-xl font-bold sm:text-2xl">Mes projets</h1>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[rgb(90,90,90)] my-3"></div>
            </div>

            <div className="flex flex-col items-center">
                <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {repos.map((repo: any) => (
                        <a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block min-w-0 rounded-xl border border-gray-500 bg-gradient-to-br from-[#454545] to-[#000000] p-4 transition hover:shadow-lg"
                        >
                            <h2 className="break-words text-xl font-semibold">{repo.name}</h2>
                                <p className="mt-1 break-words text-sm text-gray-400">
                                {repo.description || "No description"}
                                </p>
                            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-200">
                                <span>⭐ {repo.stargazers_count}</span>
                                <span>🍴 {repo.forks_count}</span>
                                <span>🛠 {repo.language || "Unknown"}</span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="flex flex-col my-8 w-full">
                    <div className="flex items-center justify-between">
                        <div className="flex min-w-0">
                            <h2 className="font-ibm-plex text-xl font-bold sm:text-2xl">Mes statistiques Github</h2>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-[rgb(90,90,90)] my-3"></div>
                </div>
                
                <div className="mb-10 grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="flex min-w-0">
                        <img
                            src="https://github-stats-extended.vercel.app/api?username=yann-marques&show_icons=true&theme=dark&count_private=true"
                            alt="GitHub Stats"
                            className="h-auto w-full max-w-[420px] rounded-lg"
                        />
                    </div>
                    <div className="flex min-w-0 justify-center">
                        <img
                            src="https://github-stats-extended.vercel.app/api/top-langs/?username=yann-marques&layout=compact&theme=dark"
                            alt="Top Languages"
                            className="h-auto w-full max-w-[420px] rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </main>


    </div>

  );
}