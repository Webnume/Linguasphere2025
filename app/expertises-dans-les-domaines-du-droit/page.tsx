import Banner from "../banner/Banner";
import Lists from "../lists/Lists";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expertises dans les domaines du droit - LinguaSphere.fr",
  description:
    "Expertises dans les domaines du droit, Gouvernance, Programmes de conformité, codes de déontologie, chartes éthiques, Programmes de lutte contre les crimes et délits financiers, Corruption, Fraude, Délit d’initiés, Blanchiment de capitaux",
};

export default function Depannage() {
  return (
    <>
      <Banner title={"Expertises dans les domaines du droit"} />
      <Lists type="Expertises dans les domaines du droit" />
    </>
  );
}
