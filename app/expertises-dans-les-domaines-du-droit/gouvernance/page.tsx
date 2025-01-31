import { Metadata } from "next";
import DetailsPage from "../../detailsPage/DetailsPage";

export const metadata: Metadata = {
  title:
    "Expertises dans les domaines du droit - Gouvernance",
  description:
    "Expertises dans les domaines du droit, Gouvernance, Programmes de conformité, codes de déontologie, chartes éthiques, Programmes de lutte contre les crimes et délits financiers, Corruption, Fraude, Délit d’initiés, Blanchiment de capitaux",
};

export default function Expertise() {
  return (
    <DetailsPage
      currentCategory={"Expertises dans les domaines du droit"}
      currentService={"Gouvernance"}
    />
  );
}
