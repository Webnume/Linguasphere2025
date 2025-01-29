import Banner from "@/banner/Banner";
import ListCardMini from "@/listCardMini/ListCardMini";
import FaqList from "@/faq/FaqList";
import Avantages from "@/avantages/Avantages";
import { Metadata } from "next";
import GoogleReviews from "@/google-reviews/GoogleReviews";

export const metadata: Metadata = {
  title: "Dépannage informatique Saint-Jean-de-Védas - Réparation ordinateur",
  description:
    "Dépannage informatique Saint-Jean-de-Védas. Réparation ordinateur Saint-Jean-de-Védas. Assistance informatique à domicile et maintenance par des réparateurs PC",
};

export default function Home() {
  return (
    <>
      <Banner title={"Dépannage informatique Saint Jean de Védas"} />
      <section className="flex flex-col w-full max-w-[1440px] p-4">
        <h2 className="flex items-center text-xl sm:text-2xl text-center w-full p-4 lg:p-8">
          Maintenance informatique, réparation d'ordinateur PC, dépannage et
          assistance informatique pour Saint-Jean-de-Védas.
        </h2>
        <Avantages />
        <h3>Qui sommes-nous ?</h3>
        <p>
          Depuis 1998,{" "}
          <strong>
            PC<span className="text-green">NUMERIK</span>
          </strong>
          , entreprise de <strong>dépannage informatique à Montpellier</strong>,
          propose des prestations d'
          <strong>assistance et de réparation</strong> informatique pour la
          ville et ses environs (34430, 34970 ...). <br />
          Nous intervenons uniquement{" "}
          <strong>à domicile pour les particuliers</strong> ou{" "}
          <b>sur site pour les professionnels</b>. 
          <br />
          Dans les meilleurs délais, un{" "}
          <strong>réparateur qualifié</strong> prend en charge votre{" "}
          <strong>ordinateur de bureau</strong> ou de{" "}
          <strong>PC portable</strong>, et/ou installe les{" "}
          <strong>équipements informatiques et réseaux associés</strong>. Nos
          services de réparation, de formation, ou d'assistance informatiques
          sont toujours réalisés dans le cadre d'un{" "}
          <strong>strict secret professionnel</strong>.
        </p>
        <br />
        <ListCardMini />
        <h3>
          Pourquoi une maintenance informatique régulière est-elle si importante
          ?
        </h3>
        <p>
          De nos jours, avec l’explosion des plateformes et systèmes
          d’information, il est primordial de protéger vos outils informatiques,
          car toutes vos données sensibles transitent via le réseau internet. La
          sécurité est donc une nécessité pour réduire les risques de
          défaillances critiques.{" "}
          <strong>
            PC<span className="text-green">NUMERIK</span>
          </strong>{" "}
          conseille de{" "}
          <strong>
            faire suivre son ordinateur (maintenance informatique) par un
            professionnel du dépannage informatique au moins une fois par an
          </strong>
          .
          <br />
          <br />
          La maintenance informatique permet d’
          <strong>
            accroitre et d’optimiser les performances de votre ordinateur
          </strong>{" "}
          personnel ou, à plus grande échelle, de votre parc informatique
          (serveur, ordinateur de bureau ou ordinateur portable) ainsi que la
          stabilité du matériel et la sécurité sur le réseau internet. Nos
          techniciens en réparations informatiques procèdent systématiquement à la
          mise en œuvre de plusieurs points de contrôles :
        </p>{" "}
        <br />
        <br />
        <ul className="ml-8">
          <li>
            une <strong>désinfection virale</strong> pour débarrasser votre
            ordinateur des applications nocives,
          </li>
          <li>
            les{" "}
            <strong>
              mises à jour du système d’exploitation, du matériel et des
              logiciels
            </strong>{" "}
            pour prévenir toutes failles de sécurité,
          </li>
          <li>
            le <strong>nettoyage du système de votre ordinateur</strong> pour en
            optimiser le fonctionnement et les performances,
          </li>
          <li>
            la <strong>vérification de la température</strong> de votre
            ordinateur pour éviter une surchauffe anormale pouvant endommager
            vos composants.
          </li>
        </ul>
        <FaqList />
        <h3>
          L’obsolescence programmée : Ayez le bon réflexe et faites réparer
          votre ordinateur !
        </h3>
        <p>
          Chez{" "}
          <strong>
            PC<span className="text-green">NUMERIK</span>
          </strong>
          , spécialiste de l'informatique à Montpellier, nous avons la fibre{" "}
          <strong>écologique</strong> et nous faisons reculer la date d’
          <strong>obsolescence programmée</strong> de vos équipements
          informatiques. En effet, ce phénomène, mis en place par les
          constructeurs high-tech, consiste à réduire la durée de vie d'un
          appareil pour favoriser son remplacement total. En faisant appel à une
          entreprise de dépannage informatique, en plus de{" "}
          <strong>préserver la planète</strong> d’une pollution supplémentaire,
          vous faites donc de <strong>grosses économies</strong>. <br /> Nos
          solutions de dépannage informatique sont donc le meilleur rempart à ce
          phénomène puisque notre métier consiste à{" "}
          <strong>réparer vos composants et matériels informatiques</strong>.
          Ceci permet de prolonger considérablement le bon fonctionnement de vos
          outils informatiques en vous assurant une{" "}
          <strong>expérience optimale et durable</strong>.
        </p>
        <br />
        {/* <GoogleReviews /> */}
        {/* <h3 className="flex items-center lg:text-2xl text-center w-full lg:px-[15%] bg">
          Les étapes du dépannage informatique chez <strong>PC<span className="text-green">NUMERIK</span></strong>
        </h3>
        <Image
          src="/images/processpcnumerik.png"
          alt="logo"
          width={750}
          height={2295}
          className="self-center"
        /> */}
      </section>
    </>
  );
}
