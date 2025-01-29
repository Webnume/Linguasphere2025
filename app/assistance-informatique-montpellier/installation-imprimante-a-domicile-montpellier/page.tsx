import { Metadata } from "next";
import DetailsPage from "../../detailsPage/DetailsPage";

export const metadata: Metadata = {
  title:
    "Installation imprimante à domicile wifi ou sans fil Montpellier",
  description:
    "Installation à domicile d'imprimante et scan, avec ou sans fil wifi - Assistance Informatique Montpellier 34",
};

export default function Imprimante() {
  return (
    <DetailsPage
      currentCategory={"Assistance informatique"}
      currentService={"Installation d'imprimante à domicile"}
    />
  );
}
