import DetailsPage from "../detailsPage/DetailsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rédaction - LinguaSphere.fr",
  description:
    "Rédaction de documents",
};

export default function Redaction() {
  return (
    <>
      <DetailsPage
      currentCategory={"Rédaction"}
      currentService={"Rédaction"}
      NoReturnButton
    />
    </>
  );
}
