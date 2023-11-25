import React from "react";

function DashBoard() {
  return (
    <main>
      {/**section one..................................................... */}
      <section className="w-full h-full">
        <div className="w-full lg:w-[80%] mx-auto block sm:flex justify-between py-2 p-2 sm:p-4">
          <div className="flex gap-x-1">
            <img src=" /assets/logo.png" alt="" />
            <div className="w-full">
              <p className="text-lg">UPs Global Fleet</p>
              <p className=" text-xs">Courier Service</p>
            </div>
          </div>
          <div className="flex gap-x-2 w-full sm:w-[50%] pt-2">
            <input
              type="text"
              className="w-full rounded-md outline-none border-2 border-[#848185] pl-2 h-12"
              placeholder="Track Shipment"
            />
            <button className="bg-[#ED7D1A] px-6 sm:px-16 h-12 rounded-md text-white">
              Track
            </button>
          </div>
        </div>
      </section>
      {/**section one..................................................... */}
      {/**section two..................................................... */}
      <section className="w-full min-h-screen">
        <div className="w-full lg:w-[80%] mx-auto p-2 2xl:max-w-7xl">
          <div className="pt-4">
            <div className="relative">
              <img
                src="/assets/containers.png"
                className="h-[280px] w-full object-cover brightness-50 rounded-lg"
                alt=""
              />
              <div className="absolute top-[30%]">
                <p className="text-2xl sm:text-4xl sm:text-start text-center pl-4 text-white max-w-xs">
                  Track your shipment with us
                </p>
              </div>
            </div>
            <div className="block sm:flex justify-center pt-[6%] pb-[6%]">
              <div className="text-center">
                <img
                  src="/assets/oops.png"
                  className="w-full sm:h-[260px]"
                  alt=""
                />
                <p>No record of shipments.</p>
                <p>Input tracking number to track shipment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/**section two..................................................... */}
    </main>
  );
}

export default DashBoard;
