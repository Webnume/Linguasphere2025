import { Metadata } from "next";
import DetailsPage from "../../detailsPage/DetailsPage";

export const metadata: Metadata = {
  title:
    "Famille et patrimoine - Expertises dans les domaines du droit",
  description:
    "La famille et le patrimoine sont des domaines du droit qui nécessitent une expertise particulière.",
};

export default function FamillePatrimoine() {
  return (
    <DetailsPage
      currentCategory={"Expertises dans les domaines du droit"}
      currentService={"Famille et patrimoine"}
    />
  );
}
