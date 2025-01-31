import DetailsPage from "../detailsPage/DetailsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Récupération de données Montpellier",
  description:
    "Récupération de données Montpellier 34 : disque dur, clé usb, mémoire flash, cd, dvd ...",
};

export default function RecuperationDonnees() {
  return (
    <>
      <DetailsPage
      currentCategory={"Rédaction"}
      currentService={"Rédaction"}
      NoReturnButton
    />
    </>
  );
}
