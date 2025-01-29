import { Metadata } from "next";
import DetailsPage from "../../detailsPage/DetailsPage";

export const metadata: Metadata = {
  title: "Installation de matériel et périphérique informatique Montpellier 34",
  description:
    "Installation de matériels informatiques, disque ssd, ram, mémoire vive, carte graphique, carte mère, wifi, nas  - Assistance Informatique Montpellier 34",
};

export default function InstallationMateriel() {
  return (
    <DetailsPage
      currentCategory={"Assistance informatique"}
      currentService={"Installation de matériel informatique"}
    />
  );
}
