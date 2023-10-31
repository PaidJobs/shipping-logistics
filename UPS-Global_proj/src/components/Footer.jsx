import React from "react";

function Footer() {
  return (
    <div className="w-full min-h-min pt-[2%] pb-[2%] bg-[#222B5D]">
      <div className="w-[80%] mx-auto flex justify-between text-white">
        <div className="flex">
          <img
            src="/assets/airplane-square.png"
            className=" object-center h-12 w-12"
            alt=""
          />
          <ul className=" pl-2">
            <li className="">UPs Global Fleet</li>
            <li className=" text-xs">Courier Service</li>
          </ul>
        </div>
        <div className="max-w-md">
          <h2>Address</h2>
          <p>
            No. 256, Sec. 7, Zhongshan Rd.,
            <br />
            Zhonghe Dist., New Taipei City
            <br /> 235035, Taiwan (R.O.C.)
          </p>
        </div>
        <div className="max-w-md">
          <h2>Contact Us</h2>
          <p>Info.upsglobalfleetcourier@gmail.com</p>
          <p>+888 1234 1234 1234</p>
        </div>
      </div>
      <div className="text-center border-t-2 mt-7 text-white">
        <p className="pt-6">Copyright UPs Global Fleet Courier Service</p>
      </div>
    </div>
  );
}

export default Footer;
