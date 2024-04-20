import React from "react";
import SearchBox from "../../components/search";

function DashBoard() {
  return (
    <main>
      {/**section one..................................................... */}
      <section className="w-full h-full">
        <div className="w-full lg:w-[80%] mx-auto block sm:flex justify-between py-2 p-2 sm:p-4">
          <div className="flex gap-x-1">
            <img src=" /assets/logo.png" className="h-12 w-12 object-center" alt="" />
            <div className="w-full">
              <p className="text-lg">Global Fleet</p>
              <p className=" text-xs">Courier Service</p>
            </div>
          </div>
          <div className="flex gap-x-2 w-full sm:w-[50%]">
            <SearchBox/>
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
                <p className="text-2xl sm:text-4xl text-start pl-4 text-white max-w-[263px]">
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
