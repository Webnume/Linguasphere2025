import { ImageSlider } from "./slider/ImageSlider";
import photo1 from "../../public/images/Translation-Banner.jpg";
import photo1Title from "../../public/images/Word-Cloud-2.png";
import photo2 from "../../public/images/computer-language-translator_1c3fb8ae.jpg";
import photo2Title from "../../public/images/banniere_traduction.png";
import photo3 from "../../public/images/Contrat-opti.jpg";
import photo3Title from "../../public/images/banniere_revision.png";
import photo4 from "../../public/images/rédaction-de-contenu-web.jpg";
import photo4Title from "../../public/images/banniere_redaction.png";
import photo5 from "../../public/images/contrat1-opti.jpg";
import photo5Title from "../../public/images/banniere_formation.png";

const IMAGES = [
  { url: photo1, alt: "photo One", titleUrl: photo1Title },
  { url: photo2, alt: "photo Two", titleUrl: photo2Title },
  { url: photo3, alt: "photo Three", titleUrl: photo3Title },
  { url: photo4, alt: "photo Four", titleUrl: photo4Title },
  { url: photo5, alt: "photo Five", titleUrl: photo5Title },
];

export default function Banner({ title }: { title: string }) {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "16 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={IMAGES} />
    </div>
  );
}
