import Banner from "./banner/Banner";
import ListCardMini from "./listCardMini/ListCardMini";
import { Metadata } from "next";
import GoogleReviews from "./google-reviews/GoogleReviews";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dépannage informatique Montpellier - Réparation ordinateur",
  description:
    "Dépannage informatique Montpellier. Réparation ordinateur Montpellier. Assistance informatique à domicile et maintenance par des réparateurs PC",
};

export default function Home() {
  return (
    <>
      <Banner title={"Home"} />
      <section className="flex flex-col w-full max-w-[1440px] p-4">
        <h2 className="text-xl sm:text-2xl text-start w-full py-4 lg:py-8">
          <span className="text-blue">Services linguistiques spécialisés</span>{" "}
          dans le <span className="text-blue">domaine juridique</span>, pour les
          professionnels du droit, de la conformité et de la communication
          multilingue, depuis 2005.
        </h2>
        <p>
          Choisissez un partenaire <b>linguistique</b> qui connaît votre{" "}
          <b>métier</b> et ses <b>enjeux</b> et qui vous fera <b>bénéficier</b>{" "}
          de son <b>savoir-faire reconnu</b> et de son{" "}
          <b>
            expertise pluridisciplinaire (rédactionnelle, juridique et
            linguistique).
          </b>{" "}
          <br />
          Linguasphere ne donne pas de conseils juridiques.
        </p>
        <br />
        <ListCardMini />
        <br />
      </section>
    </>
  );
}
