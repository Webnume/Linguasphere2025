import { Metadata } from "next";
import DetailsPage from "../detailsPage/DetailsPage";


export const metadata: Metadata = {
  title: "Traduction juridique anglais-espagnol vers le français - LinguaSphere.fr",
  description: "Traduction juridique anglais-espagnol vers le français",
}

export default function Traduction() {
   return (
     <DetailsPage 
       currentCategory={"Traduction juridique anglais-espagnol vers le français"}
       currentService={"Traduction juridique anglais-espagnol vers le français"}
     />
   );
}
