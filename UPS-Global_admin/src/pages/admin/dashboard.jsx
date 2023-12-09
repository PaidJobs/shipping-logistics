import React from "react";
import TableComponent from "../components/Table";
import { NavLink } from "react-router-dom";

function Dashboard() {
  return (
    <main>
      {/**section one------------------------------------------------- */}
      <section className="w-full h-full">
        <div className="w-full lg:w-[80%] mx-auto block sm:flex justify-between py-2 p-2 sm:p-4">
          <div className="flex gap-x-1 max-w-sm">
            <img src=" /assets/logo.png" alt="" />
            <div className="w-full">
              <p className="text-lg">UPs Global Fleet</p>
              <p className=" text-xs">Courier Service</p>
            </div>
          </div>
          <img
            src="/assets/user.png"
            className="w-12 h-12 hidden sm:inline"
            alt=""
          />
        </div>
      </section>
      <section className="w-full min-h-screen">
        <div className="w-full lg:w-[70%] mx-auto p-2">
          <div className="pt-4 relative">
            <img
              src="/assets/containers.png"
              className="h-[280px] w-full object-cover brightness-75 relative rounded-lg"
              alt=""
            />
            <div className="absolute top-[20%] pl-5">
              <p className="text-3xl sm:text-4xl self-center text-white ">
                Generate <br />
                Tracking Number
              </p>
              <NavLink to={"/tracking"}>
                <button className="bg-[#ED7D1A] px-10 py-2 text-white mt-2 sm:mt-6 text-xl rounded-lg">
                  Generate
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[70%] mx-auto bg-[#848185]/10 p-4 mt-5">
          <p className=" text-lg font-semibold pb-4">Shipment Statistics</p>
          <TableComponent />
        </div>
      </section>
      {/**section one------------------------------------------------- */}
    </main>
  );
}

export default Dashboard;
