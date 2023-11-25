import React from "react";
import cards from "../../lib/cardsDetails";
import Navlinks from "../../components/Navlinks";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataBase } from "../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

function Home() {
  const [userValue, setUserValue] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const newValue = e.target.value;
    setUserValue(newValue);
    onValueChange(newValue);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const docRef = doc(dataBase, "products", userValue.trim());
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        navigate(`/tracking/${userValue}`);
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("Error searching document:", error);
    }
  };

  return (
    <main>
      <Navlinks />
      {/** hero section.................................................................... */}
      <section className="h-full w-full">
        <div className="2xl:max-w-7xl relative w-full mx-auto max-[520px]:min-h-screen">
        <div className="">
          <img
            src="/assets/hero-bg.jpg"
            className="object-top object-cover h-full w-full absolute brightness-50"
            alt=""
          />
          <div className="relative xl:max-w-6xl ">
            <div className="w-full sm:max-w-3xl flex items-center min-h-screen sm:h-full pl-6 text-white sm:pl-[7%] sm:pt-[4%]">
              <div>
                <h1 className="text-4xl tracking-normal leading-normal sm:text-7xl font-bold">
                  Reliable Freight Solutions For Your Shipments
                </h1>
                <p className="max-w-md text-[18px] pt-2 pb-4">
                  We are your strategic partner, helping you achieve your business
                  goals and bringing your goods to your doorsteps.
                </p>
                <button className="text-white rounded-md py-2 px-14 bg-[#ED7D1A]">
                  Track Shipment
                </button>
              </div>
            </div>
          </div>
        </div>

        </div>
      </section>
      {/**second section starts .................................................................... */}
      <section className="h-full w-full">
        <div className="w-full lg:w-[80%] block lg:flex justify-evenly gap-x-14 mx-auto pt-[3%] pb-[3%] p-7 2xl:max-w-7xl">
          <div className="w-full lg:max-w-lg self-center font-semibold">
            <h2 className="text-3xl sm:text-5xl pb-4 text-center sm:text-start">
              Delivering the best globallogistics solutions.
            </h2>
            <p className="text-para pb-3 text-center sm:text-start">
              We make logistics much easier and straightforward. Combining good
              service and technology makes everything easier
            </p>
          </div>
          <img
            src="/assets/stacked-containers.png"
            className="w-full h-[370px] object-top object-cover"
            alt=""
          />
        </div>
      </section>
      {/**second section ends .................................................................... */}

      {/**third section starts .................................................................... */}
      <section className="h-full w-full bg-[#F5F4F44A]">
        <div className="w-full lg:w-[85%] mx-auto pt-[3%] pb-[4%] 2xl:max-w-7xl">
          <h2 className="text-center font-bold text-[23px] pt-4">
            What makes us different
          </h2>
          <div className="block self-center sm:flex justify-between gap-x-4 p-2 pt-[4%]">
            {cards.map((item) => (
              <div
                key={item.id}
                className="w-full md:max-w-sm text-center p-4 rounded-md bg-[#FFFFFF] mb-3"
              >
                <img src={item.icon} alt="" className="pt-4 pb-4 mx-auto" />
                <h3 className=" text-para pt-2 pb-2 text-[#ED7D1A] font-bold">{item.heading}</h3>
                <p className=" text-para pt-2 pb-2">{item.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/**third section ends .................................................................... */}

      {/**fourth section track field starts .................................................................... */}
      <section className="h-full w-full">
        <div className="w-full sm:w-[80%] mx-auto flex justify-center pt-[3%] pb-0 sm:pb-[5%] 2xl:max-w-7xl">
          <div className="w-full lg:w-[65%] p-2">
            <h3 className="text-center font-bold text-[30px] pb-10 pt-8">
              Need to track your shipment with us?
            </h3>
            <div className="flex gap-x-3 sm:gap-x-6 p-4 sm:p-0">
              <input
                type="text"
                value={userValue}
                onChange={handleInput}
                className="w-full rounded-lg outline-none border-2 border-[#848185] pl-2 h-12"
                placeholder="Track Shipment"
              />
              <button
                disabled={loading}
                onClick={handleSearch}
                className="bg-[#ED7D1A] px-7 sm:px-16 h-12 rounded-lg text-white"
              >
                {loading ? "Tracking...." : "Track"}
              </button>
            </div>
          </div>
        </div>
      </section>
      {/**fourth section track field ends.................................................................... */}
      <Footer />
    </main>
  );
}

export default Home;
