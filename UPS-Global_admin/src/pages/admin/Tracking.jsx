import React, { useState } from "react";
import { dataBase } from "../../config/firebase";
import { collection, Timestamp, addDoc, arrayUnion } from "firebase/firestore";

function Tracking() {
  const [cargoContents, setCargoContent] = useState({
    package_type: "",
    delivery_method: "",
    shipping_date: "",
    quantity: "",
    valuable: "",
    weight: "",
    //pending delivery date
    delivery_date: "",
    status: "in port",
  });

  const [formErrors, setFormErrors] = useState({
    package_type: "",
    delivery_method: "",
    shipping_date: "",
    quantity: "",
    valuable: "",
    weight: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Special handling for the dateTime field
    if (name === "dateTime") {
      // Parse the date string and convert it to a Firestore Timestamp
      const timestamp = Timestamp.fromDate(new Date(value));

      setCargoContent({
        ...cargoContents,
        timestampField: timestamp,
      });
    } else {
      // For other fields, update the state as usual
      setCargoContent({
        ...cargoContents,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      try {
        const docRef = await addDoc(collection(dataBase, "products"), {
          cargo_details: {
            delivery_date: "",
            delivery_method: cargoContents.delivery_method,
            package_type: cargoContents.package_type,
            shipping_date: Timestamp.fromDate(
              new Date(cargoContents.shipping_date)
            ),
          },
          cargo_valuables: arrayUnion({
            quantity: cargoContents.quantity,
            valuable: cargoContents.valuable,
            weight: cargoContents.weight,
          }),
          status: "In Transit",
        });

        setCargoContent({
          package_type: "",
          delivery_method: "",
          shipping_date: "",
          quantity: "",
          valuable: "",
          weight: "", // Reset the dateTime field
        });
        alert("Form submitted successfully!");
      } catch (error) {
        console.error("error was found: ", error);
      }

      setFormErrors({
        package_type: "",
        delivery_method: "",
        shipping_date: "",
        quantity: "",
        valuable: "",
        weight: "",
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (cargoContents.package_type.trim() === "") {
      errors.package_type = "Package type is required";
      isValid = false;
    }

    if (cargoContents.delivery_method.trim() === "") {
      errors.delivery_method = "This field is required";
      isValid = false;
    }

    // Validate dateTime if needed
    if (!cargoContents.shipping_date) {
      errors.shipping_date = "Date and time are required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  return (
    <main>
      <section className="w-full h-full">
        <div className="w-full lg:w-[80%] mx-auto block sm:flex justify-between py-2 p-2 sm:p-4">
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
      </section>
      <section className="w-full min-h-screen">
        <div className="w-full sm:w-[70%] mx-auto p-2">
          <h2 className=" text-lg font-semibold">
            Fill in details to generate tracking number
          </h2>
          <div className="bg-[#848185]/30 w-full p-4 ">
            <p className="text-lg">Crago Details</p>
            <p className="pb-2 text-lg">Input Cargo details</p>
            <form action="" onSubmit={handleSubmit}>
              <div className="pb-4 bg-white rounded-lg p-2">
                <div className="flex flex-col pt-4">
                  <label htmlFor="">Package Type:</label>
                  <input
                    id="package_type"
                    name="package_type"
                    value={cargoContents.package_type}
                    onChange={handleInputChange}
                    type="text"
                    className="h-10 p-2 rounded-lg outline-none border-2 border-black"
                    placeholder="Type of package"
                  />
                  <span style={{ color: "red" }}>
                    {formErrors.package_type}
                  </span>
                </div>

                <div className="flex flex-col pt-2">
                  <label htmlFor="">Shipping Date:</label>
                  <input
                    type="datetime-local"
                    id="shipping_date"
                    name="shipping_date"
                    value={cargoContents.shipping_date}
                    onChange={handleInputChange}
                    className="h-10 p-2 rounded-lg outline-none border-2 border-black"
                    placeholder="Shipping date"
                  />
                  <span style={{ color: "red" }}>
                    {formErrors.shipping_date}
                  </span>
                </div>
                <div className="flex flex-col pb-2 pt-2">
                  <label htmlFor="">Delivery Method:</label>
                  <input
                    type="text"
                    id="delivery_method"
                    name="delivery_method"
                    value={cargoContents.delivery_method}
                    onChange={handleInputChange}
                    className="h-10 p-2 rounded-lg outline-none border-2 border-black"
                    placeholder="Shipping method"
                  />
                  <span style={{ color: "red" }}>
                    {formErrors.delivery_method}
                  </span>
                </div>
              </div>

              {/**cargo valuable input----------------------------------------------------*/}
              <div className="mt-4">
                <p className="text-lg">Cargo Valuables</p>
                <p className="text-lg pb-2">Input Cargo Content</p>
                <div className="bg-white rounded-lg">
                  <div className="flex flex-wrap lg:flex-nowrap sm:justify-between gap-x-3">
                    <div className="flex flex-col w-full lg:w-[60%] p-2 ">
                      <label htmlFor="">Valuables:</label>
                      <input
                        id="quantity"
                        name="quantity"
                        value={cargoContents.quantity}
                        onChange={handleInputChange}
                        type="text"
                        className="h-10 p-2 border-2 border-black rounded-lg"
                        placeholder="Name of package"
                      />
                      <span style={{ color: "red" }}>
                        {formErrors.quantity}
                      </span>
                    </div>
                    <div className="flex flex-col w-full lg:w-[20%] p-2">
                      <label htmlFor="">Weight in kg:</label>
                      <input
                        id="valuable"
                        name="valuable"
                        value={cargoContents.valuable}
                        onChange={handleInputChange}
                        type="text"
                        className="h-10 p-2 border-2 border-black rounded-lg"
                        placeholder="Weight"
                      />
                      <span style={{ color: "red" }}>
                        {formErrors.valuable}
                      </span>
                    </div>
                    <div className="flex flex-col w-full lg:w-[20%] p-2">
                      <label htmlFor="">Qty:</label>
                      <input
                        id="weight"
                        name="weight"
                        value={cargoContents.weight}
                        onChange={handleInputChange}
                        type="text"
                        className="h-10 p-2 border-2 border-black rounded-lg"
                        placeholder="Quantity"
                      />
                      <span style={{ color: "red" }}>{formErrors.weight}</span>
                    </div>
                  </div>
                  <div className=" flex justify-center sm:justify-end px-4 gap-x-6 pt-2 pb-2">
                    <button className=" px-8 py-2 bg-white border-[#ED7D1A] border-2 rounded-md">
                      Delete
                    </button>
                    <button
                      className=" px-8 py-2 bg-[#ED7D1A] rounded-md"
                      type="submit"
                      onClick={validateForm}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>

              {/**cargo route inpute value............................................................*/}
              <div className="mt-4">
                <p className="text-lg">Cargo Route</p>
                <p className="text-lg pb-2">Input Cargo Route</p>
                <div className="bg-white rounded-lg">
                  <div className="gap-x-3">
                    <div className="flex flex-col w-full p-2">
                      <label htmlFor="">Starting Location:</label>
                      <input
                        id="quantity"
                        name="quantity"
                        value={cargoContents.quantity}
                        onChange={handleInputChange}
                        type="text"
                        className="h-10 p-2 border-2 border-black rounded-lg"
                        placeholder="Input starting location"
                      />
                      <span style={{ color: "red" }}>
                        {formErrors.quantity}
                      </span>
                    </div>
                    <div className="flex flex-col w-full p-2">
                      <label htmlFor="">Discharge Location:</label>
                      <input
                        id="valuable"
                        name="valuable"
                        value={cargoContents.valuable}
                        onChange={handleInputChange}
                        type="text"
                        className="h-10 p-2 border-2 border-black rounded-lg"
                        placeholder="Input discharge location"
                      />
                      <span style={{ color: "red" }}>
                        {formErrors.valuable}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/**customer details form ---------------------------------------------------------------------- */}
              <div className="mt-4">
                <p className="text-lg">Customers Details</p>
                <p className="text-lg pb-2">Input Customers Details</p>
                <div className="bg-white rounded-lg">
                  <div className="gap-x-3">
                    <div className="flex flex-col w-full p-2 ">
                      <label htmlFor="">Recievers name:</label>
                      <input
                        id="quantity"
                        name="quantity"
                        value={cargoContents.quantity}
                        onChange={handleInputChange}
                        type="text"
                        className="h-10 p-2 border-2 border-black rounded-lg"
                        placeholder="Recievers name"
                      />
                      <span style={{ color: "red" }}>
                        {formErrors.quantity}
                      </span>
                    </div>
                    <div className="flex flex-col w-full p-2">
                      <label htmlFor="">Recievers Contact:</label>
                      <input
                        id="valuable"
                        name="valuable"
                        value={cargoContents.valuable}
                        onChange={handleInputChange}
                        type="text"
                        className="h-10 p-2 border-2 border-black rounded-lg"
                        placeholder="Recievers Contact"
                      />
                      <span style={{ color: "red" }}>
                        {formErrors.valuable}
                      </span>
                    </div>
                    <div className="flex flex-col w-full p-2">
                      <label htmlFor="">Recievers Email:</label>
                      <input
                        id="weight"
                        name="weight"
                        value={cargoContents.weight}
                        onChange={handleInputChange}
                        type="text"
                        className="h-10 p-2 border-2 border-black rounded-lg"
                        placeholder="Recievers Contact"
                      />
                      <span style={{ color: "red" }}>{formErrors.weight}</span>
                    </div>
                    <div className="flex flex-col w-full p-2">
                      <label htmlFor="">Delievery Address:</label>
                      <input
                        id="weight"
                        name="weight"
                        value={cargoContents.weight}
                        onChange={handleInputChange}
                        type="text"
                        className="h-10 p-2 border-2 border-black rounded-lg"
                        placeholder="Delievery Address"
                      />
                      <span style={{ color: "red" }}>{formErrors.weight}</span>
                    </div>
                  </div>
                  <div className=" flex justify-center px-4 gap-x-6 pt-2 pb-2">
                    <button className=" px-8 py-2 bg-white border-[#ED7D1A] border-2 rounded-md w-full">
                      Back
                    </button>
                    <button
                      className=" px-8 py-2 bg-[#ED7D1A] rounded-md w-full"
                      type="submit"
                      onClick={validateForm}
                    >
                      Generate Tracking Number
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Tracking;
