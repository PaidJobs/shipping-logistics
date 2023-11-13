import React from "react";
import TableComponent from "../components/Table";




function Dashboard() {
  return (
    <main>
        {/**section one------------------------------------------------- */}
      <section className="w-full h-full">
        <div className="w-full lg:w-[80%] mx-auto block sm:flex justify-between py-2 p-2 sm:p-4">
          <div className="flex gap-x-1">
            <img src=" /assets/logo.png" alt="" />
            <div className="">
              <p className="text-lg">UPs Global Fleet</p>
              <p className=" text-xs">Courier Service</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen">
        <div className="w-full lg:w-[70%] mx-auto p-2">
          <div className="pt-10">
            <img
              src="/assets/containers.png"
              className="h-[280px] w-full object-cover brightness-75 relative rounded-lg"
              alt=""
            />
            <div className="absolute top-[40%] sm:top-[20%]">
              <p className="text-5xl self-center pl-8 text-white ">
                Generate <br />Tracking Number
              </p>
              <button className=" bg-[#ED7D1A] px-10 py-2 text-white ml-10 mt-6 text-xl rounded-lg">Generate</button>
            </div>
          </div>
        </div>
        <div className=" w-[70%] mx-auto bg-[#848185]/30">
            <p className=" text-lg font-semibold pb-4">Shipment Statistics</p>
            <TableComponent/>
        </div>
      </section>
      {/**section one------------------------------------------------- */}
    </main>
  );
}

export default Dashboard;
