import { Metadata } from "next";
import DetailsPage from "../../detailsPage/DetailsPage";

export const metadata: Metadata = {
  title:
    "Installation de box internet, dépannage et configuration réseau Montpellier 34",
  description:
    "Installation à domicile de box internet : Free, Orange, SFR, Numericable, Bouygues  - Dépannage de connexion internet  - Assistance Informatique Montpellier 34",
};

export default function InstallationReseau() {
  return (
    <DetailsPage
      currentCategory={"Assistance informatique"}
      currentService={"Installation de box internet, dépannage et configuration réseau"}
    />
  );
}
