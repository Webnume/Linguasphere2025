import { Metadata } from "next";
import DetailsPage from "../../detailsPage/DetailsPage";

export const metadata: Metadata = {
  title:
    "Dépoussiérage et nettoyage interne ordinateur PC Montpellier 34",
  description:
    "Refroidissement d'ordinateur qui chauffe trop ou fait trop de bruit, nettoyage pc portable et ventilation, refroidissement processeur",
};

export default function Surchauffe() {
  return (
    <DetailsPage
      currentCategory={"Maintenance informatique"}
      currentService={"Surchauffe de votre ordinateur"}
    />
  );
}
