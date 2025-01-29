import Image from "next/image";
import Link from "next/link";
import { contentData } from "../data/contentData";

export default function ListCardMini() {
  // const { depannage, maintenance, assistance, recuperation } = contentData;
  // const data = [
  //   depannage,
  //   maintenance,
  //   assistance,
  //   recuperation,
  // ];

  return (
    <section className="flex flex-wrap md:flex-nowrap content-center justify-center gap-4 lg:justify-around lg:flex-row">
      {contentData.map(
        (categorie) =>
          categorie.image && (
            <Link href={categorie.linkHref} key={categorie.name}>
              <article className="group sm:flex sm:flex-col border border-gray-700 sm:max-w-[280px] p-4 h-full hover:border-green hover:border-1 hover:scale-105 transition ease-in-out">
                <Image
                  src={categorie.image?.src}
                  alt={categorie.image?.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%" }}
                  className="self-center mb-4"
                />
                <h2 className="uppercase font-semibold text-gray-700 group-hover:text-green">
                  {categorie.name}
                </h2>
                <p className="">{categorie.description}</p>
              </article>
            </Link>
          )
      )}
    </section>
  );
}
