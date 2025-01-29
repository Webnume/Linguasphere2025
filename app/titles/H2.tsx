import React from "react";

export default function H2({
  children,
}: {
  children: React.ReactNode | string;
}) {
  return (
    <h2
      className="md:text-xl bg-green text-white p-2 w-fit rounded-t-xl uppercase border-[1px] border-gray-200 z-1 border-b-0"
    >
      {children}
    </h2>
  );
}
