import { Metadata } from "next";
import DetailsPage from "../detailsPage/DetailsPage";


export const metadata: Metadata = {
  title: "Entreprise informatique Montpellier - Nettoyage ordinateur lent",
  description: "Optimisation et nettoyage pc à Montpellier 34. Dépannage informatique, optimisation, mise à jour, refroidissement processeur, nettoyage mac.",
}

export default function Traduction() {
   return (
     <DetailsPage 
       currentCategory={"Formation à la traduction juridique"}
       currentService={"Formation à la traduction juridique"}
     />
   );
}
