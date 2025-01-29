import Link from "next/link";
import React from "react";
import { cookies } from "next/headers";
import PasswordPromptDialog from "../components/PasswordPromptDialog";
import Logout from "../components/Logout";

function Admin() {
  const cookiesStore = cookies();
  const loginCookies = cookiesStore.get(process.env.PASSWORD_COOKIE_NAME!);
  const isLoggedIn = !!loginCookies?.value;

  if (!isLoggedIn) {
    return <PasswordPromptDialog />;
  } else {
    return (
      <div className="flex flex-wrap justify-center gap-8 p-12">
        <article className="flex gap-8">
          <section>
            <h3>OUTILS</h3>
            <ul>
              <li>
                <Link
                  href="/admin/calculatrice_benefice_autoentrepreneur"
                  target="_blank"
                >
                  Calculatrice bénéfice auto-entrepreneur
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.google.fr/maps/dir/Avenue+des+Bergamotes,+34070+Montpellier,+France//@43.5825827,3.8490047,3280m/data=!3m1!1e3!4m8!4m7!1m5!1m1!1s0x12b6ae306acc60d9:0xd9c9a453cec3e5ad!2m2!1d3.8577595!2d43.5825675!1m0?hl=fr"
                  target="_blank"
                >
                  Carte itinéraire Google
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.ovhtelecom.fr/manager/index.html#/telephony/gy9499-ovh-1/line/0033411934472/consumption/incomingCalls"
                  target="_blank"
                >
                  OVH (téléphonie)
                </Link>
              </li>
              <li>
                <Link
                  href="https://sosransomware.com/"
                  target="_blank"
                >
                  SOS Ransomware 
                </Link>
              </li>
            </ul>
          </section>
          <section>
            <h3>FOURNISSEURS MATERIELS</h3>
            <ul>
              <li>
                <Link href="https://www.amazon.fr/" target="_blank">
                  Amazon
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.ebay.fr/myb/Summary?MyEbay&amp;gbh=1"
                  target="_blank"
                >
                  Ebay
                </Link>
              </li>
              <li>
                <Link
                  href="http://www.sabmegastore.com/composant-pc-portable/disque-dur.html"
                  target="_blank"
                >
                  Sabmegastore
                </Link>
              </li>
              <li>
                <Link href="http://www.grosbill.com/" target="_blank">
                  Grosbill.com
                </Link>
              </li>
              <li>
                Configs de PC :
                <Link
                  href="https://www.prenium-pc.com/avis-190518121812-q9kchf183g8u6mtegrblhau842_1.html"
                  target="_blank"
                >
                  Prenium-pc
                </Link>
                /
                <Link
                  href="https://www.materiel.net/pc-de-bureau/l402/+fv394-5912+fv1447-7880/"
                  target="_blank"
                >
                  Materiel.net
                </Link>
              </li>
            </ul>
          </section>
        </article>
        <article className="flex gap-8">
          <section>
            <h3>AUTRES</h3>
            <ul>
              <li>
                <Link href="http://www.mdli.fr/" target="_blank">
                  Maison De L'Informatique
                </Link>
                <br />
                25 €/ soudure
                <br />
                25 avenue Georges Clémenceau <br />
                09 65 22 17 66
                <br />
                <br />
              </li>
              <li>
                {" "}
                <Link href="http://www.etechinfo.info/" target="_blank">
                  Etech informatique
                </Link>
                <br />
                40 €/soudure
                <br />
                le matin pour l'aprem
                <br />
                04 67 92 20 12 <br />
                Responsable soudure : Karim <br />
                26 avenue de Clémenceau
              </li>
            </ul>
          </section>
          <section>
            <table
              className="table-auto bg-gray-200"
              // className={{
              //   width: "0",
              //   border: "1",
              //   borderSpacing: "0",
              //   paddingTop: "4rem",
              // }}
            >
              <thead>
                <tr>
                  <td width="87" valign="top">
                    <p>
                      <strong>Distance</strong>
                    </p>
                  </td>
                  <td width="126" valign="top">
                    <p>
                      <strong>Forfait de base / Tarif diagnostic</strong>
                    </p>
                  </td>
                  <td width="118" valign="top">
                    <strong>
                      Tour GAMER
                      <br />
                      iMAC 21&quot;5
                    </strong>
                  </td>
                  <td width="96" valign="top">
                    <strong>iMAC 27&quot;</strong>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td width="87" valign="top" className="bg-[#CCC]">
                    <p>Montpellier intramuros</p>
                  </td>
                  <td valign="top">
                    <p>59 € / 29 €</p>
                  </td>
                  <td width="118" valign="top">
                    89 €/ 59 €
                  </td>
                  <td width="96" valign="top">
                    149 €/ 89 €
                  </td>
                </tr>
                <tr>
                  <td width="87" valign="top" className="bg-[#CCC]">
                    <p>
                      1er couronne <br />0 à 10 km
                    </p>
                  </td>
                  <td valign="top">
                    <p>89 € / 29 €</p>
                  </td>
                  <td width="118" valign="top">
                    119 €/ 59 €
                  </td>
                  <td width="96" valign="top">
                    159 €/ 89 €
                  </td>
                </tr>
                <tr>
                  <td width="87" valign="top" className="bg-[#CCC]">
                    <p>
                      2e couronne <br />
                      10 à 20 km
                    </p>
                  </td>
                  <td valign="top">
                    <p>119 € / 59 €</p>
                  </td>
                  <td width="118" valign="top">
                    149 € / 59 €
                  </td>
                  <td width="96" valign="top">
                    189 € / 89 €
                  </td>
                </tr>
                <tr>
                  <td width="87" valign="top" className="bg-[#CCC]">
                    <p>
                      3e couronne <br />
                      20 à 30 km
                    </p>
                  </td>
                  <td valign="top">
                    <p>149 € / 89 €</p>
                  </td>
                  <td width="118" valign="top">
                    159 € / 89 €
                  </td>
                  <td width="96" valign="top">
                    199 € / 99 €
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              (0.15 €/ km) environ en carburant. <br />
              (Pas de supplément en cas de retour atelier)
            </p>
          </section>
        </article>
        <ul>
          <li>
            <span className="line-height: 107%; font-size: 16pt">
              <strong>PCnumerik :</strong> Bonjour/ bonsoir, Pcnumerik, Benoît à
              votre écoute.
            </span>
          </li>

          <li>
            <span className="line-height: 107%; font-size: 16pt; color: red">
              Client (e)&nbsp;: …
            </span>
            <span className="font-size: 16pt"> </span>
          </li>
          <li>
            <span className="font-size: 16pt">
              <strong>PCnumerik :</strong> Quel problème rencontrez-vous ?
            </span>
          </li>
          <li>
            <span className="font-size: 16pt; color: red">Client (e) : …</span>
            <span className="font-size: 16pt"> </span>
          </li>
          <li>
            <span className="font-size: 16pt">
              <strong>PCnumerik :</strong> Etes-vous une
              <strong>entreprise </strong>ou un(e)
              <strong>particulier</strong> ?
            </span>
          </li>
          <li>
            <span className="font-size: 16pt; color: red">Client (e) : …</span>
            <span className="font-size: 16pt"> </span>
          </li>

          <li>
            <span className="font-size: 16pt">
              <strong>PCnumerik : </strong>Avez-vous
              <strong>déjà fait appel à nos services</strong> dans le
              passé&nbsp;?
            </span>
          </li>
          <li>
            <span className="font-size: 16pt; color: red">Client (e) : …</span>
            <span className="font-size: 16pt"> </span>
          </li>
          <li>
            <span className="font-size: 16pt">
              <strong>PCnumerik : </strong>Très bien, je vous présente/ rappelle
              brièvement le fonctionnement de
              <strong>PCnumerik</strong>. <br />
              <br />
              Nous sommes une entreprise de dépannage informatique à domicile.{" "}
              <br />
              Un technicien informatique vous est envoyé pour établir un
              pré-diagnostic, ce qui lui permettra d&rsquo;évaluer si le
              dépannage est possible sur place ou s&rsquo;il nécessite plus de
              temps et de moyens, et donc s'il faut envisager un diagnostic ou
              des réparations plus approfondis dans notre atelier situé à
              Montpellier (et ce sans supplément tarifaire).
              <br />
              Le délai moyen constaté d&rsquo;immobilisation en atelier est de
              48h.
              <br />
              <br />
              Par rapport à nos concurrents, nos
              <strong>principaux avantages sont</strong> : <br />
              + Aucune facturation horaire et ce, peu importe le temps consacré
              à votre problème. <br />
              + Déplacements inclus à votre domicile/ vos locaux à des tarifs
              boutique donc un gain de temps et d'argent. Vous ne vous déplacez
              pas, on s'occupe de tout.
              <br />
              Voilà j'ai fait le tour. <br />
              Afin d'estimer votre devis, pouvez-vous me communiquer l'adresse
              d'intervention ?
            </span>
          </li>
          <br />

          <li>
            <span className="font-size: 16pt; color: red">Client (e) : …</span>
            <span className="font-size: 16pt"> </span>
          </li>

          <li>
            <span className="font-size: 16pt">
              Les <strong>tarifs</strong>&nbsp;(devis gratuit en ligne si
              possible sinon après diagnostic sur place ou en atelier) :
              <strong>
                <br />
                cf tableau en fonction de la distance
                <br />
                <br />
                Si vous changez d'avis et ne souhaitez pas poursuivre les
                réparations
              </strong>
              ou encore que vous votre problème informatique est non pris en
              charge par nos services (matériel hors service, opérateur Tiers
              (FAI par exemple), vous serez redevable de frais de main doeuvre
              et logistiques minimum s'élevant à :<br />
              <br />
              <strong>cf tableau en fonction de la distance</strong>{" "}
            </span>
            <br />
            <br />
            <span className="font-size: 16pt">
              <strong>XXX</strong> € pour le diagnostic complet en atelier ou le
              diagnostic même partiel à votre domicile/ vos locaux.
            </span>
          </li>
          <br />

          <li>
            <span className="font-size: 16pt">
              Souhaitez-vous prendre rendez-vous&nbsp;? Dans ce cas nous allons
              remplir rapidement ensemble une fiche d&rsquo;intervention à votre
              domicile&nbsp;?
            </span>
          </li>
          <li>
            <span className="font-size: 16pt; color: red">
              Client (e)&nbsp;: …
            </span>
            <span className="font-size: 16pt"> </span>
          </li>
          <li>
            <span className="font-size: 16pt">
              Avez-vous d&rsquo;autres questions M. / Mme &nbsp;… ?
            </span>
          </li>
          <li>
            <span className="font-size: 16pt; color: red">
              Client (e)&nbsp;: …
            </span>
            <span className="font-size: 16pt"> </span>
          </li>

          <li>
            <span className="font-size: 16pt">
              Très bien je vous souhaite une bonne journée.
            </span>
          </li>
        </ul>
<Logout />
      </div>
    );
  }
}

export default Admin;
