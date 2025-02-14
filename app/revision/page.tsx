import { Metadata } from "next";
import DetailsPage from "../detailsPage/DetailsPage";


export const metadata: Metadata = {
  title: "Révision - LinguaSphere.fr",
  description: "révision de documents",
}

export default function Révision() {
   return (
     <DetailsPage 
       currentCategory={"Révision"}
       currentService={"Révision"}
     />
   );
}
