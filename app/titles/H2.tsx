import React from "react";
import { IoMicCircleSharp } from "react-icons/io5";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { FaGraduationCap, FaDiscourse, FaCommentMedical, FaLinesLeaning, FaGavel  } from "react-icons/fa6";


export default function H2({
  children,
  withIcon,
}: {
  children: React.ReactNode | string;
  withIcon?: string;
}) {
  return (
    <>
      {withIcon ? (
        <div className="flex flex-row items-center">
          {withIcon === "IoMicCircleSharp" && (
            <IoMicCircleSharp size="4.5rem" color="#90bd0e" />
          )}
          {withIcon === "FaLinesLeaning " && (
            <FaLinesLeaning size="4.5rem" color="#90bd0e" />
          )}
          {withIcon === "MdDone" && <MdDone size="4.5rem" color="#90bd0e" />}
          {withIcon === "FaGraduationCap" && (
            <FaGraduationCap size="4.5rem" color="#90bd0e" />
          )}
          {withIcon === "FaDiscourse" && (
            <FaDiscourse size="4.5rem" color="#90bd0e" />
          )}
          {withIcon === "BsArrowCounterclockwise" && (
            <BsArrowCounterclockwise size="4.5rem" color="#90bd0e" />
          )}
          {withIcon === "FaCommentMedical" && (
            <FaCommentMedical size="4.5rem" color="#90bd0e" />
          )}
          {withIcon === "FaGavel" && (
            <FaGavel  size="4.5rem" color="#90bd0e" />
          )}
          <h2 className="md:text-xl text-green p-2 w-fit  border-gray-200">
            {children}
          </h2>
        </div>
      ) : (
        <h2 className="md:text-xl bg-green text-white p-2 w-fit rounded-t-xl uppercase border-[1px] border-gray-200 z-1 border-b-0">
          {children}
        </h2>
      )}
    </>
  );
}
