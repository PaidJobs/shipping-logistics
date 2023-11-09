import React from "react";

function DashBoard() {
  return (
    <main>
        {/**section one..................................................... */}
      <section className="w-full h-full">
        <div className="w-full lg:w-[80%] mx-auto block sm:flex justify-between py-2 p-2 sm:p-4">
          <div className="flex gap-x-1">
            <img src=" /assets/logo.png" alt="" />
            <div className="">
              <p className="text-lg">UPs Global Fleet</p>
              <p className=" text-xs">Courier Service</p>
            </div>
          </div>
          <div className="block sm:flex gap-x-2 w-full sm:w-[50%]">
            <input
              type="text"
              className="w-full rounded-md outline-none border-2 border-[#848185] pl-2 h-12"
              placeholder="Track Shipment"
            />
            <button className="bg-[#FFB607] px-16 h-12 rounded-md text-white mt-4 sm:mt-0">
              Track
            </button>
          </div>
        </div>
      </section>
        {/**section one..................................................... */}
        {/**section two..................................................... */}
      <section className="w-full min-h-screen">
        <div className="w-full lg:w-[80%] mx-auto p-2">
          <div className="pt-10">
            <img
              src="/assets/containers.png"
              className="h-[280px] w-full object-cover brightness-75 relative rounded-lg"
              alt=""
            />
            <div className="absolute top-[40%] sm:top-[20%]">
              <p className="text-5xl self-center pl-8 text-white ">
                Track your <br /> shipment with us
              </p>
            </div>
            <div className="block sm:flex justify-evenly pt-[6%] pb-[6%]">
                <div className="text-center">
                    <img src="/assets/oops.png" className="w-full sm:h-[260px]" alt="" />
                    <p>No record of shipments.</p>
                    <p>Input tracking number to track shipment.</p>
                </div>
              <div className=" sm:self-end pb-8">
                <img
                  src="/assets/whatsapplogo.png"
                  className=" h-16 w-16"
                  alt=""
                />
                <p>
                  Chat With Us <br />
                  For enquries or complaint
                </p>
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
