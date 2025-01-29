import { Metadata } from "next";
import DetailsPage from "../../detailsPage/DetailsPage";

export const metadata: Metadata = {
  title:
    "Diagnostic informatique ordinateur pc et matériel - Dépannage informatique Montpellier 34",
  description:
    "diagnostic informatique ordinateur pc à Montpellier 34. Dépannage informatique, optimisation, détection de panne, réparation, remplacement de pièces, nettoyage pc",
};

export default function Diagnostic() {
  return (
    <DetailsPage
      currentCategory={"Dépannage informatique"}
      currentService={"Diagnostic informatique"}
    />
  );
}
