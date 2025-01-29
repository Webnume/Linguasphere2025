"use client";
import Link from "next/link";
import React, { useEffect, useState, ChangeEvent } from "react";

function calculatrice_benefice_autoentrepreneur() {
  // Define state variables for form fields
  const [formData, setFormData] = useState({
    prestation: 0,
    prixRevente: 0,
    prixAchat: 0,
    charge: 0.244,
  });

  const [benefice, setBenefice] = useState(0);
  const [charge_a_payer, setCharge_a_payer] = useState(0);

  // Handle form field changes
  const handleInputChange = (e: any) => {
    let { name, value } = e.target;

    value = Number(value);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { prestation, prixRevente, prixAchat, charge } = formData;

  useEffect(() => {
    setBenefice(
      prestation + prixRevente - (prestation + prixRevente) * charge - prixAchat
    );

    setCharge_a_payer((prixRevente + prestation) * charge);

    console.log("formData", formData);
  }, [formData]);

  return (
    <section className="p-8">
      <form>
        <h1 className="text-xl">Calculatrice bénéfice auto-entrepreneur</h1>
        (mise à jour : avril 2024)
        <p className="text-#F60">
          Estimez simplement vos bénéfices et charges avant une prestationtion
          et/ou un achat pour donner rapidement votre tarif à vos clients.
        </p>
        <div>
          <h3>En cas de prestationtion de service</h3>
          <label className="padding:0px 20px 10px 100px;" htmlFor="prestation">
            <strong>Tarif de votre prestationtion</strong> ou{" "}
            <strong>montant de votre chiffre d'affaires</strong> (hors
            achat-vente)
          </label>
          <br />
          <input
            className=""
            type="text"
            name="prestation"
            value={prestation}
            onChange={handleInputChange}
            id="prestation"
          />
          <br />
          <div className="p-4">
            <strong>ET/ OU</strong>
          </div>
          <label className="p-0 m-0" htmlFor="prixRevente">
            <h3 className="p-0 m-0">En cas d'achat-vente</h3>
            <strong>
              Prix de revente TTC auquel vous vendez votre produit
            </strong>
            <br />
          </label>
          <input
            className="mb-4"
            type="text"
            name="prixRevente"
            id="prixRevente"
            value={prixRevente}
            onChange={handleInputChange}
          />
          <br />

          <label className="padding:0px 20px 10px 100px;" htmlFor="prixAchat">
            <strong>Prix d'achat TTC auquel vous achetez votre produit</strong>
            <br />
          </label>
          <span> </span>
          <input
            className=""
            type="text"
            name="prixAchat"
            id="prixAchat"
            value={prixAchat}
            onChange={handleInputChange}
          />
          <br />
          <h3>Quelles sont vos charges sociales ?</h3>
          <u>Cotisations et contributions sociales (impôts et CFP inclus) </u>
          <div>
            <input
              className=""
              type="radio"
              name="charge"
              value="0.244"
              checked={charge === 0.244}
              onChange={handleInputChange}
            />
            Activité libérale (CIPAV-BNC) : 24,4 %.
            <br />
            <input
              className=""
              type="radio"
              name="charge"
              value="0.14515"
              checked={charge === 0.14515}
              onChange={handleInputChange}
            />
            Activité de vente : 14,515 %.
            <br />
            <input
              className=""
              type="radio"
              name="charge"
              value="0.255"
              checked={charge === 0.255}
              onChange={handleInputChange}
            />
            Prestations de services (RSI-BNC) : 25,5 %.
            <br />
            <input
              className=""
              type="radio"
              name="charge"
              value="0.2558"
              checked={charge === 0.2558}
              onChange={handleInputChange}
            />
            Prestations de services ou artisanales (RSI-BIC) : 25,58 %.
          </div>
        </div>
      </form>
      <h3 className="p-0 m-0"> Bénéfice : {benefice}</h3>
      <h3>Charge à payer : {charge_a_payer}</h3>
    </section>
  );
}

export default calculatrice_benefice_autoentrepreneur;
