import Link from "next/link";
import Faq from "./Faq";

const data = [
  {
    question: <h4>Puis-je passer directement à votre boutique ?</h4>,
    answer: (
      <p>
        Non, car nous sommes une entreprise de dépannage informatique à
        domicile. Merci de{" "}
        <Link href="/contact-informatique-montpellier">
          <u>prendre rendez-vous</u>
        </Link>{" "}
        .
      </p>
    ),
  },
  {
    question: <h4>Combien de temps pour un rendez-vous ?</h4>,
    answer: (
      <p>
        Nous intervenons généralement 24 h après votre prise de rendez-vous que
        vous choisirez selon vos disponibilités.
      </p>
    ),
  },
  {
    question: (
      <h4>Quels sont les délais de réparation informatique en atelier ?</h4>
    ),
    answer: (
      <p>
        Tout dépend de la complexité de la panne. Le délai moyen constaté est de
        48 h, entre le retrait et le retour de votre matériel.
      </p>
    ),
  },
  {
    question: (
      <h4>Le diagnostic et les déplacements à domicile sont-ils gratuits ?</h4>
    ),
    answer: (
      <p>
        Oui, mais uniquement en cas d'acceptation du devis d'intervention. Ce coût sera déduit du reste à payer. Demandez un <Link href="/contact-informatique-montpellier"><u>devis gratuitement</u></Link>.
      </p>
    ),
  },
];

export default function FaqList() {
  return (
    <section className="flex flex-col mb-4">
      <h3>
        F.A.Q. sur nos services de dépannage informatique et de réparation
        d'ordinateur
      </h3>
      {data.map((item, i) => (
        <Faq key={i} item={item} />
      ))}
    </section>
  );
}
