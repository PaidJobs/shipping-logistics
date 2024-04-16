import React from "react";

function Footer() {
  return (
    <div className="w-full min-h-min pt-[2%] pb-[2%] bg-[#222B5D]">
      <div className="w-full md:w-[80%] mx-auto block sm:flex sm:justify-between text-white pt-10 pb-10 xl:max-w-6xl">
        <div className="flex justify-center sm:justify-normal w-full sm:max-w-md">
          <img
            src="/assets/logo.png"
            className=" object-center h-12 w-12"
            alt=""
          />
          <ul className=" pl-2">
            <li className="">Global Fleet</li>
            <li className=" text-xs">Courier Service</li>
          </ul>
        </div>
        <div className="w-full sm:max-w-md pt-4 sm:pt-0 grid place-content-center sm:place-content-start text-center sm:text-start">
          <h2>Address</h2>
          <p>
            Pacific Place, Jalan PJU 1a/4, <br /> Ara Damansara, 47301 Petaling
            Jaya, <br /> Selangor, Malaysia
          </p>
        </div>
        <div className="w-full p-2 sm:p-0 sm:max-w-md pt-4 sm:pt-0 grid place-content-center sm:place-content-start text-center sm:text-start">
          <h2>Contact Us</h2>
          <p className="break-all">info.globalfleetcourierservice@gmail.com</p>
          <p>+601 4949 9622</p>
        </div>
      </div>
      <div className="text-center border-t-2 mt-7 text-white">
        <p className="pt-6 block sm:flex justify-center">
          Copyright&copy;Global Fleet Courier Service
        </p>
      </div>
    </div>
  );
}

export default Footer;
