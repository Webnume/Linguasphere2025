import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2 className="text-green text-xl  p-2 m-4 w-fit">DOMMAGE !</h2>
      <p>La page que vous cherchez est <b>introuvable</b>
      <Link href="/" className="bg-green p-4 m-4">
        Retourner à l'<b className="hover:text-white">accueil du site</b>
      </Link></p>
      <Image
        src="/images/error_404.gif"
        alt="404"
        width={300}
        height={300}
        className="m-4"
      />
    </div>
  );
}
