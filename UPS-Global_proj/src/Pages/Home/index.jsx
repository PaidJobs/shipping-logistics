import React from "react";
import cards from "../../lib/cardsDetails";
import Navlinks from "../../components/Navlinks";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [userValue, setUserValue] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => {
    setUserValue(e.target.value);
  };

  const handleButton = () => {
    // Check the input field's value and set the flag accordingly
    if (userValue.trim() === "") {
      setError("Please input tracking number.");
    } else {
      setError(""); // Clear any previous error messages
      // Check the input field's value and navigate accordingly
    //   if (userValue === "siri") {
    //     navigate("/tracking");
    //   } else {
        navigate("/tracking", { state: { trackingNumber: userValue } });
      //}
    }
  };

  return (
    <main>
      <Navlinks />
      {/** hero section.................................................................... */}
      <section className="h-full md:min-h-screen w-full relative">
        <img
          src="/assets/hero-bg.jpg"
          className="object-top object-cover h-full w-full absolute brightness-50"
          alt=""
        />
        <div className="relative pt-14 pb-14 sm:pb-0 sm:pt-0">
          <div className="w-full sm:max-w-3xl min-h-full p-2 text-white sm:pl-[7%] sm:pt-[10%]">
            <h1 className="text-4xl sm:text-7xl">
              Reliable Freight Solutions For Your Shipments
            </h1>
            <p className="max-w-md text-[20px] pt-2 pb-4">
              We are your strategic partner, helping you achieve your business
              goals and bringing your goods to your doorsteps.
            </p>
            <button className="text-white rounded-md py-2 px-14 bg-yellow-400">
              Track Shipment
            </button>
          </div>
        </div>
      </section>

      {/**second section starts .................................................................... */}
      <section className="h-full w-full">
        <div className="w-full lg:w-[80%] block lg:flex justify-evenly mx-auto pt-[3%] pb-[3%] p-2">
          <div className="w-full lg:max-w-lg self-center">
            <h2 className="text-3xl sm:text-5xl pb-4">
              Delivering the best globallogistics solutions.
            </h2>
            <p className="text-para pb-3">
              We make logistics much easier and straightforward. Combining good
              service and technology makes everything easier
            </p>
          </div>
          <img
            src="/assets/stacked-containers.png"
            className="w-full h-[320px] object-top object-cover"
            alt=""
          />
        </div>
      </section>
      {/**second section ends .................................................................... */}

      {/**third section starts .................................................................... */}
      <section className="h-full w-full bg-[#F5F4F44A]">
        <div className="w-full lg:w-[85%] mx-auto pt-[3%] pb-[4%]">
          <h2 className="text-center text-para pt-4">
            What makes us different
          </h2>
          <div className="block self-center sm:flex justify-between gap-x-4 p-2 pt-[4%]">
            {cards.map((item) => (
              <div
                key={item.id}
                className="w-full md:max-w-sm text-center p-4 rounded-md bg-[#FFFFFF] mb-3"
              >
                <img src={item.icon} alt="" className="pt-4 pb-4 mx-auto" />
                <h3 className=" text-para pt-2 pb-2">{item.heading}</h3>
                <p className=" text-para pt-2 pb-2">{item.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/**third section ends .................................................................... */}

      {/**fourth section track field starts .................................................................... */}
      <section className="h-full w-full">
        <div className="w-full sm:w-[80%] mx-auto flex justify-center pt-[3%] pb-0 sm:pb-[5%]">
          <div className="w-full lg:w-[65%] p-2">
            <h3 className="text-center text-[30px] pb-10 pt-8">
              Need to track your shipment with us?
            </h3>
            <div className="block sm:flex gap-x-6">
              <input
                type="text"
                value={userValue}
                onChange={handleInput}
                className="w-full rounded-md outline-none border-2 border-[#848185] pl-2 h-12"
                placeholder="Track Shipment"
              />
              <button
                onClick={handleButton}
                className="bg-[#FFB607] px-16 py-2 rounded-md text-white mt-4 sm:mt-0"
              >
                Track
              </button>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      </section>
      {/**fourth section track field ends.................................................................... */}
      <Footer />
    </main>
  );
}

export default Home;
