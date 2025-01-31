import { Metadata } from "next";
import DetailsPage from "../../detailsPage/DetailsPage";

export const metadata: Metadata = {
  title:
    "Sauvegarde et récupération de données - Dépannage informatique Montpellier 34",
  description:
    "sauvegarde et récupération de données à Montpellier 34. Dépannage informatique, récupération de données, pc qui ne démarre pas, sauvegarde de données, extraction de données",     
};

export default function SauvegardeDeDonnees() {
  return (
    <DetailsPage
      currentCategory={"Dépannage informatique"}
      currentService={"Sauvegarde et récupération de données"}
    />
  );
}
