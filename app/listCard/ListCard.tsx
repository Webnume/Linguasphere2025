"use client";
import React, { useState } from "react";
import H2 from "../titles/H2";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";

interface Service {
  name: string;
  image: { src: string; alt: string };
  linkHref?: string;
  predescription?: JSX.Element | string;
  description?: JSX.Element | string;
  details: JSX.Element;
  page?: JSX.Element;
}

export default function ListCard({
  service,
  detailPage,
}: {
  service: Service;
  detailPage?: boolean;
}) {
  const [isActive, setIsActive] = useState(false);
  const image = (
    <Image
      src={service.image.src}
      alt={service.image.alt}
      width={detailPage || isActive ? 360 : 232}
      height={detailPage || isActive ? 360 : 232}
      className={`mr-8 sm:float-left rounded-xl 
            ${
              detailPage || isActive
                ? "md:max-w-[360px] md:max-h-[360px]"
                : "max-w-[232px] max-h-[232px]"
            }
             `}
    />
  );

  return (
    <section
      className={`flex flex-col items-center sm:flex-row mb-20 
    ${detailPage ? "" : "w-[47%]"}
    `}
    >
      <div className="flex flex-col w-full" id={service.name}>
        {!detailPage ? (
          <Link href={service.linkHref ? service.linkHref : `#${service.name}`}>
            <H2>{service.name}</H2>
          </Link>
        ) : (
          <H2>{service.name}</H2>
        )}
        <div className="shadow-md shadow-gray-700 p-5 ">
          {/* {!detailPage ? (
            <Link
              href={service.linkHref ? service.linkHref : `#${service.name}`}
            >
              {image}
            </Link>
          ) : (
            image
          )} */}
          <section className="pt-2 sm:pt-0 sm:pl-5">
            {service.predescription ? (
              <>
                {service.predescription}
                <br />
                <br />
              </>
            ) : (
              <></>
            )}
            {service.description ? (
              <>
                {service.description} <br />
              </>
            ) : (
              <></>
            )}
            {service.description}

            {detailPage || isActive ? (
              <>
                {" "}
                {service.details} <br />{" "}
              </>
            ) : (
              <></>
            )}

            {service.page ? service.page : <></>}
          </section>
        </div>
        <section className="flex justify-end items-start text-base text-white list-image-none">
          {service.details && !detailPage ? (
            <span
              className="flex group border-gray-700 border-[1px] text-black p-2 rounded-b-xl cursor-pointer items-center justify-center"
              onClick={() => setIsActive(!isActive)}
            >
              <Link className="flex ml-2" href={`#${service.name}`}>
                {isActive ? "RÉDUIRE" : "EN VOIR PLUS"}
                {isActive ? (
                  <span className="text-xl ml-2 group-hover:animate-bounce origin-bottom	">
                    <IoIosArrowDropup />
                  </span>
                ) : (
                  <span className="text-xl ml-2 group-hover:animate-bounce">
                    <IoIosArrowDropdown />
                  </span>
                )}
              </Link>
            </span>
          ) : (
            ""
          )}
          <Link
            className="bg-orange text-white hover:bg-blue p-2 ml-5 rounded-b-xl cursor-pointer transition ease-in-out duration-500"
            href="/contact-traduction-juridique"
            rel="noreferrer"
          >
            CONTACTEZ-NOUS
          </Link>
        </section>
      </div>
    </section>
  );
}
