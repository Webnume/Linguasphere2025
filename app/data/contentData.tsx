import Link from "next/link";
import Image from "next/image";

export const contentData = [
  {
    categoryID: 0,
    name: "Dépannage informatique à domicile Paris - Assistance et Maintenance",
    description: "Accueil du site",
    keywords: ["accueil"],
    linkHref: "/",
    linkNameMainMenu: "accueil",
  },
  {
    categoryID: 1,
    name: "Dépannage informatique",
    image: {
      src: "/images/_235f06e3-59c6-410e-8f46-2efe51bd64fd.jpg",
      alt: "Dépannage informatique",
    },
    description:
      "Réparation d'ordinateur et restauration. Désinfection de virus informatiques. PC lent, écran bleu, écran noir, ordinateur infecté, ordinateur qui rame, ordinateur qui plante, ordinateur qui ne démarre pas ou plus, ordinateur qui ne s'allume pas ou plus, ordinateur qui s'éteint tout seul, ordinateur lent, etc.",
    linkHref: "/depannage-informatique-montpellier",
    linkNameMainMenu: "dépannage",
    keywords: [
      "ordinateur infecté",
      "ordinateur qui rame",
      "ordinateur qui plante",
      "ordinateur qui ne démarre pas ou plus",
      "ordinateur qui ne s'allume pas ou plus",
      "écran noir",
      "écran bleu",
      "ordinateur qui s'éteint tout seul",
      "lenteur",
      "ordinateur lent",
    ],
    content: [
      {
        name: "Diagnostic informatique",
        price: 59,
        priceMessage: "* À partir de / Ce tarif est déduit en cas de réparation",
        image: {
          src: "/images/_8249716c-45b6-4ad3-b2b7-0486a2791088.jpg",
          alt: "virus",
        },
        linkHref:
          "/depannage-informatique-montpellier/diagnostic-informatique-ordinateur-pc",
        predescription: (
          <strong>
            Ordinateur lent ou qui ne démarre plus normalement, fenêtres
            intempestives, navigateurs internet perturbés, publicités
            envahissantes, virus, ordinateur instable ...
          </strong>
        ),
        description: (
          <p>
            Le diagnostic en informatique consiste à identifier, analyser et
            résoudre les problèmes ou les dysfonctionnements qui peuvent
            survenir dans un système informatique, qu'il s'agisse d'un logiciel,
            d'un matériel ou d'un réseau. Le diagnostic est une étape cruciale
            pour maintenir la performance et la fiabilité des systèmes
            informatiques.
            <br />
            Pas de panique, nous exécutons les réparations nécessaires pour
            remettre votre ordinateur sur pied. Nous pouvons également effectuer
            toutes les mises à jour récentes de votre matériel et de votre
            système d'exploitation pour garantir la stabilité et la sécurité de
            votre ordinateur.
          </p>
        ),
        details: (
          <>
            <ul>
              <li className="mb-2">
                <b>Identification des problèmes : </b>
                Les systèmes informatiques peuvent rencontrer divers problèmes,
                tels que des erreurs logicielles, des pannes matérielles, des
                conflits de configuration, etc. Le diagnostic permet
                d'identifier ces problèmes.
              </li>
              <li className="mb-2">
                <b>Analyse des causes : </b> Une fois le problème identifié, il
                est nécessaire d'analyser les causes possibles. Par exemple, si
                un logiciel ne fonctionne pas correctement, il peut y avoir un
                bug dans le code, une incompatibilité avec le système
                d'exploitation, etc.
              </li>
              <li className="mb-2">
                <b>Résolution du problème : </b> Une fois les causes
                identifiées, il est possible de résoudre le problème. Cela peut
                impliquer l'installation d'une mise à jour logicielle, le
                remplacement d'un composant matériel, la modification d'une
                configuration, etc.
              </li>
              <li className="mb-2">
                <b>Optimisation des performances : </b> En diagnostiquant les
                performances du système, on peut identifier les goulots
                d'étranglement, les inefficacités ou les ressources
                sous-utilisées et les corriger pour optimiser les performances.
              </li>
              <li className="mb-2">
                <b>Tests et vérifications : </b> Après avoir résolu le problème,
                il est important de tester le système pour s'assurer que le
                problème a été résolu et que le système fonctionne correctement.
              </li>
            </ul>
            <p>
              En résumé, le diagnostic en informatique est essentiel pour
              assurer le bon fonctionnement des systèmes, détecter les problèmes
              et les résoudre de manière efficace afin d'optimiser les
              performances et d'assurer la stabilité des systèmes informatiques.
              En détectant les signes avant-coureurs de problèmes potentiels, on
              peut prendre des mesures préventives pour éviter des pannes
              majeures.
            </p>
          </>
        ),
      },
      {
        name: "Suppression des virus",
        price: 89,
        priceMessage: "* À partir de",
        image: {
          src: "/images/_585e1857-2535-4db6-911c-5d6985b20b29.jpg",
          alt: "virus",
        },
        linkHref:
          "/depannage-informatique-montpellier/desinfection-virus-ordinateur-pc",
        predescription: (
          <strong>
            Virus, fenêtres intempestives, navigateurs internet perturbés,
            publicités envahissantes ...
          </strong>
        ),
        description: (
          <p>
            La désinfection virale d'un ordinateur est une étape cruciale pour
            assurer la sécurité et la performance de votre système. Les virus
            informatiques, les logiciels malveillants et autres menaces en ligne
            peuvent compromettre la confidentialité de vos données, perturber le
            fonctionnement de votre ordinateur et causer des dommages
            importants.
          </p>
        ),
        details: (
          <>
            <p>
              Pas de panique, nous exécutons les réparations nécessaires pour
              remettre votre ordinateur sur pied. Nous pouvons également
              effectuer toutes les mises à jour récentes de votre matériel et de
              votre système d'exploitation pour garantir la stabilité et la
              sécurité de votre ordinateur.
            </p>
            <p>
              Votre <strong>ordinateur est devenu très lent</strong> et toute
              activité devient fastidieuse, voire impossible ? Il est fortement
              probable que vous ayez été infecté par des{" "}
              <strong>logiciels malveillants</strong> sans que votre antivirus,
              aussi performant soit-il, soit capable de les détecter ou de les
              supprimer... <br />
              <br />
              Si cela est votre cas, la{" "}
              <strong>
                sécurité de votre ordinateur infecté est corrompue
              </strong>{" "}
              et il est vivement conseillé d'en éviter toute utilisation
              puisqu'il renferme vos données sensibles que des pirates
              pourraient subtiliser à votre insu (paiement en ligne, connexion à
              la messagerie et autres comptes nécessitant l’utilisation
              d’identifiants). <br />
              <br />
              Nous vous conseillons également{" "}
              <strong>
                de ne jamais payer de rançon ou de logiciels de nettoyage sur
                internet,
              </strong>{" "}
              car vous ne feriez qu’aggraver votre cas tout en encourageant ce
              type d’escroquerie. <br />
              <br /> Afin de vous débarrasser de ces attaques efficacement, nous
              procédons en 2 étapes :
            </p>
            <ul>
              <li className="mt-2">
                1 - <strong>Désinfection virale</strong>
                <br />
                <strong>Virus informatiques</strong>, fenêtres intempestives
                envahissantes,
                <strong>navigateurs</strong> internet <strong>perturbés</strong>
                , <strong>publicités envahissantes</strong> ... Pas de panique,
                nous exécutons les réparations nécessaires pour remettre votre
                ordinateur sur pied.
              </li>
              <li className="mt-2">
                2 – <strong>Optimisation logicielle</strong> <br /> Nous
                effectuons toutes les mises à jour récentes de votre matériel
                informatique et de votre système d'exploitation pour garantir
                une stabilité et une sécurité optimales de votre ordinateur.
              </li>
            </ul>
          </>
        ),
      },
      {
        name: "Formatage et réinstallation du système d'exploitation",
        price: 119,
        priceMessage: "* À partir de",
        image: {
          src: "/images/_d303f919-28b5-4efa-ab4f-72789fc44439.jpg",
          alt: "virus",
        },
        linkHref:
          "/depannage-informatique-montpellier/formatage-reinstallation-systeme-exploitation",
        predescription: (
          <strong>
            Amélioration des performances, résolution de problèmes de Windows,
            éradication des virus et Malwares persistants ...
          </strong>
        ),
        description: (
          <p>
            Le formatage d'un ordinateur est un processus consistant à effacer
            toutes les données présentes sur le disque dur ou tout autre support
            de stockage, et à réinstaller le système d'exploitation. Cette
            opération est souvent nécessaire dans différentes situations, et
            elle offre plusieurs avantages.
          </p>
        ),
        details: (
          <>
            <p>
              Nous procédons au <strong>formatage complet</strong> de votre
              ordinateur. Cette opération radicale permet de retrouver votre
              ordinateur à son{" "}
              <strong>potentiel de départ (lors de son achat)</strong>. Nous
              effectuons également toutes les mises à jour récentes de votre
              matériel et de votre système d'exploitation Windows pour garantir
              la stabilité et la sécurité de votre ordinateur.
            </p>
            <p className="mt-2">
              Voici quelques raisons courantes pour lesquelles on pourrait
              choisir de formater un ordinateur :
            </p>
            <ul>
              <li className="mt-2">
                1.{" "}
                <strong>
                  Résolution des problèmes du système d'exploitation
                </strong>{" "}
                : Lorsqu'un ordinateur rencontre des problèmes graves, tels que
                des erreurs système récurrentes, des pannes matérielles ou des
                infections graves par des virus ou des logiciels malveillants,
                le formatage peut être la solution la plus efficace. Il permet
                de repartir sur une base propre en éliminant les problèmes
                existants.
              </li>
              <li className="mt-2">
                2. <strong>Amélioration des performances</strong> : Au fil du
                temps, les ordinateurs peuvent devenir plus lents en raison de
                l'accumulation de fichiers temporaires, de programmes inutiles
                ou de registres encombrés. En formatant et en réinstallant le
                système d'exploitation, vous pouvez restaurer les performances
                d'origine de l'ordinateur.
              </li>
              <li className="mt-2">
                3. <strong>Vente ou don de l'ordinateur</strong> : Avant de
                vendre ou de donner un ordinateur, il est recommandé de le
                formater pour supprimer toutes les données personnelles et les
                programmes installés. Cela garantit la confidentialité et la
                sécurité des informations.
              </li>
              <li className="mt-2">
                4. <strong>Éradication de malwares persistants</strong> : En cas
                d'infection grave par des logiciels malveillants, comme les
                ransomwares ou les rootkits, le formatage est souvent la seule
                solution efficace pour éliminer complètement ces menaces.
              </li>
            </ul>

            <p className="mt-10">
              Il est important de noter que{" "}
              <strong>
                le formatage d'un ordinateur entraîne la perte totale des
                données stockées sur le disque dur
              </strong>
              . Il est donc crucial de{" "}
              <strong>sauvegarder toutes les informations importantes</strong>{" "}
              avant de procéder à cette opération.
            </p>
          </>
        ),
      },
      {
        name: "Sauvegarde et récupération de données",
        price: -1,
        priceMessage: "",
        image: {
          src: "/images/_1e8cdc21-28e9-4e2c-8cbd-b2a58d42ac25.jpg",
          alt: "virus",
        },
        linkHref:
          "/depannage-informatique-montpellier/sauvegarde-recuperation-donnees",
        predescription: (
          <strong>
            Photos, fenêtres intempestives, navigateurs internet perturbés,
            publicités envahissantes ...
          </strong>
        ),
        description: (
          <>
            <p className="my-2">
              Si vos données précieuses sont piégées dans votre ordinateur ou
              que votre support numérique :
            </p>

            <ul>
              <li>ne réponds plus.</li>
              <li>est inexploitable.</li>
              <li>est indétectable par votre ordinateur.</li>
              <li>renvoie des messages d'erreurs.</li>
              <li>fait un bruit inhabituel.</li>
            </ul>
          </>
        ),
        details: (
          <>
            <p>
              <strong>
                PC<span className="text-green">NUMERIK</span>
              </strong>{" "}
              récupère et sauvegarde vos données présentes sur les supports
              suivants :
            </p>
            <ul className="my-1">
              <li>Disques durs internes et externes</li>
              <li>Disques SSD</li>
              <li>Clés USB</li>
              <li>Cartes mémoire</li>
              <li>DVD-ROM</li>
              <li>CD-ROM</li>
            </ul>
            Grâce à notre réactivité, retrouvez vos données informatiques dans
            les plus brefs délais. Nous mettons à votre service notre expérience
            en réparation informatique pour récupérer toutes vos données
            personnelles ou professionnelles : photos, vidéos, textes et autres
            fichiers précieux vous sont restaurés.{" "}
            <strong>
              PC<span className="text-green">NUMERIK</span>
            </strong>{" "}
            dépanne toutes vos installations Windows et MAC OS X, quel que soit
            le type de système d'exploitation.
          </>
        ),
      },
      {
        name: "Réparation d'écran de PC portable",
        price: -1,
        priceMessage: "",
        image: {
          src: "/images/_88eabc51-b6e6-4c37-b1f7-164d332c2aee.jpg",
          alt: "écran pc portable cassé",
        },
        linkHref:
          "/depannage-informatique-montpellier/reparation-ecran-casse-pc-ordinateur-portable",
        predescription: (
          <strong>
            Écran cassé, écran noir, écran blanc, écran bleu, écran qui clignote
            ...
          </strong>
        ),
        description: (
          <>
            <p className="my-2">
              Votre écran de PC portable est cassé, fissuré, ou ne fonctionne
              plus correctement ? Nous réparons ou remplaçons votre écran de PC
              portable. <br />
              <br />
              Votre <b>écran d'ordinateur portable</b> a subi des{" "}
              <b>dommages irréversibles</b> (dalle ayant l'aspect de vitre
              brisée) et <b>nécessite d'être changé</b>, nous effectuons cette
              opération pour que vous puissiez utiliser tout son potentiel de
              nouveau.
            </p>
          </>
        ),
        details: (
          <>
            <p>
              Malheureusement, ce ne sont pas les manières de casser son écran
              de pc portable qui manquent, et cela peut vite devenir{" "}
              <b>très gênant à l'utilisation, voire impossible</b>. <br />
              Si l'écran de votre ordinateur portable a subi des dommages alors
              ils sont <b>irréversibles</b>. L’écran de votre pc portable
              nécessite d'être <b>changé complètement</b>. <br />
              Un <b>écran cassé</b>, prend le plus souvent, l'aspect de vitre
              brisée indétectable au toucher, avec l’apparition de{" "}
              <b>taches noires</b> et/ ou de couleurs différentes, à formes très
              variées. <br />
              Ces taches sur l’écran vous <b>empêchent de visualiser</b> les
              actions que vous menez sur l’ordinateur. Il peut arriver que les
              taches, peu importantes au départ, <b>finissent par s’étendre</b>{" "}
              pour recouvrir encore plus de surface restée visible sur votre
              écran. <br />
              Dans tous les cas, c’est un phénomène qui ira donc en{" "}
              <b>empirant avec le temps</b> s’il n’est pas traité. La bonne
              nouvelle, c’est qu’il{" "}
              <b>est possible de réparer un écran d’ordinateur portable</b>{" "}
              fissuré ou brisé.
            </p>
            <br />
            <p>
              <strong>
                PC<span className="text-green">NUMERIK</span>
              </strong>{" "}
              procède, dans l'art des <b>règles de sécurité</b>, au{" "}
              <b>remplacement de l'écran de votre PC portable</b> pour que vous
              puissiez utiliser, de nouveau, tout son potentiel de départ.{" "}
              <br />
              Notre entreprise informatique répare les écrans de{" "}
              <b>tous les fabricants</b> d'ordinateurs portables, dont les plus
              connus : Acer/ Gateway, Apple, Asus, Dell, Fujitsu, HP/ Compaq,
              Lenovo, MSI, Panasonic, Samsung, Razer, Sony, Toshiba etc. <br />
              <br />
              Nous avons des délais d'<b>intervention rapide</b> qui vous
              permettront de récupérer votre pc portable en un temps record.{" "}
              <br />
              <br />
              Merci de{" "}
              <Link href="/contact-informatique-montpellier" rel="noreferrer">
                <u>prendre contact</u>
              </Link>{" "}
              avec nous pour obtenir un devis. Il sera établi en fonction du
              modèle de votre ordinateur portable.
            </p>
            <br />
            <p className="flex flex-col items-center py-4">
              <strong>Exemple d'affichage d'écran cassé</strong>
              <Image
                src="/images/reparation-ecran-casse-pc-ordinateur-portable-montpellier.jpg"
                alt="écran cassé"
                width={800}
                height={600}
                className="pt-2"
              />
            </p>
          </>
        ),
      },
      {
        name: "Réparation de clavier de PC portable",
        price: -1,
        priceMessage: "",
        image: {
          src: "/images/_c53f519d-e3ef-40c0-b57b-aeb35a90cd9c.jpg",
          alt: "clavier pc portable défectueux",
        },
        linkHref:
          "/depannage-informatique-montpellier/reparation-clavier-defectueux-pc-ordinateur-portable",
        predescription: (
          <strong>
            Clavier défectueux, touche de clavier qui ne répond plus, clavier
            qui a reçu un liquide, clavier récalcitrant ...
          </strong>
        ),
        description: (
          <>
            <p className="my-2">
              Lorsqu'un liquide est renversé sur un clavier de PC portable, les
              conséquences peuvent être graves, car l'électronique interne est
              vulnérable aux dommages causés par les liquides. <br />
              <br />
              Votre <b>clavier d'ordinateur portable</b> a subi des{" "}
              <b>dommages irréversibles</b> (touches qui ne répondent plus) et{" "}
              <b> doit être remplacé</b>. Nous procédons à son changement dans
              les plus brefs délais.
            </p>
          </>
        ),
        details: (
          <>
            <p>
              Malheureusement, verser accidentellement un liquide sur son
              clavier de pc portable est fréquent, et cela peut vite devenir{" "}
              <b>
                très gênant et rendre votre clavier inconfortable, voire
                inutilisable
              </b>
              . <br />
              Si le clavier de votre ordinateur portable a reçu un liquide alors
              les dégâts sont <b>irréversibles</b>. Le clavier de votre pc
              portable nécessite d'être <b>changé complètement</b>. <br />
              <br />
              Voici les principales conséquences possibles d'un liquide infiltré dans un clavier : <br />
              <ul>
                <li>
                  Corrosion des composants internes : <br /> Si le liquide
                  pénètre à l'intérieur, il peut provoquer la corrosion des
                  circuits imprimés, des connecteurs et autres composants,
                  compromettant ainsi leur fonctionnement.
                </li>
                <li>
                  Court-circuit : <br /> Le liquide peut créer un court-circuit
                  entre les différents composants, endommageant des parties
                  vitales comme la carte mère, le disque dur ou la RAM.
                </li>
                <li>
                  Clavier non fonctionnel : <br /> Certaines touches peuvent
                  devenir collantes ou non fonctionnelles après exposition à un
                  liquide, surtout si le liquide est sucré ou collant (boissons
                  comme les sodas ou le café).
                </li>
                <li>Panne partielle ou totale : <br /> Si le liquide atteint la carte mère
              ou d'autres composants critiques, cela peut entraîner une panne
              partielle ou totale du PC.</li>
                <li>Problèmes à long terme : <br /> Même si
              l'ordinateur semble fonctionner normalement après un incident,
              l'humidité résiduelle peut entraîner des problèmes à long terme,
              comme une détérioration progressive des composants ou une panne
              soudaine.</li>
              </ul>
            </p>
            <br />
            <p> Il est donc <b>urgent de réagir pour éviter des dommages irréversibles</b>. <br /> 
            Ce qu'il faut faire sans attendre : <br />
            <ul>
              <li>Éteindre l'ordinateur immédiatement pour éviter tout court-circuit.</li>
              <li>Débrancher l'alimentation et, si possible, retirer la batterie.</li>
              <li>Retourner l'ordinateur pour que le liquide s'écoule hors du clavier.</li>
              <li>Sécher l'appareil (avec un chiffon absorbant ou de l'air comprimé) et le laisser sécher pendant au moins 24 à 48 heures.</li>
            </ul><br />

Si malgré tous vos efforts, votre clavier présente toujours des dysfonctionnements, vous pouvez faire appel à <strong>PC<span className="text-green">NUMERIK</span></strong><div className={" "}></div>
<br />
              Nous procéderons, dans l'art des <b>règles de sécurité</b>, au{" "}
              <b>remplacement du clavier de votre PC portable</b> pour que vous
              puissiez utiliser, de nouveau, entièrement son potentiel.{" "}
              <br />
              Notre entreprise informatique répare les claviers de{" "}
              <b>tous les fabricants</b> d'ordinateurs portables, dont les plus
              connus : Acer/ Gateway, Apple, Asus, Dell, Fujitsu, HP/ Compaq,
              Lenovo, MSI, Panasonic, Samsung, Razer, Sony, Toshiba, etc. <br />
              <br />
              Nous avons des délais d'<b>intervention rapide</b> qui vous
              permettront de récupérer votre pc portable en un temps record.{" "}
              <br />
              <br />
              Merci de{" "}
              <Link href="/contact-informatique-montpellier" rel="noreferrer">
                <u>prendre contact</u>
              </Link>{" "}
              avec nous pour obtenir un devis. Il sera établi en fonction du
              modèle de votre ordinateur portable.
            </p>
          </>
        ),
      },
    ],
  },
  {
    categoryID: 2,
    name: "Maintenance informatique",
    image: {
      src: "/images/_7b0e784e-9b15-4d30-bf14-9b8724428bae.jpg",
      alt: "Maintenance informatique",
    },
    description:
      "Optimisation des performances de votre ordinateur. Mise à jour de sécurité, Mise à jour matériel et système. Optimisation de votre ordinateur, amélioration des performances, suppression des lenteurs, Test de régulation thermique et refroidissement de PC en surchauffe,  etc.",
    linkHref: "/maintenance-informatique-montpellier",
    linkNameMainMenu: "maintenance",
    keywords: [
      "optimisation de l'ordinateur",
      "optimsation des performances",
      "ajout de mémoire",
      "ajout de RAM",
      "ajout de disque dur",
      "changer de disque dur",
      "ajout de SSD",
      "ajout de carte graphique",
      "ajout de carte son",
      "ajout de carte réseau",
      "ajout de carte wifi",
      "ajout de carte bluetooth",
      "nettoyage de l'ordinateur",
      "nettoyage du disque dur",
      "nettoyage du système",
      "maintenance informatique",
      "gestion de parc informatique",
      "maintenance de parc informatique",
    ],
    content: [
      {
        name: "Maintenance préventive de votre ordinateur",
        price: 89,
        priceMessage: "* À partir de",
        image: {
          src: "/images/_cc6b712f-3bb2-4b2e-88f0-06028301d35d.jpg",
          alt: "virus",
        },
        linkHref:
          "/maintenance-informatique-montpellier/maintenance-informatique-ordinateur-pc",
        predescription: (
          <strong>
            Optimisation de votre ordinateur, Augmentation des performances de
            votre ordinateur ...
          </strong>
        ),
        description: (
          <ul>
            <li>
              Votre ordinateur refuse ou met plus{" "}
              <strong>longtemps à s'allumer</strong> ou{" "}
              <strong>à s'éteindre</strong>.
            </li>
            <li>
              Des <strong>ralentissements de votre ordinateur</strong> par
              rapport à ses débuts.
            </li>
            <li>
              Une <strong>durée d'affichage longue</strong> lorsque vous
              basculez entre les fenêtres ou programmes sur votre ordinateur.
            </li>
            <li>
              Des <strong>virus</strong> ou{" "}
              <strong>autres logiciels malveillants</strong>.
            </li>
            <li>
              Des <strong>publicités</strong> et{" "}
              <strong>pop-ups intempestifs</strong> (fenêtres surgissantes).
            </li>
          </ul>
        ),
        details: (
          <p>
            <strong>
              PC<span className="text-green">NUMERIK</span>
            </strong>{" "}
            optimise et dépanne tous les types de système d'exploitation,{" "}
            <strong>nettoie votre ordinateur</strong> et le désinfecte de virus,
            publicités intempestives, et autres processus et applications
            malveillants. <br />
            <strong>
              Nous mettons à jour votre matériel informatique ainsi que votre
              système d'exploitation
            </strong>{" "}
            afin d'optimiser la <strong>stabilité</strong> et{" "}
            <strong>réduire considérablement les failles de sécurité</strong> de
            votre ordinateur. <br />
            Pour votre sécurité,{" "}
            <strong>
              PC<span className="text-green">NUMERIK</span>
            </strong>{" "}
            installe gracieusement sur votre ordinateur un{" "}
            <strong>antivirus performant</strong> et <strong>gratuit</strong>.
          </p>
        ),
      },
      {
        name: "Surchauffe de votre ordinateur",
        price: 89,
        priceMessage: "* À partir de",
        image: {
          src: "/images/nettoyage-refroidissement-pc-surchauffe-montpellier.jpg",
          alt: "virus",
        },
        linkHref:
          "/maintenance-informatique-montpellier/surchauffe-depoussierage-nettoyage-pc-ordinateur",
        predescription: (
          <strong>
            Refroidissement d'ordinateur qui chauffe trop, Nettoyage du système
            de refroidissement, ordinateur en surchauffe, ordinateur qui fait
            beaucoup de bruit. Un bruit inhabituel et intense, ordinateur qui
            s'éteint tout seul ...
          </strong>
        ),
        description: (
          <>
            <ul>
              <li>
                Votre ordinateur de bureau ou votre pc portable{" "}
                <strong>chauffe beaucoup trop</strong> ?
              </li>
              <li>
                Votre ordinateur fait{" "}
                <strong>
                  un bruit de ventilation devenu de plus en plus insupportable
                </strong>{" "}
                ?
              </li>
              <li>
                Votre ordinateur{" "}
                <strong>s'éteint seul arbitrairement et aléatoirement</strong> ?
              </li>
              <li>
                Votre ordinateur{" "}
                <strong>
                  se bloque tout seul et ne rédémarre pas tout de suite
                </strong>{" "}
                ?
              </li>
            </ul>
            <br />
            <strong>
              Les signaux envoyés par votre ordinateur sont des alertes pour
              signaler qu'il nécessite un nettoyage rapidement
            </strong>{" "}
            afin de ne pas abîmer ses composants internes qui restent fragiles.
            Nous réalisons un{" "}
            <strong>nettoyage interne et complet de votre ordinateur</strong>.
            Grâce à notre savoir-faire et à notre expertise en réparation
            informatique, ayez l'assurance de retrouver votre ordinateur à
            température optimale dans les plus brefs délais. <br />
          </>
        ),
        details: (
          <p>
            Votre <strong>ordinateur a besoin</strong> d'un{" "}
            <strong>
              nettoyage complet en profondeur (nettoyage et dépoussiérage)
            </strong>{" "}
            afin de ne pas{" "}
            <strong>
              endommager irréversiblement ses composants électroniques
            </strong>{" "}
            avec des chaleurs excessives qui provoquent l’arrêt brutal de votre
            PC. <br />
            <br />
            Grâce à notre réactivité et à notre expérience en réparation
            informatique, vous êtes sûr de{" "}
            <strong>
              retrouver votre ordinateur avec une température normale{" "}
            </strong>
            dans les plus brefs délais. Notez que{" "}
            <strong>
              les supports ventilés pour pc portable vendus dans le commerce ne
              sont d’aucune utilité
            </strong>
            . <br /> <br />
            En effet, notre service informatique{" "}
            <strong>
              traite directement la source et la cause de la surchauffe
            </strong>{" "}
            de votre ordinateur empêchant ainsi toute dégradation critique de
            votre précieux matériel. Il est conseillé de{" "}
            <strong>nettoyer le système de refroidissement</strong> de votre
            ordinateur portable ou de bureau <strong>une fois par an</strong> ou{" "}
            <strong>tous les 2 ans</strong> pour éviter ce type de panne.
          </p>
        ),
      },
    ],
  },
  {
    categoryID: 3,
    name: "Assistance informatique",
    image: {
      src: "/images/_81015820-79a3-4c12-83b0-808ab4dd3321.jpg",
      alt: "Assistance informatique",
    },
    description:
      "Installation de matériels et périphériques informatiques (mémoire RAM, disque SSD, carte graphique, etc.). Installation de logiciels. Installation et configuration de périphérique (Imprimante, Box internet, etc.). Installation de réseau (Wifi, Ethernet, CPL, etc.).",
    keywords: [
      "installation de logiciel",
      "installation de périphérique",
      "installation de box internet",
      "installation de box",
      "installation de modem",
      "installation de routeur",
      "installation de wifi",
      "installation de réseau",
      "installation de réseau sans fil",
      "installation de réseau ethernet",
      "installation de réseau CPL",
      "installation de réseau courant porteur",
      "installation d'imprimante",
      "installation de scanner",
      "installation de webcam",
    ],
    linkHref: "/assistance-informatique-montpellier",
    linkNameMainMenu: "assistance",
    content: [
      {
        name: "Installation d'imprimante à domicile",
        price: 89,
        priceMessage: "* À partir de",
        image: {
          src: "/images/installation-imprimante-Montpellier.jpg",
          alt: "virus",
        },
        linkHref:
          "/assistance-informatique-montpellier/installation-imprimante-a-domicile-montpellier",
        predescription: (
          <strong>
            Besoin de connecter votre imprimante avec ou sans Wifi (sans fil) ?
          </strong>
        ),
        description: (
          <p>
            Nous installons tous les types d'imprimantes, avec ou sans wifi, de
            marque{" "}
            <strong>HP, Epson, Samsung, Canon, Lexmark, Brother, Ricoh</strong>{" "}
            etc. <br />
            Au besoin, nous connectons vos{" "}
            <strong>imprimantes en réseau</strong>, et nous pouvons réaliser ces
            opérations{" "}
            <strong>sans le CD d'installation de votre imprimante</strong> en
            votre possession.
          </p>
        ),
        details: (
          <>
            <br />
            <br />
            <strong>
              PC<span className="text-green">NUMERIK</span>
            </strong>{" "}
            procède à : <br />
            <br />
            <ul>
              <li>
                {" "}
                la <strong>préparation</strong> de votre ordinateur pour éviter
                les conflits à l'installation
              </li>
              <li>
                l'<strong>installation</strong> de votre nouvelle imprimante
                (impression, scan, photocopie ...)
              </li>
              <li>
                {" "}
                la <strong>configuration</strong> logiciel de votre imprimante
              </li>
              <li>
                {" "}
                la <strong>mise à jour</strong> de votre{" "}
                <strong>matériel d'impression</strong>
              </li>
              <li>
                aux divers <strong>tests du matériel</strong> pour s'assurer de
                son bon fonctionnement.
              </li>
            </ul>
            <br />
            Grâce à notre expérience informatique,{" "}
            <strong>retrouvez votre imprimante en état de marche</strong> pour
            imprimer et scanner à partir de votre ordinateur.
          </>
        ),
      },
      {
        name: "Installation de box internet, dépannage et configuration réseau",
        price: 89,
        priceMessage: "* À partir de",
        image: {
          src: "/images/_d5dbec0e-e812-498d-a944-d8a175640d16.jpg",
          alt: "virus",
        },
        linkHref:
          "/assistance-informatique-montpellier/installation-box-internet-configuration-reseau",
        predescription: (
          <strong>
            Installation, dépannage et configuration de réseau internet
          </strong>
        ),
        description: (
          <>
            Vous tentez de surfer sur un site, mais :
            <ul>
              <li>
                votre connexion{" "}
                <strong>
                  Ethernet ou wifi présente des dysfonctionnements
                </strong>
              </li>
              <li>
                vous obtenez des <strong>affichages d'erreurs</strong> lorsque
                vous voulez utiliser votre{" "}
                <strong>navigateur internet préféré</strong> (google chrome,
                internet explorer, mozilla firefox ...)
              </li>
              <li>
                vous êtes dans l'<strong>incapacité de télécharger</strong> des
                fichiers à partir du réseau internet
              </li>
              <li>
                votre <strong>réseau local ne vous reconnait plus</strong>.
              </li>
              <li>
                l'un des appareils du réseau{" "}
                <strong>
                  refuse de se connecter au réseau local ou a une connexion
                  instable (déconnexion et reconnexion)
                </strong>
                .
              </li>
            </ul>
          </>
        ),
        details: (
          <>
            Vous venez de recevoir votre box internet ou vous rencontrez des
            problèmes de réseau qui rendent impossible de surfer sur internet,
            par exemple :
            <ul>
              <li>
                votre connexion filaire ou wifi <strong></strong>ne fonctionne
                pas
              </li>
              <li>
                des bugs et erreurs s'affichent sur votre navigateur internet
                (internet explorer, mozilla firefox, google chrome ...)
              </li>
              <li>impossible de télécharger des fichiers sur internet</li>
              <li>impossible de vous connecter à votre réseau local.</li>
            </ul>{" "}
            <br />
            <strong>
              PC<span className="text-green">NUMERIK</span>
            </strong>{" "}
            installe votre <strong>BOX internet</strong> : Free Box, Neuf Box, B
            Box, Live Box, SFR Box ... Nous configurons votre{" "}
            <strong>réseau</strong> (WIFI, Ethernet, CPL ...) ainsi que le{" "}
            <strong>partage de fichiers</strong>, d'<strong>imprimantes</strong>{" "}
            ou tout <strong>autre périphérique</strong> entre vos ordinateurs.
            Grâce à notre réactivité et à notre expérience informatique, vous
            êtes sûr de surfer avec votre <strong>BOX internet</strong> dans les
            plus brefs délais.
          </>
        ),
      },
      {
        name: "Installation de matériel informatique",
        price: -1,
        priceMessage: "",
        image: {
          src: "/images/_1cf97303-a939-4030-b73d-7f63485b12b8.jpg",
          alt: "virus",
        },
        linkHref:
          "/assistance-informatique-montpellier/installation-materiel-peripherique-informatique",
        predescription: (
          <strong>
            Optimisation de votre ordinateur, Ajout ou changement de composants
            sur un PC déjà monté et fonctionnel ...
          </strong>
        ),
        description: (
          <>
            <p>
              En vue d'optimiser les{" "}
              <strong>performances de votre ordinateur</strong>, nous pouvons
              procéder à l'
              <strong>
                installation de tous types de matériels et périphériques
                informatiques
              </strong>
              .
            </p>{" "}
            <br />
            L'installation de matériel plus performant sur un ordinateur peut
            apporter divers avantages en termes de vitesse, de capacité, de
            fonctionnalités et de qualité globale des performances. <br /> Il y
            a plusieurs raisons courantes pour lesquelles les utilisateurs
            choisissent d'améliorer le matériel de leur ordinateur. <br />
          </>
        ),
        details: (
          <>
            <ul>
              <li>
                <strong> Amélioration des Performances</strong> : L'ajout de
                composants plus performants, tels que des processeurs plus
                rapides, des cartes graphiques plus puissantes ou une mémoire
                RAM accrue, peut considérablement améliorer les performances
                générales de l'ordinateur. Cela se traduit par une exécution
                plus rapide des applications, des jeux plus fluides et une
                meilleure réactivité globale du système.
              </li>
              <li>
                <strong> Stockage plus rapide et capacité étendue</strong> :
                L'installation d'un disque SSD par rapport à un disque dur
                traditionnel peut accélérer significativement les temps de
                démarrage du système, le chargement des applications et le
                transfert de fichiers. De plus, augmenter la capacité de
                stockage permet de faire face aux besoins croissants en espace.
              </li>
              <li>
                <strong> Amélioration des capacités multitâches</strong> : Un
                matériel plus performant permet à l'ordinateur de gérer
                simultanément plusieurs tâches sans ralentissement. Cela est
                particulièrement utile pour ceux qui ont besoin d'exécuter
                plusieurs applications gourmandes en ressources en même temps.
              </li>
              <li>
                <strong> Gestion de tâches gourmandes en ressources</strong> :
                Si vous effectuez des tâches nécessitant beaucoup de ressources,
                comme la conception graphique, la modélisation 3D, l'édition
                vidéo ou le rendu de jeux vidéo, l'installation de matériel plus
                performant permet de gérer ces tâches de manière plus efficace
                et rapide.
              </li>
              <li>
                <strong>Prolongation de la durée de vie de l'ordinateur</strong>{" "}
                : En mettant à niveau certains composants, vous pouvez prolonger
                la durée de vie utile de votre ordinateur, évitant ainsi la
                nécessité d'acheter un nouvel appareil plus fréquemment.
              </li>
              <li>
                <strong> Expérience de jeu améliorée</strong> : Les joueurs
                recherchent souvent des performances graphiques élevées et une
                fluidité optimale. L'ajout d'une carte graphique de haute
                qualité peut améliorer considérablement l'expérience de jeu en
                permettant des graphismes plus détaillés et des taux de
                rafraîchissement plus élevés.
              </li>
              <li>
                <strong> Mise à niveau vers de nouvelles technologies</strong> :
                Les nouvelles générations de matériel apportent souvent des
                améliorations significatives en termes d'efficacité énergétique,
                de connectivité et de fonctionnalités. L'installation de
                matériel plus récent permet de rester à jour avec les dernières
                technologies.
              </li>
              <li>
                <strong> Compatibilité avec des logiciels exigeants</strong> :
                Certains logiciels, tels que les logiciels de conception
                assistée par ordinateur (CAO) ou les applications
                professionnelles, peuvent nécessiter un matériel spécifique pour
                fonctionner correctement. L'installation de matériel plus
                performant assure la compatibilité avec ces applications
                exigeantes.
              </li>
            </ul>
            <br />
            Il est essentiel de noter que la compatibilité entre le nouveau
            matériel et le reste du système doit être vérifiée avant toute mise
            à niveau. Par ailleurs, l'installation de matériel plus performant
            peut nécessiter des compétences techniques, et il est recommandé de
            prendre les précautions nécessaires pour éviter tout dommage
            potentiel.
          </>
        ),
      },
      {
        name: "Assemblage d'ordinateur PC fixe sur mesure",
        price: 159,
        priceMessage: "* Ce tarif ne comprend pas les composants",
        image: {
          src: "/images/_0b8b56c0-0bed-4e27-a7ed-bd045cc9ac0b.jpg",
          alt: "montage pc fixe",
        },
        linkHref:
          "/assistance-informatique-montpellier/assemblage-ordinateur-pc-fixe-sur-mesure",
        predescription: (
          <strong>
            Nous effectuons le montage complet de votre PC avec installation et
            mise en service à domicile.
          </strong>
        ),
        description: (
          <>
            En fonction de votre budget et de vos besoins, nous vous conseillons
            dans le choix de vos composants pour votre ordinateur sur mesure.{" "}
            <br />
            Faire monter son propre PC présente plusieurs avantages : <br />
            <ul>
              <li>
                <strong>Personnalisation</strong> : En construisant votre propre
                PC, vous avez le contrôle total sur les composants que vous
                choisissez. Cela vous permet de personnaliser la configuration
                en fonction de vos besoins spécifiques, que ce soit pour le jeu,
                le travail professionnel, la conception graphique ou d'autres
                tâches.
              </li>
              <li>
                <strong>Économies</strong> : Souvent, l'assemblage d'un PC
                soi-même peut être moins cher que l'achat d'un modèle
                pré-assemblé avec des spécifications similaires. Vous pouvez
                choisir des composants qui offrent le meilleur rapport
                qualité-prix pour votre budget.
              </li>
            </ul>
          </>
        ),
        details: (
          <>
            <ul>
              <li>
                <strong>Évolutivité</strong> : En assemblant votre propre PC,
                vous avez la possibilité de choisir des composants évolutifs.
                Vous pouvez facilement mettre à niveau des éléments spécifiques
                tels que la carte graphique, la mémoire RAM ou le stockage sans
                avoir à changer l'ensemble du système.
              </li>
              <li>
                <strong>Qualité des composants</strong> : En choisissant chaque
                composant individuellement, vous avez un contrôle total sur la
                qualité de chaque pièce. Cela vous permet d'opter pour des
                composants de meilleure qualité dans des domaines spécifiques en
                fonction de vos priorités.
              </li>
            </ul>
            <br />
            Il est important de noter que l'assemblage d'un PC nécessite des
            connaissances en informatique et une certaine précaution. <br />
            N'hésitez pas{" "}
            <Link href="/contact-informatique-montpellier">
              <u>à contacter</u>
            </Link>{" "}
            <strong>
              PC<span className="text-green">NUMERIK</span>
            </strong>{" "}
            pour vous conseiller dans votre achat de composants ou pour un
            devis. <br />
            <br />
            <video autoPlay loop muted className="w-full max-h-[300px]">
              <source src="/videos/Video-2024-02-24.mp4" type="video/mp4" />
            </video>
            <p className="w-full text-center">
              Une de nos plus belles configurations de PC sur mesure
            </p>
          </>
        ),
      },
    ],
  },
  {
    categoryID: 4,
    name: "Récupération de données",
    image: {
      src: "/images/_d1277747-0688-460b-9fd7-0bdb869b59bc.jpg",
      alt: "Récupération de données",
    },
    description:
      "Récupération de données suite à la panne de votre support de sauvegarde (ordinateur, serveur, disque dur, disque SSD, cartes mémoires flash, clé USB, téléphone, tablette, NAS...). Récupération de données perdues, disque dur endommagé, etc.",
    keywords: [
      "sauvegarde préventive",
      "sauvegarde de données",
      "sauvegarde de fichiers",
      "sauvegarde de documents",
    ],
    linkHref: "/recuperation-de-donnees-montpellier",
    linkNameMainMenu: "récupération de données",
    content: [
      {
        name: "Récupération de données",
        price: 89,
        priceMessage: "* À partir de",
        predescription: (
          <strong>
            Ordinateur instable et lent qui ne démarre plus normalement, disque
            dur qui ne réagit plus, accès aux données impossibles ...
          </strong>
        ),
        description: (
          <p>
            La récupération de données fait référence au processus de
            restauration de fichiers ou de données qui ont été{" "}
            <strong>perdus, supprimés, endommagés ou inaccessibles</strong>. Les
            raisons de la perte de données peuvent être diverses, notamment la{" "}
            <strong>
              suppression accidentelle, le formatage du disque dur, la
              corruption du système de fichiers, les pannes matérielles, les
              attaques de virus, ou même des erreurs humaines
            </strong>
            . La récupération de données vise à restaurer ces informations de
            manière à les rendre utilisables à nouveau.
          </p>
        ),
        details: (
          <>
            <p>
              Si vos données précieuses sont piégées dans votre ordinateur ou
              que votre support numérique:
            </p>
            <ul>
              <li>
                <strong>ne réponds plus</strong>.
              </li>
              <li>
                est <strong>inexploitable</strong>
              </li>
              <li>
                <strong>est indétectable</strong> par votre ordinateur.
              </li>
              <li>
                renvoie des <strong>messages d'erreurs</strong>.
              </li>
              <li>
                fait un <strong>bruit inhabituel</strong>.
              </li>
            </ul>
            <br />
            <strong>
              PC<span className="text-green">NUMERIK</span>
            </strong>{" "}
            récupère et sauvegarde vos données présentes sur les supports
            suivants : <br />
            <br />
            <ul className="flex sm:gap-10 flex-col sm:flex-row flex-wrap">
              <li>Disques durs internes et externes</li>
              <li>Disques SSD</li>
              <li>Clés USB</li>
              <li>Cartes mémoire</li>
              <li>DVD-ROM</li>
              <li>CD-ROM</li>
            </ul>
            <br />
            Grâce à notre réactivité, retrouvez vos <strong></strong>données
            informatiques dans les plus brefs délais. Nous mettons à votre
            service notre expérience en <strong></strong>réparation informatique
            pour récupérer toutes vos données personnelles ou professionnelles :{" "}
            <strong></strong>photos, vidéos, textes et autres fichiers précieux
            vous sont restaurés.
            <br />
            <br />
            Voici quelques concepts clés liés à la récupération de données :{" "}
            <h3>Types de Perte de Données</h3>
            <ul>
              <li>
                <strong>Suppression accidentelle</strong> : Lorsque des fichiers
                sont supprimés par erreur, ils peuvent être récupérés dans
                certains cas.
              </li>
              <li>
                <strong>Formatage du Disque dur</strong> : Le formatage efface
                toutes les données d'un support de stockage, mais la
                récupération est parfois possible.
              </li>
              <li>
                <strong>Panne matérielle</strong> : Si le disque dur ou tout
                autre composant matériel échoue, la récupération de données peut
                être complexe et nécessiter un laboratoire spécialisé.
              </li>
            </ul>
            <h3>Méthodes de Récupération de Données</h3>
            <ul>
              <li>
                <strong>Récupération de données par logiciels</strong> : Des
                outils logiciels spécialisés peuvent être utilisés pour
                récupérer des fichiers supprimés ou perdus à partir de supports
                de stockage. Si votre support numérique n'est pas trop
                endommagé, nous récupérons vos données personnelles et
                professionnelles. Nous effectuons cette manipulation directement
                en atelier. Les frais du support de retour sont non inclus si
                votre support endommagé ne peut être relancé
              </li>
              <li>
                <strong>Récupération de données en laboratoire</strong> : Dans
                certains cas, il peut être nécessaire de faire appel à des
                services professionnels de récupération de données, surtout en
                cas de pannes matérielles complexes. Ces entreprises
                spécialisées proposent des services de récupération de données
                en salle blanche. Si votre support numérique est trop endommagé,
                les tarifs de panne mécanique sont différenciés en fonction de
                la capacité et des impacts sur les plateaux (chocs, chutes,
                etc.). Des tests d’intégrité sont effectués sur les fichiers
                photos & multimédias. Ces manipulations doivent impérativement
                être effectuées en salle blanche. Il s'agit d'une salle
                aseptisée ISO 5 classe 100 qui permet d'avoir une concentration
                maximale de moins de 100 particules de 0,3µm par pied³ (environ
                28 litres). N'ouvrez jamais votre disque dur au risque de perdre
                vos données pour toujours.
              </li>
              <li>
                <strong>Sauvegardes</strong> : La meilleure façon de récupérer
                des données est souvent d'avoir des sauvegardes régulières. Cela
                implique de copier les données sur un support externe ou dans le
                cloud.
              </li>
            </ul>
            <h3>Prévention de la Perte de Données</h3>
            <ul>
              <li>
                <strong>Sauvegardes régulières</strong> : La mise en place de
                sauvegardes régulières est une pratique essentielle pour
                prévenir la perte de données.
              </li>
              <li>
                <strong>Utilisation de Logiciels de sécurité</strong> : Les
                logiciels antivirus et anti-malwares aident à prévenir les
                infections qui pourraient entraîner une perte de données.
              </li>
              <li>
                <strong>Gestion prudente des fichiers</strong> : Éviter les
                actions risquées, comme la suppression de fichiers sans
                vérification, contribue à réduire les risques de perte de
                données.
              </li>
            </ul>
            <h3>Limitations de la récupération de données</h3>
            <ul>
              <li>
                <strong>Pertes irréversibles</strong> : Certaines pertes de
                données peuvent être irréversibles, en particulier en cas de
                dommages physiques importants sur le support de stockage.
              </li>
              <li>
                <strong>Dépendance de la Rapidité d'Intervention</strong> : Dans
                de nombreux cas, la récupération de données est plus efficace si
                elle est effectuée rapidement après la perte.
              </li>
            </ul>
            <br />
            Il est important de noter que bien que la récupération de données
            puisse être réalisée dans de nombreux cas, la prévention reste la
            meilleure approche. La mise en place de bonnes pratiques de
            sauvegarde et de sécurité contribue à minimiser les risques de perte
            de données.
          </>
        ),
        image: {
          src: "/images/_4c175c8b-ded5-4cde-96e5-00b9d033f021.jpg",
          alt: "virus",
        },
      },
    ],
  },
  {
    categoryID: 5,
    name: "contact",
    description: "Contact du site",
    keywords: ["contact"],
    linkHref: "/contact-informatique-montpellier",
    linkNameMainMenu: "contact",
  },
];
