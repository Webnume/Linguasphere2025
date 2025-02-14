import { Metadata } from "next";
import DetailsPage from "../../detailsPage/DetailsPage";

export const metadata: Metadata = {
  title:
    "international et arbitrage - Expertises dans les domaines du droit",
  description:
    "L'arbitrage international est un domaine du droit qui nécessite une expertise particulière.",     
};

export default function ChangementEcran() {
  return (
    <DetailsPage
      currentCategory={"Expertises dans les domaines du droit"}
      currentService={"International et arbitrage"}
    />
  );
}
