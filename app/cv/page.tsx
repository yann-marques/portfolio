import Link from "next/link";

export default function CV() {
  return (
    <div className="w-full flex flex-col items-center">
      
        <div className="w-4xl mt-4 flex justify-center">
            <div className="flex my-8 bg-dark py-2 px-4 rounded-md shadow-[0px_0px_30px_2px_rgb(90,90,90,90)]">
            <ul className="flex flex-row gap-4">
                <Link href="/" className="font-ibm-plex hover:underline">./Accueil</Link>
                <Link href="/portfolio" className="font-ibm-plex hover:underline">./Portfolio</Link>
                <Link href="/cv" className="font-ibm-plex hover:underline">./CV</Link>
            </ul>
            </div>
        </div>

        <div className="flex w-4xl">
            <iframe
                src="/cv.pdf"
                width="100%"
                height="1000"
                className="border rounded-lg flex"
                title="PDF Viewer"
            />
        </div>

    </div> 
  );
}