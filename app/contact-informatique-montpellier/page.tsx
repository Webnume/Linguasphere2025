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
      <Avantages />
      <section className="md:p-6 p-2 max-w-[1000px] flex flex-col">
        <span className="font-bold text-lg text-green border-2 border-green p-2 text-center">
          PCnumerik intervient uniquement{" "}
          <span className="text-gray-700">sur rendez-vous</span>
        </span>
        <br />
        <h3>TÉLÉPHONE</h3>
        <span className="text-lg">
          <b>04 11 93 44 72</b>
          <span className="text-sm"> (Prix d'un appel local)</span>
        </span>
        <span>
          En cas d'indisponibilité, n'hésitez pas à nous laisser un message sur
          le{" "}
          <Link
            className="link-underline link-underline-black"
            href="#formHref"
            rel="noreferrer"
          >
            <u>
              <b>formulaire ci-dessous</b>
            </u>
            .
          </Link>
        </span>
        <h3 id="formHref">FORMULAIRE DE CONTACT</h3>
        <Form />
      </section>
    </>
  );
}
