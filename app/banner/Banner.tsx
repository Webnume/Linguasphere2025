import { ImageSlider } from "./slider/ImageSlider";
import photo1 from "../../public/images/Translation-Banner.jpg";
import photo2 from "../../public/images/computer-language-translator_1c3fb8ae.jpg";
import photo3 from "../../public/images/Contrat-opti.jpg";
import photo4 from "../../public/images/rédaction-de-contenu-web.jpg";
import photo5 from "../../public/images/contrat1-opti.jpg";

const IMAGES = [
  { url: photo1, alt: "photo One" },
  { url: photo2, alt: "photo Two" },
  { url: photo3, alt: "photo Three" },
  { url: photo4, alt: "photo Four" },
  { url: photo5, alt: "photo Five" },
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
