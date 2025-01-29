import { Metadata } from "next";
import DetailsPage from "../../detailsPage/DetailsPage";

export const metadata: Metadata = {
  title:
    "Réparation écran pc ordinateur portable - Dépannage informatique Montpellier 34",
  description:
    "réparation écran pc ordinateur portable à Montpellier 34. Dépannage informatique, remplacement écran, réparation pc portable, écran cassé, écran noir, écran blanc, écran qui clignote, changement écran",     
};

export default function ChangementEcran() {
  return (
    <DetailsPage
      currentCategory={"Dépannage informatique"}
      currentService={"Réparation d'écran de PC portable"}
    />
  );
}
