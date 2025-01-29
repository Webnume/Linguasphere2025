import { Metadata } from "next";
import DetailsPage from "../../detailsPage/DetailsPage";

export const metadata: Metadata = {
  title:
    "Suppression de virus, désinfection ordinateur PC Dépannage informatique - Montpellier 34",
  description:
    "Suppression de virus, désinfection ordinateur PC à Montpellier 34. Dépannage informatique, optimisation, mise à jour de sécurité, nettoyage pc",
};

export default function DesinfectionVirus() {
  return (
    <DetailsPage
      currentCategory={"Dépannage informatique"}
      currentService={"Suppression des virus"}
    />
  );
}
