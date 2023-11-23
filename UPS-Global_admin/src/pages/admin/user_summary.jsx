import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { dataBase } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { NavLink } from "react-router-dom";

function Summary() {
  const { documentId } = useParams();
  const [documentData, setDocumentData] = useState(null);

  //for the sum of the items
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const fetchDocumentData = async () => {
      try {
        // Retrieve document data using the document ID
        const docRef = doc(dataBase, "products", documentId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists) {
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

          // Set the total sum in the state
          setTotalSum(sum);
          setDocumentData(docSnap.data());
        } else {
          console.log("Document not found");
        }
      } catch (error) {
        console.error("Error getting document:", error);
        // Handle the error as needed
      }
    };

    fetchDocumentData();
  }, [documentId]);

  return (
    <main>
      {/**customer details----------------------------------------------------------------------------- */}
      <section className="w-full h-full bg-white">
        <div className="w-full lg:w-[80%] mx-auto block sm:flex justify-between py-2 p-2 sm:p-4 2xl:max-w-6xl">
          <div className="flex gap-x-1 max-w-sm">
            <img src="/assets/logo.png" alt="" />
            <div className="w-full">
              <p className="text-lg">UPs Global Fleet</p>
              <p className=" text-xs">Courier Service</p>
            </div>
          </div>
          <img
            src="/assets/user.png"
            className="w-12 h-12 hidden sm:inline"
            alt=""
          />
        </div>
        <div className="w-full sm:w-[70%] mx-auto p-2 2xl:max-w-6xl">
          <h2 className=" pb-2 pt-2 text-lg font-semibold pl-2">
            Shippment summary
          </h2>
          {/**customer details-----------------------------------------------------------------------------*/}
          <div className="w-full p-3 bg-[#F7F5F8]/50 rounded-lg">
            <p className="pb-3">Customers Details</p>
            <ul className="w-full p-2 rounded-lg bg-white">
              <li className=" flex justify-between flex-wrap">
                Recivers Name:
                <span className="text-end text-base font-semibold">
                  {documentData?.customer_details.name}
                </span>
              </li>
              <li className=" flex justify-between">
                Receivers contact:
                <span className="text-end text-base font-semibold">
                  {documentData?.customer_details.phoneNumber}
                </span>
              </li>
              <li className=" flex justify-between flex-wrap">
                Receivers email:
                <span className="text-end text-base font-semibold">
                  {documentData?.customer_details.customer_email}
                </span>
              </li>
              <li className=" flex justify-between">
                Delivery address:
                <span className="text-end text-base font-semibold">
                  {documentData?.customer_details.address}
                </span>
              </li>
            </ul>
          </div>

          {/**cargo details-----------------------------------------------------------------------------*/}
          <div className=" w-full p-3 bg-[#F7F5F8]/50 rounded-lg mt-3">
            <p className=" pb-3">Cargo Details</p>
            <ul className="w-full p-2 rounded-lg bg-white">
              <li className=" flex justify-between">
                Package Type:
                <span className="text-end">
                  {documentData?.cargo_details.package_type}
                </span>
              </li>
              <li className=" flex justify-between flex-wrap">
                Shipping Date:
                <span className="text-end">
                  {documentData?.cargo_details.shipping_date
                    .toDate()
                    .toDateString()}
                </span>
              </li>
              <li className=" flex justify-between">
                Delivery Date:
                <span className="text-end">
                  {documentData?.cargo_details.delivery_date === "" ? (
                    <p>Pending</p>
                  ) : (
                    <p>{documentData?.cargo_details.delivery_date}</p>
                  )}
                </span>
              </li>
              <li className=" flex justify-between">
                Delivery Method:
                <span className="text-end">
                  {documentData?.cargo_details.delivery_method}
                </span>
              </li>
            </ul>
          </div>

          {/**shipping valuables-----------------------------------------------------------------------------*/}
          <div className=" w-full p-3 bg-[#F7F5F8]/50 rounded-lg mt-3">
            <p className=" pb-3">Valuables</p>
            <div className="rounded-lg bg-white">
              {documentData?.cargo_valuables.map((item, index) => (
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
          {/**cargo route-----------------------------------------------------------------------------*/}
          <div className="w-full p-3 bg-[#F7F5F8]/50 rounded-lg mt-3">
            <p className=" pb-3">Cargo Route</p>
            <ul className="w-full p-2 rounded-lg bg-white">
              <li className=" flex justify-between">
                Starting Location:
                <span className="text-end">
                  {documentData?.cargo_route.origin}
                </span>
              </li>
              <li className=" flex justify-between">
                Discharge Location:
                <span className="text-end">
                  {documentData?.cargo_route.destination_point}
                </span>
              </li>
            </ul>
          </div>
          <p className=" pb-2 pt-2 text-base font-bold">
            Tracking number is:{" "}
            <span className="text-[#ED7D1A]">{documentId}</span>
          </p>
          {/**button......................................................................................*/}
          <NavLink to={"/dashboard"}>
            <button className=" w-full py-3 rounded-lg bg-[#ED7D1A] mt-3 mb-3">
              Done
            </button>
          </NavLink>
        </div>
      </section>
    </main>
  );
}

export default Summary;
