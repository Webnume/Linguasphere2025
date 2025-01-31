import Link from "next/link";
import Faq from "./Faq";

const data = [
  {
    question: (
      <h4>
        Traduction juridique dans les couples de langues anglais-français et
        espagnol-français
      </h4>
    ),
    answer: (
      <>
        Mémentos droit(s) et langue(s)
        <br />
        Objectif : disposer d’un savoir-faire, d’outils et de ressources pour
        traduire des documents liés à un domaine du droit (famille, biens,
        sociétés, contrats) dans un couple de langues (anglais ou espagnol vers
        le français)
        <ul>
          <li>Les essentiels du droit et de la terminologie </li>
          <li>Étude comparative des concepts et du langage juridiques</li>
          <li>Analyse juridique et linguistique de clauses types</li>
          <li>Atelier de traduction/révision</li>
          <li>
            Constitution d’une boîte à outils (lexique/glossaire spécialisé ;
            clausier bilingue spécialisé ; livret de documentation ; guide des
            ressources)
          </li>
        </ul>
        Les fondamentaux de la traduction juridique
        <br />
        Objectif : disposer d’un savoir-faire, d’outils et de ressources pour
        traduire des documents juridiques simples.
        <ul>
          <li>
            Typologie des textes juridiques : avoir une vue d’ensemble des
            sources et des branches du droit pour identifier les différents
            textes juridiques
          </li>
          <li>
            ABC des grands systèmes de droit : avoir un panorama des grandes
            familles juridiques
          </li>
          <li>
            ABC du langage juridique (AN, ES, FR) : connaître les spécificités
            du langage juridique pour comprendre les principaux types de
            documents juridiques
          </li>
          <li>
            {" "}
            Spécificités de la traduction juridique : étude et analyse des
            particularités de la traduction du droit (difficultés et solutions){" "}
          </li>
          <li>Mémento qualité : liste de points de vérification</li>
          <li>
            Guide des ressources : liste de ressources et étude de leur
            pertinence
          </li>
        </ul>
      </>
    ),
  },
  {
    question: <h4>Français juridique</h4>,
    answer: (
      <>
        Les fondamentaux de la culture et du langage juridiques
        <br />
        Objectif : disposer d’un savoir-faire, d’outils et de ressources pour
        comprendre et rédiger en français des documents juridiques simples
        <ul>
          <li>
            Typologie des textes juridiques : avoir une vue d’ensemble des
            sources et des branches du droit pour identifier les différents
            textes juridiques
          </li>
          <li>
            ABC du système de droit français : avoir un panorama des
            institutions et des acteurs judiciaires français
          </li>
          <li>
            ABC du langage juridique : connaître les spécificités du français du
            droit pour comprendre les principaux types de documents juridiques
          </li>
          <li>Atelier compréhension/rédaction</li>
          <li>
            Guide des ressources : liste de ressources et étude de leur
            pertinence
          </li>
        </ul>
      </>
    ),
  },
  {
    question: (
      <h4>Formations spécialisées sur mesure</h4>
    ),
    answer: (
      <p>
        Conception de formations adaptées à vos besoins.
      </p>
    ),
  },
];

export default function FaqList() {
  return (
    <section className="flex flex-col mb-4">
      {data.map((item, i) => (
        <Faq key={i} item={item} />
      ))}
    </section>
  );
}
