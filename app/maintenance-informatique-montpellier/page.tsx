import Banner from "../banner/Banner";
import Lists from "../lists/Lists";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entreprise informatique Montpellier - Nettoyage ordinateur lent",
  description: "Optimisation et nettoyage pc à Montpellier 34. Dépannage informatique, optimisation, mise à jour, refroidissement processeur, nettoyage mac.",
}

export default function Maintenance() {
  return (
    <>
      <Banner title={"Maintenance informatique"} />
      <Lists type="Maintenance informatique" />
    </>
  );
}
