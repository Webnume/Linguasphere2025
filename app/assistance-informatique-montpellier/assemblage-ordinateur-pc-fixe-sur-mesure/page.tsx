import { Metadata } from "next";
import DetailsPage from "../../detailsPage/DetailsPage";

export const metadata: Metadata = {
  title: "Assemblage ordinateur PC fixe sur mesure - Montpellier 34",
  description:
    "Assemblage d'ordinateur PC fixe sur mesure, ordinateur Gamer ou de bureau - Assistance Informatique Montpellier 34",
};

export default function AssemblagePC() {
  return (
    <DetailsPage
      currentCategory={"Assistance informatique"}
      currentService={"Assemblage d'ordinateur PC fixe sur mesure"}
    />
  );
}
