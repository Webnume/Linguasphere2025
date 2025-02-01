"use client";
import React, { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function ScrollToTop() {
  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-0 right-0 text-orange bg-transparent rounded-lg p-2 mr-6 mb-4 z-50 items-center text-xs flex gap-2 ${
        isVisible ? "opacity-100" : "opacity-0"
      }  transition ease-in-out duration-300`}
      onClick={scrollToTop}
    >
      <FaArrowAltCircleUp className="inline-block h-10 w-10" />
    </button>
  );
}
