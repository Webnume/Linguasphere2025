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
            <IoMicCircleSharp size="3.5rem" className="text-blue" />
          )}
          {withIcon === "FaLinesLeaning " && (
            <FaLinesLeaning size="2.5rem" className="text-blue" />
          )}
          {withIcon === "MdDone" && (
            <MdDone size="3rem" className="text-blue" />
          )}
          {withIcon === "FaGraduationCap" && (
            <FaGraduationCap size="3rem" className="text-blue" />
          )}
          {withIcon === "FaDiscourse" && (
            <FaDiscourse size="3.5rem" className="text-blue" />
          )}
          {withIcon === "BsArrowCounterclockwise" && (
            <BsArrowCounterclockwise size="3.2rem" className="text-blue" />
          )}
          {withIcon === "FaCommentMedical" && (
            <FaCommentMedical size="2.8rem" className="text-blue" />
          )}
          {withIcon === "FaGavel" && (
            <FaGavel size="2.8rem" className="text-blue" />
          )}
          <h2 className="md:text-xl text-blue p-2 w-fit  border-orange">
            {children}
          </h2>
        </div>
      ) : (
        <h2 className="md:text-xl bg-blue text-white p-2 w-fit rounded-t-xl  border-[1px] border-gray-200 z-1 border-b-0">
          {children}
        </h2>
      )}
    </>
  );
}
