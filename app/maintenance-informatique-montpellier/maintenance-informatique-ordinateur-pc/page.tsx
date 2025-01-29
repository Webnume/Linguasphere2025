import { Metadata } from "next";
import DetailsPage from "../../detailsPage/DetailsPage";

export const metadata: Metadata = {
  title:
    "Maintenance informatique ordinateur PC Montpellier 34",
  description:
    "Optimisation et nettoyage pc. maintenance informatique 34, installation logciels et matériels, mise à jour de sécurité, sauvegarde de données",
};

export default function Maintenance() {
  return (
    <DetailsPage
      currentCategory={"Maintenance informatique"}
      currentService={"Maintenance préventive de votre ordinateur"}
    />
  );
}
