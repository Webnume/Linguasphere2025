import Banner from "../banner/Banner";
import Lists from "../lists/Lists";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réparation ordinateur PC Montpellier - Dépannage informatique",
  description: "Réparation d'ordinateur MAC et PC, dépannage informatique à Montpellier. Réparateur d'ordinateur portable.",
}
 
export default function Depannage() {
  return (
    <>
      <Banner title={"Dépannage informatique"} />
      <Lists type="Dépannage informatique" />
    </>
  );
}
