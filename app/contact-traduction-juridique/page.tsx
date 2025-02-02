import Banner from "../banner/Banner";
import { Metadata } from "next";
import Form from "../form/Form";
import Link from "next/link";
import Avantages from "../avantages/Avantages";

export const metadata: Metadata = {
  title: "PCnumerik.fr - Contact - Informatique Montpellier",
  description:
    "Informatique Montpellier 34 à domicile. Dépannage informatique Montpellier et région, intervention rapide. Réparation d'ordinateur de bureau et pc portable.",
};

export default function Contact() {
  return (
    <>
      <Banner title={"Contact et demande de devis"} />
      <section className="md:p-6 p-2 max-w-[1000px] flex flex-col">
        <h3 className="text-blue">Téléphone</h3>
        <span className="text-lg">
          <b>+33 (0)4 11 93 45 14</b>
          <span className="text-sm"> (Prix d'un appel local)</span>
        </span>
        <h3 className="text-blue">E-mail</h3>
        <span className="text-lg">
          <b>contact[at]linguasphere.fr</b>
        </span>
        <br />
        <span>
          En cas d'indisponibilité, n'hésitez pas à nous laisser un message sur
          le{" "}
          <Link
            className="link-underline link-underline-black"
            href="#formHref"
            rel="noreferrer"
          >
            <u>
              <b className="text-blue">formulaire ci-dessous</b>
            </u>
            .
          </Link>
        </span>
        <h3 id="formHref" className="text-blue">Formulaire de contact</h3>
        <Form />
      </section>
    </>
  );
}
