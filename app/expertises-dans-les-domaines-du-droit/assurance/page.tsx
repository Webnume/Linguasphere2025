import { Metadata } from "next";
import DetailsPage from "../../detailsPage/DetailsPage";

export const metadata: Metadata = {
  title:
    "Réparation clavier pc ordinateur portable - Dépannage informatique Montpellier 34",
  description:
    "réparation clavier pc ordinateur portable à Montpellier 34. Dépannage informatique, remplacement clavier, réparation pc portable, clavier défecteux, clavier hs, clavier ne marche plus, changement clavier",     
};

export default function ChangementClavier() {
  return (
    <DetailsPage
      currentCategory={"Dépannage informatique"}
      currentService={"Réparation de clavier de PC portable"}
    />
  );
}
