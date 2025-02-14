import { Metadata } from "next";
import DetailsPage from "../detailsPage/DetailsPage";

export const metadata: Metadata = {
  title: "A propos",
  description:
    "Nous sommes une entreprise de traduction spécialisée dans la traduction de documents juridiques, financiers, commerciaux et techniques.",
};

export default function Apropos() {
  return (
    <DetailsPage currentCategory={"À propos"} currentService={"À propos"} />
  );
}
