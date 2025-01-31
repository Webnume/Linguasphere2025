import React from "react";
import { IoMicCircleSharp } from "react-icons/io5";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import {
  FaGraduationCap,
  FaDiscourse,
  FaCommentMedical,
  FaLinesLeaning,
  FaGavel,
} from "react-icons/fa6";

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
            <IoMicCircleSharp size="4.5rem" className="text-blue" />
          )}
          {withIcon === "FaLinesLeaning " && (
            <FaLinesLeaning size="4.5rem" className="text-blue" />
          )}
          {withIcon === "MdDone" && (
            <MdDone size="4.5rem" className="text-blue" />
          )}
          {withIcon === "FaGraduationCap" && (
            <FaGraduationCap size="4.5rem" className="text-blue" />
          )}
          {withIcon === "FaDiscourse" && (
            <FaDiscourse size="4.5rem" className="text-blue" />
          )}
          {withIcon === "BsArrowCounterclockwise" && (
            <BsArrowCounterclockwise size="4.5rem" className="text-blue" />
          )}
          {withIcon === "FaCommentMedical" && (
            <FaCommentMedical size="4.5rem" className="text-blue" />
          )}
          {withIcon === "FaGavel" && (
            <FaGavel size="4.5rem" className="text-blue" />
          )}          
          <h2 className="md:text-xl text-orange p-2 w-fit  border-gray-200">
            {children}
          </h2>
        </div>
      ) : (
        <h2 className="md:text-xl bg-orange text-white p-2 w-fit rounded-t-xl uppercase border-[1px] border-gray-200 z-1 border-b-0">
          {children}
        </h2>
      )}
    </>
  );
}
