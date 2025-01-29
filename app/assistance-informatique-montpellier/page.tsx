import Banner from "../banner/Banner";
import Lists from "../lists/Lists";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assistance informatique à domicile Montpellier 34",
  description: "Assistance informatique à domicile Montpellier 34. Installation d'imprimantes, de box internet, d'ordinateur et autres périphériques.",
}

export default function Assistance() {
  return (
    <>
      <Banner title={"Assistance informatique"} />
      <Lists type="Assistance informatique" />
    </>
  );
}
