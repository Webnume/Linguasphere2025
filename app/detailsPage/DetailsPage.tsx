import React from "react";
import { contentData } from "../data/contentData";
import Banner from "../banner/Banner";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import ListCard from "../listCard/ListCard";

export default function detailsPage({
  currentCategory,
  currentService,
  NoReturnButton,
}: {
  currentCategory: string;
  currentService: string;
  NoReturnButton?: boolean;
}) {
  const category = contentData.find(
    (category) => category.name === currentCategory
  );

  const service = category?.content?.find(
    (service) => service.name === currentService
  );

  const isCategoryWithNoSubCategory = currentCategory === currentService;

  const returnButtonLink = category?.linkHref + "#" + service?.name;

  return (
    <>
      {service && <Banner title={service.name} />}
      {!isCategoryWithNoSubCategory && !NoReturnButton && returnButtonLink ? (
        <Link
          href={returnButtonLink}
          className="flex items-center self-start bg-gray-200 p-1 rounded-md m-6 border-green border-[1px] cursor-pointer"
          id="returnButton"
        >
          <MdArrowBackIosNew />
          {"Retour à la page précédente"}
        </Link>
      ) : (
        ""
      )}
      <article className="md:p-6 p-2 max-w-[1440px]">
        {service && <ListCard service={service} detailPage />}
      </article>
    </>
  );
}
