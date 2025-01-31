import Link from "next/link";
import { contentData } from "../data/contentData";
import { FaBalanceScale, FaRegThumbsUp, FaPen } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

export default function ListCardMini() {
  return (
    <section className="flex flex-wrap md:flex-nowrap content-center justify-center gap-4 lg:justify-around lg:flex-row">
      {contentData.map(
        (categorie) =>
          categorie.name !== "Expertises dans les domaines du droit" &&
          categorie.name !== "À propos" &&
          categorie.image && (
            <Link href={categorie.linkHref} key={categorie.name}>
              <article className="group sm:flex sm:flex-col border border-blue sm:max-w-[280px] p-4 h-full hover:border-orange hover:border-1 hover:scale-105 transition ease-in-out items-center gap-4">
                {/* <Image
                  src={categorie.image?.src}
                  alt={categorie.image?.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%" }}
                  className="self-center mb-4"
                /> */}
                {categorie.name ===
                  "Traduction juridique anglais-espagnol vers le français" && (
                  <FaBalanceScale className="text-6xl text-blue group-hover:text-orange" />
                )}
                {categorie.name === "Révision" && (
                  <FaRegThumbsUp className="text-6xl text-blue group-hover:text-orange" />
                )}
                {categorie.name === "Rédaction" && (
                  <FaPen className="text-6xl text-blue group-hover:text-orange" />
                )}
                {categorie.name === "Formation à la traduction juridique" && (
                  <FaGraduationCap className="text-6xl text-blue group-hover:text-orange" />
                )}
                <h2 className="font-semibold text-blue group-hover:text-orange">
                  {categorie.name ===
                  "Traduction juridique anglais-espagnol vers le français"
                    ? "Traduction"
                    : categorie.name}
                </h2>
                <p className="">{categorie.description}</p>
              </article>
            </Link>
          )
      )}
    </section>
  );
}
