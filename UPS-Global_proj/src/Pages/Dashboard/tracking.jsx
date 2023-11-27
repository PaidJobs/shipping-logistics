import React from "react";
import Footer from "../../components/Footer";
import Stepper from "../../components/Stepper";
import { dataBase } from "../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

function Tracking() {
  const { documentId } = useParams();
  const [userData, setUserData] = useState(null);

  //for the sum of the items
  const [totalSum, setTotalSum] = useState(0);
  const [lastObjectValues, setLastObjectValues] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(dataBase, "products", documentId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const weight_kg = docSnap.data();
          
          // Assuming 'cargo_valuables' is the array field in your document
          const cargoValuablesArray = weight_kg?.cargo_valuables || [];

          // Calculate the sum of 'weight' property using reduce
          const sum = cargoValuablesArray.reduce(
            (accumulator, currentValue) => {
              // Assuming each element in the array is an object with 'item' and 'weight' properties
              return accumulator + (parseFloat(currentValue.weight) || 0); // Convert to float to handle string values
            },
            0
          );

          // Assuming 'locations' is the array field in your document
          const locationsArray = data.locations || [];

          // Get the last object in the array
          const lastObject = locationsArray[locationsArray.length - 1];

          // Set the values of the last object in the state
          setLastObjectValues(lastObject);
          // Set the total sum in the state
          setTotalSum(sum);
          setUserData(docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          alert("No such document found!");
        }
      } catch (error) {
        alert("error found: ", error);
      }
    };

    fetchData();
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);

  // Check the condition (e.g., name === 'Siri') to determine whether to show the modal
  const name = "delayed";
  const shouldShowModal = name === userData?.status.toLowerCase();

  useEffect(() => {
    // Open the modal automatically when the condition is true
    if (shouldShowModal) {
      setModalOpen(true);
    }
  }, [shouldShowModal]);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <main>
      <section className="w-full h-full">
        <div className="w-full lg:w-[80%] mx-auto sm:flex justify-between py-2 p-4 mt-2 2xl:max-w-7xl">
          <div className="flex gap-x-2">
            <img src="/assets/logo.png" className="w-12 h-12" alt="" />
            <div className="w-full">
              <p className="text-lg">UPs Global Fleet</p>
              <p className=" text-xs">Courier Service</p>
            </div>
          </div>
          <div className="flex gap-x-2 sm:w-[50%] w-full pt-4">
            <input
              type="text"
              className="w-full rounded-lg outline-none border-2 border-[#848185] pl-2 h-12"
              placeholder="Track Shipment"
            />
            <button className="bg-[#ED7D1A] px-5 sm:px-16 h-12 rounded-lg text-white">
              Track
            </button>
          </div>
        </div>
      </section>
      {/**stepper component  */}
      <div className="pt-[2%] pb-[2%] mx-auto hidden sm:block 2xl:max-w-7xl">
        <Stepper />
      </div>
      {/**stepper component  */}
      <section className="w-full h-full">
        <div className="w-full pb-[10%] lg:w-[80%] mx-auto grid center-glass gap-4 2xl:max-w-7xl">
          <div className=" ">
            {/**customer details --------------------------------------------------------- */}
            <div className=" p-4 bg-[#848185]/10">
              <p className=" pb-3">Customer Details</p>
              <div className=" rounded-lg bg-white">
                <ul className="w-full p-2 rounded-lg bg-white">
                  <li className=" flex justify-between flex-wrap">
                    Recivers Name:
                    <span className="text-end text-base font-semibold">
                      {userData?.customer_details.name}
                    </span>
                  </li>
                  <li className=" flex justify-between">
                    Receivers contact:
                    <span className="text-end text-base font-semibold">
                      {userData?.customer_details.phoneNumber}
                    </span>
                  </li>
                  <li className=" flex justify-between flex-wrap">
                    Receivers email:
                    <span className="text-end text-base font-semibold">
                      {userData?.customer_details.customer_email}
                    </span>
                  </li>
                  <li className=" flex justify-between">
                    Delivery address:
                    <span className="text-end text-base font-semibold">
                      {userData?.customer_details.address}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <div className="p-4 bg-[#848185]/10 pb-7">
              <p className=" pb-3">Cargo Details</p>
              <div className="bg-white p-2 rounded-lg">
                <ul className="w-full p-2 rounded-lg bg-white">
                  <li className=" flex justify-between">
                    Package Type:
                    <span className="text-end">
                      {userData?.cargo_details.package_type}
                    </span>
                  </li>
                  <li className=" flex justify-between flex-wrap">
                    Shipping Date:
                    <span className="text-end">
                      {userData?.cargo_details.shipping_date
                        .toDate()
                        .toDateString()}
                    </span>
                  </li>
                  <li className=" flex justify-between">
                    Delivery Date:
                    <span className="text-end">
                      {userData?.cargo_details.delivery_date === "" ? (
                        <p>Pending</p>
                      ) : (
                        <p>{userData?.cargo_details.delivery_date}</p>
                      )}
                    </span>
                  </li>
                  <li className=" flex justify-between">
                    Delivery Method:
                    <span className="text-end">
                      {userData?.cargo_details.delivery_method}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <div className="p-4 bg-[#848185]/10">
                <p className=" pb-3">Cargo Content</p>
                <div className="rounded-lg bg-white">
                  {userData?.cargo_valuables.map((item, index) => (
                    <ul key={index} className="w-full p-2">
                      <li className=" flex justify-between">
                        {index + 1}. {item.valuable}
                        <span className="text-end">{item.weight}kg</span>
                      </li>
                    </ul>
                  ))}
                  <p className="flex justify-between p-2">
                    Total weight <span>{totalSum}kg</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex sm:justify-end justify-center pb-5">
              <NavLink to={"/"}>
                <button className=" bg-[#ED7D1A] text-white text-lg py-2 px-28 rounded-md mt-2">
                  Back
                </button>
              </NavLink>
            </div>
            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-4 rounded shadow-lg max-w-xs">
                  <div className="">
                    <div className=" w-full flex justify-end">
                      <button onClick={handleCloseModal}>
                        <FaTimes className="self-end" />
                      </button>
                    </div>
                    <img src="/assets/error.png" className="mx-auto" alt="" />
                    <h2 className="text-center text-xl font-semibold pt-2 pb-2">
                      Transit Error
                    </h2>
                  </div>
                  <div className="text-center">
                    <p className="text-base font-semibold">
                      Cargo delayed at: <span>{lastObjectValues?.status}</span>
                    </p>
                    <p className="text-base font-semibold pt-2">
                      Date:{" "}
                      <span>
                        {lastObjectValues?.date.toDate().toDateString()}
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-center pt-2 pb-2">
                    <NavLink to={"/email"}>
                      <button className="bg-[#E11515] py-2 rounded-lg text-white px-20 text-center">
                        Contact us
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Tracking;
