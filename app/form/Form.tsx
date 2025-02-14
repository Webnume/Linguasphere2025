"use client";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { useEffect, useRef, useState } from "react";

export default function Form() {
  const [message, setMessage] = useState<string>("");

  type Inputs = {
    statut: string;
    societe: string;
    name: string;
    surname: string;
    email: string;
    phone: string;
    message: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    unregister,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      statut: "",
      societe: "",
      name: "",
      surname: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  // const form = document.getElementById("contact_form") as HTMLFormElement;
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formatedData = new FormData(formRef.current as HTMLFormElement);

    const response = await fetch("/api/contact/", {
      method: "POST",
      body: formatedData,
    });
    setMessage(
      "Votre message a bien été envoyé. Nous vous recontacterons dans les plus brefs délais. Merci !"
    );
    const formData = await response.text();
    // reset();
  };

  // console.log(watch("societe")); // watch input value by passing the name of it
  const isNotParticulier =
    watch("statut") !== "" &&
    watch("statut") !== undefined &&
    watch("statut") !== "particulier";

  useEffect(() => {
    if (watch("statut") === "particulier") {
      unregister("societe");
    }
  }, [watch("statut"), unregister]);

  return (
    <>
      {message ? (
        <>
          <p className="text-white text-xl border-blue p-2 bg-blue">
            {message}{" "}
          </p>
          <p>
            Un oubli ?{" "}
            <span
              className="cursor-pointer text-orange"
              onClick={() => setMessage("")}
            >
              Modifier votre message
            </span>{" "}
          </p>
        </>
      ) : (
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
          ref={formRef}
        >
          <section className="flex flex-col lg:flex-row gap-4 mb-8">
            <fieldset className="p-2  border border-blue m-2">
              <legend className="text-center px-2 text-blue text-xl">
                Vos coordonnées
              </legend>
              <div className="flex items-center justify-center gap-4 flex-col max-w-[1440px] p-4">
                <div className="w-fit">
                  <label>
                    Vous êtes *
                    <div>
                      <input
                        className="form-check-input"
                        type="radio"
                        {...register("statut", {
                          required: "Choisissez une réponse",
                        })}
                        id="inlineRadio1"
                        value="particulier"
                      />
                      <label htmlFor="inlineRadio1" className="font-normal m-2">
                        Un particulier
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        {...register("statut", {
                          required: "Choisissez une réponse",
                        })}
                        id="inlineRadio2"
                        value="entreprise"
                      />
                      <label className="font-normal m-2" htmlFor="inlineRadio2">
                        Une entreprise
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        {...register("statut", {
                          required: "Choisissez une réponse",
                        })}
                        id="inlineRadio3"
                        value="association"
                      />
                      <label className="font-normal m-2" htmlFor="inlineRadio3">
                        Une association
                      </label>
                    </div>
                  </label>
                  <p className="text-orange">{errors.statut?.message}</p>
                </div>

                {isNotParticulier && (
                  <div className={`flex flex-col w-full`}>
                    <label htmlFor="form_societe">
                      Nom de l'{watch("statut")} *
                    </label>
                    <input
                      id="form_societe"
                      type="text"
                      {...register("societe", {
                        required: `Nom de l'${watch("statut")}`,
                      })}
                      className="form-control"
                      placeholder={`Mon ${watch("statut")} *`}
                    />
                  </div>
                )}
                <div className="flex flex-col w-full lg:w-full">
                  <label htmlFor="form_name">Votre nom *</label>
                  <input
                    id="form_name"
                    type="text"
                    {...register("name", { required: "Nom obligatoire." })}
                    className="form-control"
                    placeholder="ex : Dupont *"
                  />
                  <p className="text-orange">{errors.name?.message}</p>
                </div>

                <div className="flex flex-col w-full lg:w-full">
                  <label htmlFor="form_surname">Votre prénom *</label>
                  <input
                    id="form_surname"
                    type="text"
                    {...register("surname", {
                      required: "Prénom obligatoire.",
                    })}
                    className="form-control"
                    placeholder="ex : Camille *"
                  />
                  <p className="text-orange">{errors.surname?.message}</p>
                </div>

                <div className="flex flex-col w-full lg:w-full">
                  <label htmlFor="form_email">E-mail *</label>
                  <input
                    id="form_email"
                    type="email"
                    {...register("email", {
                      required: "Email obligatoire.",
                      pattern:
                        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/,
                    })}
                    className="form-control"
                    placeholder="ex : monmail@gmail.com * "
                  />
                  <p className="text-orange">{errors.email?.message}</p>
                </div>

                <div className="flex flex-col w-full lg:w-full">
                  <label htmlFor="form_phone">Téléphone *</label>
                  <input
                    id="form_phone"
                    type="tel"
                    {...register("phone", {
                      required: "Téléphone obligatoire.",
                      minLength: 10,
                      maxLength: 14,
                    })}
                    className="form-control"
                    placeholder="ex : 0411934472"
                  />
                  <p className="text-orange">{errors.phone?.message}</p>
                </div>
              </div>
            </fieldset>
            <div className="flex flex-col w-full max-w-[900px] p-2 mb-8 ">
              <label htmlFor="form_message">Message *</label>
              <textarea
                id="form_message"
                {...register("message", { required: "Message obligatoire." })}
                className="border-blue  min-h-[420px]"
                placeholder="Indiquez votre demande *"
                rows={10}
              ></textarea>
              <p className="text-orange">{errors.message?.message}</p>
            </div>
          </section>

          <section className="flex flex-col items-center">
            <input
              type="submit"
              className="p-4 bg-gray-700 hover:bg-orange text-white font-semibold text-lg cursor-pointer transition ease-in-out duration-500"
              value="Envoyez votre message"
            />

            <p className="text-orange mt-4">
              <strong>*</strong> Champs obligatoires.
            </p>
          </section>

          {/* <div className="flex flex-col w-full lg:w-full">
        <div
          className="g-recaptcha"
          data-sitekey="6LfbBnoUAAAAAF6SsDgMtl73_5lzZfrqLYc5-iAo"
          data-callback="verifyRecaptchaCallback"
          data-expired-callback="expiredRecaptchaCallback"
        ></div>
        <input
          className="form-control d-none"
          data-recaptcha="true"
          required
          data-error="Êtes-vous un robot ?"
        />
        <p className="text-orange">{errors.name?.message}</p>
      </div> */}
        </form>
      )}
    </>
  );
}
