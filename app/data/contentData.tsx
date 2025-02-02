import Link from "next/link";
import Image from "next/image";
import H2 from "@/titles/H2";
import FaqList from "@/faq/FaqList";

export const contentData = [
  {
    categoryID: 0,
    name: "Traduction juridique anglais-espagnol vers le français - LinguaSphere.fr",
    description: "Accueil du site",
    keywords: ["accueil"],
    linkHref: "/",
    linkNameMainMenu: "accueil",
  },
  {
    categoryID: 1,
    name: "Expertises dans les domaines du droit",
    image: {
      src: "/images/_235f06e3-59c6-410e-8f46-2efe51bd64fd.jpg",
      alt: "Expertises dans les domaines du droit",
    },
    description:
      "Expertises dans les domaines du droit, Gouvernance, Programmes de conformité, codes de déontologie, chartes éthiques, Programmes de lutte contre les crimes et délits financiers, Corruption, Fraude, Délit d’initiés, Blanchiment de capitaux",
    linkHref: "/expertises-dans-les-domaines-du-droit",
    linkNameMainMenu: "expertises",
    keywords: [
      "Expertises dans les domaines du droit",
      "Gouvernance",
      "Programmes de conformité",
      "codes de déontologie",
      "chartes éthiques",
      "Programmes de lutte contre les crimes et délits financiers",
      "Corruption",
      "Fraude",
      "Délit d’initiés",
      "Blanchiment de capitaux",
    ],
    content: [
      {
        name: "Gouvernance",
        image: {
          src: "/images/_8249716c-45b6-4ad3-b2b7-0486a2791088.jpg",
          alt: "virus",
        },
        linkHref: "/expertises-dans-les-domaines-du-droit/gouvernance",
        predescription: "",
        description: <></>,
        details: <></>,
        page: (
          <section className="flex flex-col items-center sm:flex-row mb-20">
            <ul>
              <li>
                Programmes de conformité ; codes de déontologie ; chartes
                éthiques
              </li>
              <li>
                Programmes de lutte contre les crimes et délits financiers
                <ul>
                  <li>Corruption</li>
                  <li>Fraude</li>
                  <li>Délit d’initiés</li>
                  <li>Blanchiment de capitaux</li>
                  <li>Financement du terrorisme</li>
                </ul>
              </li>
              <li>
                Politiques de l’entreprise
                <ul>
                  <li>Confidentialité</li>
                  <li>Données personnelles et respect de la vie privée</li>
                  <li>Conflits d’intérêts</li>
                  <li>Alerte professionnelle</li>
                  <li>Sanctions internationales</li>
                  <li>Concurrence</li>
                  <li>Prévention des risques</li>
                  <li>Frais, invitations et cadeaux</li>
                </ul>
              </li>
              <li>Supports de formation et de communication</li>.
            </ul>
          </section>
        ),
      },
      {
        name: "Famille et patrimoine",
        image: {
          src: "/images/_585e1857-2535-4db6-911c-5d6985b20b29.jpg",
          alt: "virus",
        },
        linkHref:
          "/expertises-dans-les-domaines-du-droit/famille-et-patrimoine",
        predescription: "",
        description: <></>,
        details: <></>,
        page: (
          <section className="flex flex-col items-center sm:flex-row mb-20">
            <ul>
              <li>Contrats de mariage</li>
              <li>
                Jugements de divorce ; conventions réglant les conséquences du
                divorce
              </li>
              <li>Jugements d’adoption</li>
              <li>
                Successions
                <ul>
                  <li>Testaments</li>
                  <li>Actes de dévolution</li>
                  <li>Actes constitutifs de trust</li>
                </ul>
              </li>
              <li>Directives anticipées</li>
              <li>Actes et contrats de vente de biens immobiliers</li>
            </ul>
          </section>
        ),
      },
      {
        name: "Sociétés",
        image: {
          src: "/images/_d303f919-28b5-4efa-ab4f-72789fc44439.jpg",
          alt: "virus",
        },
        linkHref: "/expertises-dans-les-domaines-du-droit/societes",
        predescription: "",
        description: <></>,
        details: <></>,
        page: (
          <section className="flex flex-col items-center sm:flex-row mb-20">
            <ul>
              <li>Statuts</li>
              <li>Pactes d’actionnaires</li>
              <li>Procès-verbaux d’assemblées ou de réunions</li>
              <li>Procurations ; délégations de pouvoirs</li>
              <li>Contrats de cession ou d’acquisition d’entreprises</li>
              <li>Accords de confidentialité</li>
              <li>
                Contrats de vente de marchandises ; contrats de prestation de
                services
              </li>
              <li>Contrats de travail</li>
              <li>Baux commerciaux</li>
            </ul>
          </section>
        ),
      },
      {
        name: "Communication juridique",
        image: {
          src: "/images/_1e8cdc21-28e9-4e2c-8cbd-b2a58d42ac25.jpg",
          alt: "virus",
        },
        linkHref:
          "/expertises-dans-les-domaines-du-droit/communication-juridique",
        predescription: "",
        details: <></>,
        page: (
          <section className="flex flex-col items-center sm:flex-row mb-20">
            <ul>
              <li>Consultations</li>
              <li>Brochures</li>
              <li>Lettres d’information</li>
              <li>Présentations</li>
              <li>Pages et sites Web</li>
              <li>Supports de formation</li>
              <li>Notes et politiques internes</li>
            </ul>
          </section>
        ),
      },
      {
        name: "International et arbitrage",
        image: {
          src: "/images/_c53f519d-e3ef-40c0-b57b-aeb35a90cd9c.jpg",
          alt: "clavier pc portable défectueux",
        },
        linkHref:
          "/expertises-dans-les-domaines-du-droit/international-et-arbitrage",
        predescription: "",
        description: <></>,
        details: <></>,
        page: (
          <section className="flex flex-col items-center sm:flex-row mb-20">
            <ul>
              <li>
                Consultations sur un droit étranger ou le droit international
                privé
              </li>
              <li>Sentences arbitrales</li>
              <li>Mémoires</li>
              <li>Dépositions</li>
              <li>Commissions rogatoires</li>
            </ul>
          </section>
        ),
      },
    ],
  },
  {
    categoryID: 2,
    name: "Traduction juridique anglais-espagnol vers le français",
    image: {
      src: "/images/_7b0e784e-9b15-4d30-bf14-9b8724428bae.jpg",
      alt: "Maintenance informatique",
    },
    description:
      "Traduire le droit de l’anglais et de l’espagnol vers le français.",
    linkHref: "/traduction-juridique-anglais-espagnol-vers-le-francais",
    linkNameMainMenu: "Traduction",
    keywords: ["optimisation de l'ordinateur", "optimsation des performances"],
    content: [
      {
        name: "Traduction juridique anglais-espagnol vers le français",
        image: {
          src: "/images/_cc6b712f-3bb2-4b2e-88f0-06028301d35d.jpg",
          alt: "virus",
        },
        linkHref: "/traduction-juridique-anglais-espagnol-vers-le-francais",
        predescription: "",
        description: <></>,
        details: <></>,
        page: (
          <>
            <section className="mb-10">
              <H2 withIcon={"IoMicCircleSharp"}>Votre demande</H2>
              <p>
                <b>Faire traduire</b> en <b>français</b> un texte juridique
                rédigé en <b>anglais</b>
                ou en <b>espagnol</b>.
              </p>
              <Link
                href={"expertises-dans-les-domaines-du-droit/"}
                className="flex flex-col items-center gap-4"
              >
                <button>Voir les domaines de spécialisation</button>
              </Link>{" "}
            </section>
            <section className="mb-10">
              <H2 withIcon={"BsArrowCounterclockwise"}>Notre solution</H2>
              <p>
                <b>Transposer</b> et <b>adapter</b> un <b>système</b> et une{" "}
                <b>culture juridiques</b>, susceptibles de contenir des concepts
                distincts ou inconnus du droit français, pour <b>restituer</b>{" "}
                au mieux le <b>sens</b> et la <b>valeur</b> du
                <b>texte</b> d’origine.
              </p>
            </section>
            <section className="mb-10">
              <H2 withIcon={"MdDone"}>Nos atouts</H2>
              <p>
                Une <b>démarche comparatiste</b>, une excellente{" "}
                <b>connaissance</b> des
                <b>métiers</b> du <b>droit</b> et de la <b>conformité</b> et de
                leurs <b>enjeux</b>, une
                <b>maîtrise</b> du <b>style juridique</b> et des{" "}
                <b>ressources documentaires</b>
                spécialisées.
              </p>
            </section>
            <section className="mb-10">
              <H2 withIcon={"FaCommentMedical"}>Votre bénéfice</H2>
              <p>
                Une <b>traduction idiomatique</b>, conforme aux concepts et à la
                langue du droit.
              </p>
            </section>
          </>
        ),
      },
    ],
  },
  {
    categoryID: 3,
    name: "Révision",
    image: {
      src: "/images/_7b0e784e-9b15-4d30-bf14-9b8724428bae.jpg",
      alt: "Maintenance informatique",
    },
    description:
      "Contrôler la qualité d’une traduction ou d’un écrit juridique.",
    linkHref: "/revision",
    linkNameMainMenu: "Révision",
    keywords: ["optimisation de l'ordinateur", "optimsation des performances"],
    content: [
      {
        name: "Révision",
        image: {
          src: "/images/_cc6b712f-3bb2-4b2e-88f0-06028301d35d.jpg",
          alt: "virus",
        },
        linkHref: "/revision",
        predescription: "",
        description: <></>,
        details: <></>,
        page: (
          <>
            <section className="mb-10">
              <H2 withIcon={"IoMicCircleSharp"}>Votre demande</H2>
              <p>
                Avoir un <b>double regard</b> sur une <b>traduction</b> ou{" "}
                <b>contrôler</b> la <b>qualité</b> d’une <b>traduction</b>.
              </p>
              <Link
                href={"expertises-dans-les-domaines-du-droit/"}
                className="flex flex-col items-center gap-4"
              >
                <button>Voir les domaines de spécialisation</button>
              </Link>{" "}
            </section>
            <section className="mb-10">
              <H2 withIcon={"BsArrowCounterclockwise"}>Notre solution</H2>
              <p>
                <b>Examiner</b> votre traduction, par comparaison avec le texte
                d’origine, afin de <b>parfaire</b> sa <b>rédaction</b>, de
                vérifier l’<b>adéquation</b> des <b>choix terminologiques</b> au
                contexte, de <b>rectifier</b> les <b>erreurs</b> et de{" "}
                <b>contrôler</b> sa <b>qualité</b>.
              </p>
            </section>
            <span className="text-orange">Exemples de points contrôlés :</span>
            <ul className="pb-8">
              <li>Fautes d’orthographe, de grammaire ou de conjugaison</li>
              <li>Erreurs de syntaxe, de style ou de typographie</li>
              <li>Contresens ou erreurs de compréhension</li>
              <li>Incohérences ou erreurs terminologiques</li>
              <li>
                Omissions ou ajouts éventuels, erreurs d’inattention, fautes de
                frappe et autres défauts de concordance entre le texte source et
                le texte cible
              </li>
            </ul>
            <section className="mb-10">
              <H2 withIcon={"MdDone"}>Nos atouts</H2>
              <p>
                Une <b>maîtrise</b> de la <b>langue française</b> et{" "}
                <b>juridique</b>, une grande <b>attention</b> aux <b>détails</b>{" "}
                et une extrême <b>rigueur</b>.
              </p>
            </section>
            <section className="mb-10">
              <H2 withIcon={"FaCommentMedical"}>Votre bénéfice</H2>
              <p>
                Une <b>traduction idiomatique</b>, conforme aux <b>concepts</b>{" "}
                et à la <b>langue</b> du <b>droit</b>.
              </p>
            </section>
          </>
        ),
      },
    ],
  },
  {
    categoryID: 4,
    name: "Rédaction",
    image: {
      src: "/images/_d1277747-0688-460b-9fd7-0bdb869b59bc.jpg",
      alt: "Récupération de données",
    },
    description: "Écrire et communiquer clairement le droit.",
    keywords: [
      "sauvegarde préventive",
      "sauvegarde de données",
      "sauvegarde de fichiers",
      "sauvegarde de documents",
    ],
    linkHref: "/redaction",
    linkNameMainMenu: "Rédaction",
    content: [
      {
        name: "Rédaction",
        predescription: "",
        details: <></>,
        image: {
          src: "/images/_4c175c8b-ded5-4cde-96e5-00b9d033f021.jpg",
          alt: "virus",
        },
        page: (
          <>
            <section className="mb-10">
              <H2 withIcon={"IoMicCircleSharp"}>Votre demande</H2>
              <p>
                Faire <b>rédiger</b> ou <b>réécrire</b> un <b>texte</b> en{" "}
                <b>français</b> pour <b>communiquer</b>
                et <b>diffuser</b> le <b>droit</b>, ou <b>harmoniser</b> votre{" "}
                <b>communication juridique</b>,
              </p>
              <ul className="pb-8">
                <li>au sein de votre entreprise</li>
                <li>auprès de vos clients et du grand public</li>
              </ul>
              <span className="text-orange">
                Exemples de supports rédigés :
              </span>
              <ul>
                <li>Formation</li>
                <li>Communication</li>
                <li>
                  Aide à la communication multilingue
                  <ul>
                    <li>Guides de style</li>
                    <li>Glossaires</li>
                    <li>Lexiques</li>
                  </ul>
                </li>
              </ul>
            </section>
            <section className="mb-10">
              <H2 withIcon={"BsArrowCounterclockwise"}>Notre solution</H2>
              <p>
                <b>Choisir</b> les <b>contenus</b>, les <b>mots</b> et le{" "}
                <b>niveau de langage</b> appropriés pour <b>véhiculer</b> votre{" "}
                <b>message juridique</b> de manière <b>fluide</b> et{" "}
                <b>efficace</b>.
              </p>
            </section>
            <section className="mb-10">
              <H2 withIcon={"MdDone"}>Nos atouts</H2>
              <p>
                Une <b>plume pertinente</b> axée sur les <b>besoins</b> du{" "}
                <b>lecteur</b>, une excellente <b>connaissance</b> des{" "}
                <b>métiers</b> du <b>droit</b> et de la <b>conformité</b> et de
                leurs <b>enjeux</b> et une <b>habileté</b> à <b>transmettre</b>{" "}
                l’<b>information juridique</b> et à la rendre{" "}
                <b>compréhensible</b> par le <b>public visé</b>.
              </p>
            </section>
            <section className="mb-10">
              <H2 withIcon={"FaCommentMedical"}>Votre bénéfice</H2>
              <ul>
                <li>
                  Un <b>texte juridique</b>{" "}
                  <ul>
                    <li>clair et concis</li>
                    <li>facile et agréable à lire</li>
                    <li>adapté au message et au(x) destinataire(s)</li>
                  </ul>
                </li>
                <li>
                  Une <b>communication harmonisée</b>
                </li>
              </ul>
            </section>
          </>
        ),
      },
    ],
  },
  {
    categoryID: 5,
    name: "Formation à la traduction juridique",
    image: {
      src: "/images/_d1277747-0688-460b-9fd7-0bdb869b59bc.jpg",
      alt: "Récupération de données",
    },
    description:
      "Former à la langue, à la culture et à la traduction du droit.",
    keywords: [
      "sauvegarde préventive",
      "sauvegarde de données",
      "sauvegarde de fichiers",
      "sauvegarde de documents",
    ],
    linkHref: "/formation-a-la-traduction-juridique",
    linkNameMainMenu: "Formation",
    content: [
      {
        name: "Formation à la traduction juridique",
        predescription: "",
        details: <></>,
        image: {
          src: "/images/_4c175c8b-ded5-4cde-96e5-00b9d033f021.jpg",
          alt: "virus",
        },
        page: (
          <>
            <section className="mb-10">
              <H2 withIcon={"IoMicCircleSharp"}>Votre demande</H2>
              <p>
                Vous <b>former</b> à la <b>traduction juridique</b> ou au{" "}
                <b>français juridique</b> (initiation ou perfectionnement).
              </p>
            </section>
            <section className="mb-10">
              <H2 withIcon={"BsArrowCounterclockwise"}>Notre solution</H2>
              <p className="mb-8">
                <b>Enseigner</b> et <b>transmettre</b> la <b>culture</b>, les{" "}
                <b>concepts</b> et la <b>langue</b>
                du <b>droit</b> en vue de faire <b>acquérir</b> les{" "}
                <b>connaissances</b> et les
                <b>compétences</b> nécessaires à la <b>compréhension</b>, la{" "}
                <b>traduction</b>, la
                <b>révision</b> ou la <b>rédaction</b> d’
                <b>écrits juridiques</b> en <b>français</b>.
              </p>
              <span className="text-orange mt-6">Ingénierie pédagogique :</span>
              <ul>
                <li>
                  Analyse des besoins et définition des objectifs pédagogiques
                </li>
                <li>
                  Sélection des contenus et conception des ressources et
                  supports pédagogiques
                </li>
                <li>
                  Conception des évaluations (préalables et postérieures à la
                  formation)
                </li>
                <li>Animation de la formation</li>
                <li>Adaptation à des publics diversifiés</li>
              </ul>
            </section>
            <section className="mb-10">
              <H2 withIcon={"MdDone"}>Nos atouts</H2>
              <p>
                Une <b>maîtrise</b> du <b>savoir-faire</b> à transmettre, une{" "}
                <b>pédagogie active</b>, <b>ludique</b>, <b>pragmatique</b> et{" "}
                <b>axée</b> sur l’<b>apprenant</b>, ainsi qu’un sens de l’
                <b>écoute</b> et de la <b>communication</b>.
              </p>
            </section>
            <section className="mb-10">
              <H2 withIcon={"FaCommentMedical"}>Votre bénéfice</H2>
              <ul>
                <li>
                  <b>Maîtrise</b> des <b>fondamentaux</b>
                </li>
                <li>
                  <b>Gain</b> d’<b>autonomie</b> et d’<b>aisance</b>
                </li>
              </ul>
              <span>
                pour <b>comprendre</b>, <b>traduire</b> et <b>rédiger</b> des{" "}
                <b>écrits juridiques</b> en <b>français</b>
              </span>
            </section>
            <FaqList />
          </>
        ),
      },
    ],
  },
  {
    categoryID: 6,
    name: "À propos",
    image: {
      src: "/images/_d1277747-0688-460b-9fd7-0bdb869b59bc.jpg",
      alt: "Récupération de données",
    },
    description: "",
    keywords: [
      "sauvegarde préventive",
      "sauvegarde de données",
      "sauvegarde de fichiers",
      "sauvegarde de documents",
    ],
    linkHref: "/a-propos",
    linkNameMainMenu: "À propos",
    content: [
      {
        name: "À propos",
        predescription: "",
        details: <></>,
        image: {
          src: "/images/_4c175c8b-ded5-4cde-96e5-00b9d033f021.jpg",
          alt: "virus",
        },
        page: (
          <>
            <section className="mb-10">
              Un itinéraire alliant le droit et les langues
              <br />
              <br />
              <H2 withIcon={"FaLinesLeaning "}>Parcours professionnel</H2>
              <ul>
                <li>
                  Depuis 2005, traductrice/relectrice spécialisée dans le
                  domaine juridique, de l’anglais et de l’espagnol vers le
                  français, ma langue maternelle
                </li>
                <li>
                  Formatrice dans les domaines de la traduction juridique et du
                  français juridique
                </li>
                <li>
                  Chargée d’enseignement pendant 4 ans au sein du master
                  professionnel de traduction juridique et financière de
                  l’Université Sorbonne Nouvelle, Paris 3: traduction juridique
                  de l’anglais et de l’espagnol vers le français
                </li>
                <li>
                  Collaboratrice juridique pendant 3 ans au sein d’une société
                  de conseil dans les secteurs du disque et du spectacle vivant
                </li>
              </ul>
            </section>
            <section className="mb-10">
              <H2 withIcon={"FaGraduationCap"}>Formation</H2>
              <ul>
                <li>
                  DEA mention droit international privé et droit du commerce
                  international obtenu à l’issue d’un cursus universitaire en
                  droit international à l’Université Paris 1 Panthéon –
                  Sorbonne, dont un semestre à l’Université Complutense de
                  Madrid dans le cadre du programme Erasmus.
                </li>
                <li>
                  Participation régulière à des colloques et des formations dans
                  les domaines de la traduction, du droit, de la documentation
                  et de la formation pour entretenir et actualiser mes
                  connaissances et acquérir de nouvelles compétences
                  spécialisées.
                </li>
              </ul>
            </section>
            <section className="mb-10">
              <H2 withIcon={"FaGavel"}>Déontologie</H2>
              <ul>
                <li>
                  Membre titulaire de la Société française des traducteurs et
                  signataire de son{" "}
                  <Link
                    className="text-orange"
                    href={
                      "https://www.sft.fr/global/gene/link.php?doc_id=642&fg=1"
                    }
                    target="_blank"
                  >
                    code de déontologie
                  </Link>
                  <ul>
                    <li>Respect des règles de l’art</li>
                    <li>Secret professionnel</li>
                    <li>Formation continue</li>
                  </ul>
                </li>
              </ul>
            </section>
          </>
        ),
      },
    ],
  },
  {
    categoryID: 7,
    name: "contact",
    description: "Contact du site",
    keywords: ["contact"],
    linkHref: "/contact-traduction-juridique",
    linkNameMainMenu: "contact",
  },
];
