import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import ScrollToTop from "./scrollToTop/ScrollToTop";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";
import Image from "next/image";

const addStructuredDataJsonLd = () => {
  return {
    __html: `{
  "@context" : "http://schema.org",
  "@type" : "LocalBusiness",
  "name" : "DÉPANNAGE INFORMATIQUE MONTPELLIER",
  "image" : "https://www.pcnumerik.fr/images/logo-pcnumerik.png",
  "telephone" : "04 11 93 44 72",
  "address" : {
    "@type" : "PostalAddress",
    "streetAddress" : "Avenue des Bergamotes",
    "addressLocality" : "Montpellier",
    "postalCode" : "34070"
  },
  "openingHoursSpecification" : {
    "@type" : "OpeningHoursSpecification",
    "dayOfWeek" : {
      "@type" : "DayOfWeek",
      "name" : "Lundi - Vendredi de 9h à 20h Samedi de 10h à 17 h"
    }
  },
    "aggregateRating": {
    "@type": "AggregateRating",    "ratingValue": "4.9",
    "reviewCount": "158"
  },
   "review": [
    {
      "@type": "Review",
      "author": "Balmer Linette",
      "datePublished": "2018-04-08",
      "description": "Merci pour la réparation de mon ordinateur. Ça m'a permis de reculer l'achat d'un nouveau pc. Service rapide et efficace.",
      "name": "Avis Google 1",
      "reviewRating": {
        "@type": "Rating",
        "bestRating": "5",
        "ratingValue": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "Review",
      "author": "Daniel Laurent",
      "datePublished": "2018-04-12",
      "description": "De nombreuses pannes résolues grâce à vous. Merci pour la disponibilité.",
      "name": "Avis Google 2",
      "reviewRating": {
        "@type": "Rating",
        "bestRating": "5",
        "ratingValue": "5",
        "worstRating": "1"
      }
    }
  ]
  
}`,
  };
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PCNumerik - Dépannage informatique à domicile",
  description: "Dépannage informatique à domicile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addStructuredDataJsonLd()}
          key="product-jsonld"
        />
      </Head>
      <body
        className={`${inter.className}  flex flex-col items-center min-h-screen mx-auto text-gray-700 bg-white`}
      >
        <GoogleAnalytics gaId="G-7T66M5FPCY" />
        <Header />
        <main className="w-full flex flex-col items-center">{children}</main>

        {/* <div id="google-reviews"></div>
<script>
jQuery(document).ready(function( $ ) {
   $("#google-reviews").googlePlaces({
        placeId: 'ChIJcQeFFTCuthIRKiv51eqCEU0' //Find placeID @: https://developers.google.com/places/place-id      , render: ['reviews']
      , min_rating: 5
      , max_rows:4
   });
});
</script> */}

        <Image
          src="/images/_f97c3806-d885-4769-817b-34cd2d0d2349.jpg"
          alt="ordinateur"
          width={250}
          height={250}
        />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
