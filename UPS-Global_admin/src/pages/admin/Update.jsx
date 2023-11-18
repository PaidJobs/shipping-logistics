import React from "react";
import { useState } from "react";
import { dataBase } from "../../config/firebase";
import { doc, updateDoc, arrayUnion, Timestamp} from "firebase/firestore";

function Update() {
  //state for the form data
  const defaultFormData = {
    inputValue: "",
    selectedOption: "In Transit",
    shipmentAddress: "",
    shipmentDate: ""
  };

  const [formData, setFormData] = useState(defaultFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    //form data
    try {

      // Update the status in Firebase
      const dbRef = doc(dataBase, "products", formData.inputValue.trim());
      await updateDoc(dbRef, {
        status: formData.selectedOption,
        //location update
        locations: arrayUnion({
          status: formData.shipmentAddress,
          date: Timestamp.fromDate(
            new Date(formData.shipmentDate)
          ),
        })
      });

      alert("successful");
      // Close the modal or perform any other actions
    } catch (error) {
      console.log("Error updating: ", error);
    }
    // Reset form fields to default values
    setFormData(defaultFormData);
  };

  return (
    <main>
      <section className="w-full h-full">
        <div className="w-full lg:w-[80%] mx-auto block sm:flex justify-between py-2 p-2 sm:p-4">
          <div className="flex gap-x-1 max-w-sm">
            <img src=" /assets/logo.png" alt="" />
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
      </section>
      <section className="w-full">
        <div className="w-[80%] mx-auto">
          <h2 className="text-lg pt-2 pb-2 font-semibold">Update user status.</h2>
          <div className="w-[50%] p-2">
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col pt-2 gap-y-2">
              <label htmlFor="">Enter Tracking ID:</label>
              <input
                type="text"
                name="inputValue"
                value={formData.inputValue}
                onChange={handleChange}
                className="h-10 w-full p-2 rounded-lg outline-none border-2 border-black"
                placeholder="Type of package"
              />
            </div>
            <div className="flex flex-col pt-4 gap-y-2">
              <label htmlFor="">Enter Address:</label>
              <input
                type="text"
                name="shipmentAddress"
                value={formData.shipmentAddress}
                onChange={handleChange}
                className="h-10 w-full p-2 rounded-lg outline-none border-2 border-black"
                placeholder="Type of package"
              />
            </div>
            <div className="flex flex-col pt-4 gap-y-2">
              <label htmlFor="">Enter Date and Time:</label>
              <input
                type="datetime-local"
                name="shipmentDate"
                value={formData.shipmentDate}
                onChange={handleChange}
                className="h-10 w-full p-2 rounded-lg outline-none border-2 border-black"
                placeholder="Type of package"
              />
            </div>
            <div className="flex flex-col pt-4 pb-4">
              <label>
                <span className="text-lg pr-2">
                  Shipment Status:
                </span>
                <select
                  className="w-[150px] outline-none pl-2 hover:bg-gray-100 cursor-pointer"
                  name="selectedOption"
                  value={formData.selectedOption}
                  onChange={handleChange}
                >
                  <option value="In Transit" className="text-[#ED7D1A]">In Transit</option>
                  <option value="Delayed" className="text-[#E11515]">Delayed</option>
                  <option value="Delivered" className="text-[#11ED34]">Delivered</option>
                </select>
              </label>
            </div>
            <div className="flex justify-end pr-2">
              <button
                type="submit"
                className=" px-8 py-3 bg-[#ED7D1A] text-white rounded-lg"
              >
                Update
              </button>
            </div>
          </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Update;
