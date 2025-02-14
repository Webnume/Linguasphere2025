import { Metadata } from "next";
import DetailsPage from "../detailsPage/DetailsPage";


export const metadata: Metadata = {
  title: "formation à la traduction juridique",
  description: "La formation à la traduction juridique est un domaine qui nécessite une expertise particulière.",
}

export default function Formation() {
   return (
     <DetailsPage 
       currentCategory={"Formation à la traduction juridique"}
       currentService={"Formation à la traduction juridique"}
     />
   );
}
