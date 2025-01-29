import React from "react";

export default function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-xl md:text-4xl font-semibold uppercase drop-shadow-md m-4 text-gray-700 bg-gray-200/80 w-[60%] text-center self-end md:self-start md:ml-[250px]">
      {children}
    </h1>
  );
}
