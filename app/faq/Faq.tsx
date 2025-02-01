"use client";
import React, { useState } from "react";

export default function Faq({
  item,
}: {
  item: { question: JSX.Element; answer: JSX.Element };
}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section
      className="flex flex-col mb-4"
      onClick={() => setIsActive(!isActive)}
    >
      <>
        <div
          className={`flex border-gray-700 border-[1px] text-gray-700 p-2 cursor-pointer items-center justify-center content-between hover:bg-blue hover:text-white hover:border-white ${
            isActive ? "bg-blue text-white" : ""
          } transition ease-in-out`}
        >
          <span className="font-semibold">{item.question}</span>
          <span className="text-xl ml-2	">{isActive ? "-" : "+"}</span>
        </div>
        <div className="flex ml-2">
          {isActive ? (
            <span className="text-xl ml-2 p-4">{item.answer}</span>
          ) : (
            ""
          )}
        </div>
      </>
    </section>
  );
}
