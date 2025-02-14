import { Metadata } from "next";
import DetailsPage from "../../detailsPage/DetailsPage";

export const metadata: Metadata = {
  title:
    "Sociétés - Expertises dans les domaines du droit",
  description:
    "Les sociétés sont des entités juridiques qui nécessitent une expertise particulière.",     
};

export default function ChangementEcran() {
  return (
    <DetailsPage
      currentCategory={"Expertises dans les domaines du droit"}
      currentService={"Sociétés"}
    />
  );
}
