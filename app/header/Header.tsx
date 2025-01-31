"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { contentData } from "../data/contentData";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <section
      className={`flex justify-around z-50 items-center w-full h-20 text-gray-700 bg-white nav py-20 ${
        visible
          ? " flex justify-between items-center sticky opacity-100 top-0 h-40"
          : ""
      }`}
    >
      <nav
        className={`bg-white z-50 w-full max-w-[1440px] opacity-0 h-30 ${
          visible
            ? " flex justify-between items-center sticky opacity-100 top-0 h-40"
            : ""
        }`}
      >
        <Link
          className="link-underline link-underline-black"
          href="/"
          rel="noreferrer"
        >
          <Image
            src="/images/logo-linguasphere-255px.png"
            alt="logo"
            width={255}
            height={101}
          />
        </Link>

        <ul className="hidden lg:flex items-center	z-10">
          {contentData?.map(({ categoryID, linkHref, linkNameMainMenu }) => (
            <li
              key={categoryID}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-green duration-200 link-underline"
            >
              <Link href={linkHref}>{linkNameMainMenu}</Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-50 text-gray-500 lg:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-gray-700 bg-gray-200 z-40">
            {contentData?.map(({ categoryID, linkHref, linkNameMainMenu }) => (
              <Link
                key={categoryID}
                onClick={() => setNav(!nav)}
                href={linkHref}
              >
                <li className="px-4 cursor-pointer capitalize py-6 text-2xl">
                  {linkNameMainMenu}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </nav>
    </section>
  );
};

export default Header;
