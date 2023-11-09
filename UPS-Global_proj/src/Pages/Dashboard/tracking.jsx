import React from "react";
import Footer from "../../components/Footer";
import Stepper from "../../components/stepper/stepper";

function Tracking() {
  const cargoDetails = [
    {
      id: 1,
      discription: "Package Type",
      content: "Container Cargo",
    },
    {
      id: 2,
      discription: "Shipping Date",
      content: "11/11/2023",
    },
    {
      id: 3,
      discription: "Delivery Date",
      content: "Pending",
    },
    {
      id: 4,
      discription: "Delievery Method",
      content: "Air Shipping",
    },
  ];

  const cargoContent = [
    {
      id: 1,
      discription: "Gold",
      mass: 5,
    },
    {
      id: 2,
      discription: "Silver",
      mass: 25,
    },
    {
      id: 3,
      discription: "Gold",
      mass: 5,
    },
    {
      id: 4,
      discription: "Gold",
      mass: 5,
    },
    {
      id: 5,
      discription: "Gold",
      mass: 5,
    },
    {
      id: 6,
      discription: "Gold",
      mass: 5,
    },
  ];

  const customerDetails = [
    {
      id: 1,
      discription: "Recivers name",
      corres: "Albert Mandoa",
    },
    {
      id: 2,
      discription: "Receivers contact",
      corres: "+123456789",
    },
    {
      id: 3,
      discription: "Recievers email",
      corres: "Albert123@gmail.com",
    },
    {
      id: 4,
      discription: "Delivery address",
      corres: "London",
    },
  ];
  return (
    <main>
      <section className="w-full h-full">
        <div className="w-full lg:w-[80%] mx-auto sm:flex justify-between py-2 p-4 mt-2">
          <div className="flex gap-x-1">
            <img src=" /assets/logo.png" alt="" />
            <div className="">
              <p className="text-lg">UPs Global Fleet</p>
              <p className=" text-xs">Courier Service</p>
            </div>
          </div>
          <div className="block sm:flex gap-x-2 sm:w-[50%] w-full">
            <input
              type="text"
              className="w-full rounded-md outline-none border-2 border-[#848185] pl-2 h-12 mt-2 sm:mt-0"
              placeholder="Track Shipment"
            />
            <button className="bg-[#FFB607] px-16 h-12 rounded-md text-white mt-4 md sm:mt-0">
              Track
            </button>
          </div>
        </div>
      </section>
      {/**stepper component  */}
      <div className=" pt-[2%] pb-[2%] hidden sm:block">
        <Stepper/>
      </div>
      {/**stepper component  */}
      <section className="w-full h-full">
        <div className="w-full lg:w-[80%] mx-auto grid center-glass gap-4">
          <div className=" ">
            <div className=" p-4 bg-[#848185]/30">
              <p className=" pb-3">Customer Details</p>
              <div className=" rounded-lg bg-white">
                {customerDetails.map((item) => (
                    <div key={item.id} className="p-2">
                    <h2 className="">{item.discription}:</h2>
                    <p className="pb-2">{item.corres}</p>
                    </div>
                ))}
              </div>
            </div>
            <div className="p-10 hidden sm:block">
              <img src="/assets/whatsapplogo.png" alt="" />
              <p>
                Chat with us <br />
                for enquries or complains
              </p>
            </div>
          </div>
          <div className="">
            <div className="p-4 bg-[#848185]/30 pb-7">
              <p className=" pb-3">Cargo Details</p>
              <div className="bg-white p-2 rounded-lg">
                {cargoDetails.map((items) => (
                  <div key={items.id} className="flex justify-between w-full">
                    <p>{items.discription}:</p>
                    <p className="pb-2">{items.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <div className="p-4 bg-[#848185]/30">
                <p className=" pb-3">Cargo Content</p>
                <div className=" bg-white p-2 rounded-lg">
                  {cargoContent.map((items) => (
                    <div key={items.id} className="flex justify-between w-full">
                      <p>
                        {items.id}. {items.discription}
                      </p>
                      <p>{items.mass}kg</p>
                    </div>
                  ))}
                  <div className=" flex justify-between">
                    <p>Total weight</p>
                    <p>50kg</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex sm:justify-end justify-center pb-5">
              <button className=" bg-[#ED7D1A] text-lg py-2 px-28 rounded-md mt-2 mr-3">
                Back
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}

export default Tracking;
