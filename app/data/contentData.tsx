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
                  <li>"Corruption"</li>
                  <li>"Fraude"</li>
                  <li>"Délit d’initiés"</li>
                  <li>"Blanchiment de capitaux"</li>
                  <li>"Financement du terrorisme"</li>
                </ul>
              </li>
              <li>
                Politiques de l’entreprise
                <ul>
                  <li>"Confidentialité"</li>
                  <li>
                    "gestion des données personnelles et respect de la vie
                    privée"
                  </li>
                  <li>"Gestion des conflits d’intérêts"</li>
                  <li>"Alerte professionnelle"</li>
                  <li>"Sanctions internationales"</li>
                  <li>"Concurrence"</li>
                  <li>"Prévention des risques"</li>
                  <li>"Frais, invitations et cadeaux"</li>
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
        name: "Assurance",
        image: {
          src: "/images/_88eabc51-b6e6-4c37-b1f7-164d332c2aee.jpg",
          alt: "écran pc portable cassé",
        },
        linkHref: "/expertises-dans-les-domaines-du-droit/assurance",
        predescription: "",
        description: <></>,
        details: <></>,
        page: (
          <section className="flex flex-col items-center sm:flex-row mb-20">
            <ul>
              <li>Conditions générales</li>
              <li>Conditions particulières</li>
            </ul>
          </section>
        ),
      },
      {
        name: "Propriété intellectuelle",
        image: {
          src: "/images/_c53f519d-e3ef-40c0-b57b-aeb35a90cd9c.jpg",
          alt: "clavier pc portable défectueux",
        },
        linkHref:
          "/expertises-dans-les-domaines-du-droit/propriete-intellectuelle",
        predescription: "",
        description: <></>,
        details: <></>,
        page: (
          <section className="flex flex-col items-center sm:flex-row mb-20">
            <ul>
              <li>
                Contrats de cession ou de licence de droits de propriété
                intellectuelle
              </li>
              <li>
                Dossiers contentieux portant sur le droit des marques ou le
                droit d’auteur
              </li>
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
                Faire traduire en français un texte juridique rédigé en anglais
                ou en espagnol.
              </p>
            </section>
            <section className="mb-10">
              <H2 withIcon={"BsArrowCounterclockwise"}>Notre solution</H2>
              <p>
                Transposer et adapter un système et une culture juridiques,
                susceptibles de contenir des concepts distincts ou inconnus du
                droit français, pour restituer au mieux le sens et la valeur du
                texte d’origine.
              </p>
            </section>
            <section className="mb-10">
              <H2 withIcon={"MdDone"}>Nos atouts</H2>
              <p>
                Une démarche comparatiste, une excellente connaissance des
                métiers du droit et de la conformité et de leurs enjeux, une
                maîtrise du style juridique et des ressources documentaires
                spécialisées.
              </p>
            </section>
            <section className="mb-10">
              <H2 withIcon={"FaCommentMedical"}>Votre bénéfice</H2>
              <p>
                Une traduction idiomatique, conforme aux concepts et à la langue
                du droit.
              </p>
            </section>
          </>
        ),
      },
    ],
  },
  {
    categoryID: 3,
    name: "Révision de traductions juridiques",
    image: {
      src: "/images/_7b0e784e-9b15-4d30-bf14-9b8724428bae.jpg",
      alt: "Maintenance informatique",
    },
    description: "Révision de traductions juridiques",
    linkHref: "/revision-de-traductions-juridiques",
    linkNameMainMenu: "Révision",
    keywords: ["optimisation de l'ordinateur", "optimsation des performances"],
    content: [
      {
        name: "Révision de traductions juridiques",
        image: {
          src: "/images/_cc6b712f-3bb2-4b2e-88f0-06028301d35d.jpg",
          alt: "virus",
        },
        linkHref: "/revision-de-traductions-juridiques",
        predescription: "",
        description: <></>,
        details: <></>,
        page: (
          <>
            <section className="mb-10">
              <H2 withIcon={"IoMicCircleSharp"}>Votre demande</H2>
              <p>
                Avoir un double regard sur une traduction ou contrôler la
                qualité d’une traduction.
              </p>
            </section>
            <section className="mb-10">
              <H2 withIcon={"BsArrowCounterclockwise"}>Notre solution</H2>
              <p>
                Examiner votre traduction, par comparaison avec le texte
                d’origine, afin de parfaire sa rédaction, de vérifier
                l’adéquation des choix terminologiques au contexte, de rectifier
                les erreurs et de contrôler sa qualité.
              </p>
            </section>
            <span>Exemples de points contrôlés :</span>
            <ul>
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
                Une maîtrise de la langue française et juridique, une grande
                attention aux détails et une extrême rigueur.
              </p>
            </section>
            <section className="mb-10">
              <H2 withIcon={"FaCommentMedical"}>Votre bénéfice</H2>
              <p>
                Une traduction idiomatique, conforme aux concepts et à la langue
                du droit.
              </p>
            </section>
          </>
        ),
      },
    ],
  },
  {
    categoryID: 4,
    name: "Rédaction juridique",
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
    linkHref: "/redaction-juridique",
    linkNameMainMenu: "Rédaction",
    content: [
      {
        name: "Rédaction juridique",
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
                Faire rédiger ou réécrire un texte en français pour communiquer
                et diffuser le droit, ou harmoniser votre communication
                juridique,
              </p>
              <ul>
                <li>au sein de votre entreprise</li>
                <li>auprès de vos clients et du grand public</li>
              </ul>
              <span>Exemples de supports rédigés :</span>
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
                Choisir les contenus, les mots et le niveau de langage
                appropriés pour véhiculer votre message juridique de manière
                fluide et efficace.
              </p>
            </section>
            <section className="mb-10">
              <H2 withIcon={"MdDone"}>Nos atouts</H2>
              <p>
                Une plume pertinente axée sur les besoins du lecteur, une
                excellente connaissance des métiers du droit et de la conformité
                et de leurs enjeux et une habileté à transmettre l’information
                juridique et à la rendre compréhensible par le public visé.
              </p>
            </section>
            <section className="mb-10">
              <H2 withIcon={"FaCommentMedical"}>Votre bénéfice</H2>
              <ul>
                <li>
                  Un texte juridique{" "}
                  <ul>
                    <li>clair et concis</li>
                    <li>facile et agréable à lire</li>
                    <li>adapté au message et au(x) destinataire(s)</li>
                  </ul>
                </li>
                <li>Une communication harmonisée</li>
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
                Vous former à la traduction juridique ou au français juridique
                (initiation ou perfectionnement).
              </p>
            </section>
            <section className="mb-10">
              <H2 withIcon={"BsArrowCounterclockwise"}>Notre solution</H2>
              <p>
                Enseigner et transmettre la culture, les concepts et la langue
                du droit en vue de faire acquérir les connaissances et les
                compétences nécessaires à la compréhension, la traduction, la
                révision ou la rédaction d’écrits juridiques en français.
              </p>
              <span>Ingénierie pédagogique :</span>
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
                Une maîtrise du savoir-faire à transmettre, une pédagogie
                active, ludique, pragmatique et axée sur l’apprenant, ainsi
                qu’un sens de l’écoute et de la communication.
              </p>
            </section>
            <section className="mb-10">
              <H2 withIcon={"FaCommentMedical"}>Votre bénéfice</H2>
              <ul>
                <li>maîtrise des fondamentaux</li>
                <li>gain d’autonomie et d’aisance</li>
              </ul>
              <span>
                pour comprendre, traduire et rédiger des écrits juridiques en
                français
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
                    className="text-green"
                    href={
                      "https://www.sft.fr/global/gene/link.php?doc_id=642&fg=1"
                    }
                    target="_blank"
                  >
                    code de déontologie
                  </Link>
                </li>
                <li>
                  Membre associée de l’Association française des juristes
                  d’entreprise
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
    linkHref: "/contact-informatique-montpellier",
    linkNameMainMenu: "contact",
  },
];
