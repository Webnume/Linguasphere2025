import { Metadata } from "next";
import DetailsPage from "../../detailsPage/DetailsPage";

export const metadata: Metadata = {
  title:
    "Communication juridique - Expertises dans les domaines du droit",
  description:
    "La communication juridique est un domaine qui nécessite une expertise particulière.",     
};

export default function CommunicationJuridique() {
  return (
    <DetailsPage
      currentCategory={"Expertises dans les domaines du droit"}
      currentService={"Communication juridique"}
    />
  );
}
