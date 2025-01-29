/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/reparation-ecran-ordinateur-pc-portable-montpellier.html",
        destination: "/depannage-informatique-montpellier/reparation-ecran-casse-pc-ordinateur-portable",
        permanent: true,
      },
      {
        source: "/virus-desinfection-ordinateur-pc-portable-montpellier-optimisation-informatique.html",
        destination: "/depannage-informatique-montpellier/desinfection-virus-ordinateur-pc",
        permanent: true,
      },
      {
        source: "/depannage-informatique-montpellier-reparation-ordinateur-pc-portable.html",
        destination: "/depannage-informatique-montpellier/formatage-reinstallation-systeme-exploitation",
        permanent: true,
      },
      {
        source: "/recuperation-donnees-sauvegarde-disque-dur-ordinateur-pc-informatique-montpellier.html",
        destination: "/recuperation-de-donnees-montpellier",
        permanent: true,
      },
      {
        source: "/maintenance-informatique-montpellier.html",
        destination: "/maintenance-informatique-montpellier",
        permanent: true,
      },
      {
        source: "/optimiser-booster-accelerer-ordinateur-pc-informatique-montpellier.html",
        destination: "/maintenance-informatique-montpellier",
        permanent: true,
      },
      {
        source: "/assistance-informatique-montpellier.html",
        destination: "/assistance-informatique-montpellier",
        permanent: true,
      },
      {
        source: "/installation-imprimante-montpellier.html",
        destination: "/assistance-informatique-montpellier/installation-imprimante-a-domicile-montpellier",
        permanent: true,
      },
      {
        source: "/installation-box-internet-montpellier.html",
        destination: "/assistance-informatique-montpellier/installation-box-internet-configuration-reseau",
        permanent: true,
      },
      {
        source: "/contact-depannage-informatique-montpellier.html",
        destination: "/contact-informatique-montpellier",
        permanent: true,
      },
      {
        source: "/refroidissement-surchauffe-ordinateur-pc-nettoyage-informatique-montpellier.html",
        destination: "/maintenance-informatique-montpellier/surchauffe-depoussierage-nettoyage-pc-ordinateur",
        permanent: true,
      },
      {
        source: "/Zone-intervention-PCnumerik.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact-depannage-informatique-montpellier.php",
        destination: "/contact-informatique-montpellier",
        permanent: true,
      },
      {
        source: "/blog/",
        destination: "https://blog.pcnumerik.fr/",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
