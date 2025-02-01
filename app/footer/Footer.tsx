import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full text-white text-sm mt-8">
      <section className="flex flex-col md:flex bg-gray-700 justify-center w-full items-center ">
        <article className="max-w-[1440px] flex-col w-full flex gap-8 justify-between md:flex-row  items-center p-4">
          <section className="flex flex-col items-center">
            <Link
              href="/contact-traduction-juridique"
              className="flex gap-2 items-center"
            >
              <GrContact size="2rem" />
              <strong>Formulaire de contact</strong>
            </Link>
          </section>
          {/* <ul className="text-left p-l-[20px]">
            <li>
              <Link href="/depannage-informatique-montpellier#Formatage%20et%20réinstallation%20du%20système%20d'exploitation">
                Formatage de PC.
              </Link>
            </li>
            <li>
              <Link href="/depannage-informatique-montpellier#Suppression%20des%20virus">
                Désinfection de virus informatiques.
              </Link>
            </li>
            <li>
              <Link href="/depannage-informatique-montpellier#Formatage%20et%20r%C3%A9installation%20du%20syst%C3%A8me%20d'exploitation">
                Installation de système d'exploitation.
              </Link>
            </li>
            <li>
              <Link href="/recuperation-de-donnees-montpellier">
                Récupération de données.
              </Link>
            </li>
            <li>
              <Link href="/assistance-informatique-montpellier#Installation%20de%20mat%C3%A9riel%20plus%20performant">
                Installation de matériels.
              </Link>
            </li>
            <li>
              <Link href="/maintenance-informatique-montpellier#Maintenance%20pr%C3%A9ventive%20de%20votre%20ordinateur">
                Maintenance informatique.
              </Link>
            </li>
          </ul> */}
          {/* <ul className="text-align:left; padding-left:20px;">
            <li>
              <Link href="/assistance-informatique-montpellier#Installation%20de%20box%20internet%20et%20configuration%20r%C3%A9seau">
                Installation d'internet et wifi.
              </Link>
            </li>
            <li>
              <Link href="/assistance-informatique-montpellier#Installation%20de%20box%20internet%20et%20configuration%20r%C3%A9seau">
                Installation de réseau informatique.
              </Link>
            </li>
            <li>
              <Link href="/assistance-informatique-montpellier">
                Assistance informatique.
              </Link>
            </li>
            <li>
              <Link href="/maintenance-informatique-montpellier">
                Amélioration de performance de PC.
              </Link>
            </li>
            <li>
              <Link href="/maintenance-informatique-montpellier#Surchauffe%20de%20votre%20ordinateur">
                Nettoyage de poussière.
              </Link>
            </li>
            <li>
              <Link href="/maintenance-informatique-montpellier#Surchauffe%20de%20votre%20ordinateur">
                Changement de pâte thermique.
              </Link>
            </li>
          </ul> */}
          <p className="flex items-center gap-8">
            <Link
              href="https://www.linkedin.com/in/virginie-vermonet-linguasphere/"
              target="_blank"
            >
              <FaLinkedinIn size="1.75rem" />
            </Link>
            <Link href="https://x.com/LinguasphereFr" target="_blank">
              <FaXTwitter size="1.75rem" />
            </Link>
          </p>
        </article>
      </section>
      <section className="bg-gray-900 flex justify-center w-full p-4 text-sm">
        <article className="flex flex-col w-full max-w-[1440px] gap-8 justify-between md:flex-row  items-center">
          <ul>
            <Link href="/">Accueil</Link> |{" "}
            <Link href="/expertises-dans-les-domaines-du-droit">
              Expertises
            </Link>{" "}
            |{" "}
            <Link href="/traduction-juridique-anglais-espagnol-vers-le-francais">
              Traduction
            </Link>{" "}
            | <Link href="/revision">Révision</Link> |{" "}
            <Link href="/redaction">Rédaction</Link> |{" "}
            <Link href="/formation-a-la-traduction-juridique">Formation</Link> |{" "}
            <Link href="/a-propos">À propos</Link> |{" "}
            <Link href="/contact-traduction-juridique">Contact</Link>
          </ul>
          <section>
            <ul className="flex gap-4">
              <li>
                <Link href="/cgv/mentions-legales.pdf" target="_blank">
                  Mentions légales
                </Link>
              </li>
              <li>Copyright © 2005-{new Date().getFullYear()}, LinguaSphere</li>
            </ul>
          </section>
        </article>
      </section>
    </footer>
  );
}
