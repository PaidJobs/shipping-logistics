import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Navlinks from "./Navlinks";
import { NavLink } from "react-router-dom";

function Success() {
  return (
    <main>
      <Navlinks />
      <section className="w-full h-full">
        <div className="w-full sm:w-[80%] mx-auto flex justify-center pt-[8%] pb-[8%] 2xl:max-w-7xl">
          <div className="text-center p-4 mx-auto">
            <FaCheckCircle color="#ED7D1A" size={250} className="mx-auto" />
            <h2 className="pb-3 pt-4 text-2xl font-bold text-[#ED7D1A]">
              Thank You
            </h2>
            <p className="pb-4 text-base">Message sent Successfully</p>
            <NavLink to={"/"}>
                <button className="px-28 py-2 bg-[#ED7D1A] rounded-lg text-white">
                Back
                </button>
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Success;
