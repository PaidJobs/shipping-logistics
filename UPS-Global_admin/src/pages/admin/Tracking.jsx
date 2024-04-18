import React, { useState, useEffect } from "react";
import { dataBase } from "../../config/firebase";
import { collection, Timestamp, addDoc } from "firebase/firestore";
import { NavLink, useNavigate } from "react-router-dom";

function Tracking() {
  const [documentId, setDocumentId] = useState(null);
  const navigate = useNavigate();

  const [cargoContents, setCargoContent] = useState({
    package_type: "",
    delivery_method: "",
    shipping_date: "",
    starting_location: "",
    destination: "",
    customer_name: "",
    customer_phone: "",
    customer_address: "",
    customer_email: "",
    //pending delivery date
    delivery_date: "",
    status: "in port",
    locations: [],
    creationDate: "",
  });

  const [formErrors, setFormErrors] = useState({
    package_type: "",
    delivery_method: "",
    shipping_date: "",
    starting_location: "",
    destination: "",
    customer_name: "",
    customer_phone: "",
    customer_address: "",
    customer_email: "",
  });

  //for adding cargo details
  const [inputValues, setInputValues] = useState({
    valuable: "",
    weight: "",
    quantity: "",
  });

  // useState for cargo valuables
  const [dataArray, setDataArray] = useState([]);
  const [error, setError] = useState("");

  //handle user input from forms
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  //adding cargo valuables
  const addCargo = () => {
    if (!inputValues.valuable || !inputValues.weight || !inputValues.quantity) {
      setError("All fields must be filled out.");
      return;
    }
    setError("");
    setDataArray((prevArray) => [...prevArray, inputValues]);
    setInputValues({
      valuable: "",
      weight: "",
      quantity: "",
    });
  };

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
          customer_details: {
            name: cargoContents.customer_name,
            phoneNumber: cargoContents.customer_phone,
            address: cargoContents.customer_address,
            customer_email: cargoContents.customer_email,
          },
          cargo_route: {
            origin: cargoContents.starting_location,
            destination_point: cargoContents.destination,
          },
          locations: [
            {
              date: Timestamp.now(),
              status: cargoContents.starting_location,
            },
          ],
          cargo_valuables: dataArray,
          status: "In Transit",
          creation_date: Timestamp.now(),
        });

        setCargoContent({
          package_type: "",
          delivery_method: "",
          shipping_date: "",
          starting_location: "",
          destination: "",
          customer_name: "",
          customer_phone: "",
          customer_address: "",
          customer_email: "",
        });
        alert("Form submitted successfully!");
        //set document id
        setDocumentId(docRef.id);
        //navigate
        navigate(`/summary/${docRef.id}`);
      } catch (error) {
        alert(error);
      }
      setFormErrors({
        package_type: "",
        delivery_method: "",
        shipping_date: "",
        starting_location: "",
        destination: "",
        customer_name: "",
        customer_phone: "",
        customer_address: "",
        customer_email: "",
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

    if (cargoContents.starting_location.trim() === "") {
      errors.starting_location = "This field is required";
      isValid = false;
    }

    if (cargoContents.destination.trim() === "") {
      errors.destination = "This field is required";
      isValid = false;
    }

    if (cargoContents.customer_name.trim() === "") {
      errors.customer_name = "This field is required";
      isValid = false;
    }

    if (cargoContents.customer_phone.trim() === "") {
      errors.customer_phone = "This field is required";
      isValid = false;
    }

    if (cargoContents.customer_email.trim() === "") {
      errors.customer_email = "This field is required";
      isValid = false;
    }

    if (cargoContents.customer_address.trim() === "") {
      errors.customer_address = "This field is required";
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
              <p className="text-lg">Global Fleet</p>
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
      <section className="w-full sm:w-[60%] mx-auto flex justify-center min-h-screen">
        <div className="w-full sm:w-[80%] mx-auto p-1">
          <div className="bg-[#F7F5F8]/30 w-full p-4 ">
            <div
              style={{
                color: "black",
                paddingBottom: 30,
                fontSize: 20,
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              Fill in details to generate tracking number
            </div>
            <div
              style={{
                color: "black",
                fontSize: 23, 
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              Cargo Details
            </div>
            <div
              style={{
                color: "black",
                fontSize: 18,
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Input Cargo Details
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="pb-4 bg-white rounded-lg p-2">
                <div className="flex flex-col pt-4">
                  <input
                    style={{
                      paddingLeft: 20,
                      paddingRight: 20,
                      paddingTop: 9,
                      paddingBottom: 10,
                      borderRadius: 10,
                      border: "1px #848185 solid",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 10,
                      display: "inline-flex",
                    }}
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

                <div className="flex flex-col pt-3">
                  <label
                    style={{
                      color: "black",
                      fontSize: 15,
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                    htmlFor=""
                  >
                    Shipping Date:
                  </label>
                  <input
                    style={{
                      width: "100%",
                      height: "100%",
                      paddingLeft: 20,
                      paddingRight: 20,
                      paddingTop: 9,
                      paddingBottom: 10,
                      background: "white",
                      borderRadius: 10,
                      border: "1px #848185 solid",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 10,
                      display: "inline-flex",
                    }}
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
                <div className="flex flex-col pb-2 pt-3">
                  <label
                    style={{
                      color: "black",
                      fontSize: 15,

                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                    htmlFor=""
                  >
                    Delivery Method:
                  </label>
                  <input
                    style={{
                      width: "100%",
                      height: "100%",
                      paddingLeft: 20,
                      paddingRight: 20,
                      paddingTop: 9,
                      paddingBottom: 10,
                      background: "white",
                      borderRadius: 10,
                      border: "1px #848185 solid",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 10,
                      display: "inline-flex",
                    }}
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
                <div
                  style={{
                    color: "black",
                    fontSize: 23,
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Cargo Valuables
                </div>

                <div
                  style={{
                    color: "black",
                    fontSize: 18,
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Input Cargo Content
                </div>
                <div className="">
                  Cargo Entered.
                  {dataArray.map((item, index) => (
                    <ul key={index} className="flex justify-between">
                      <li>{index + 1}</li>
                      <li>Valuable: {item.valuable}</li>
                      <li>Weight: {item.weight}</li>
                      <li>Quantity: {item.quantity}</li>
                    </ul>
                  ))}
                </div>
                <div className="pb-4 bg-white rounded-lg p-2">
                  <fieldset>
                    <div className="inline md:flex gap-x-2">
                      <div className="flex flex-col pt-3 lg:w-[60%]">
                        <label
                          style={{
                            color: "black",
                            fontSize: 15,
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                          htmlFor=""
                        >
                          Valuables:
                        </label>
                        <input
                          style={{
                            width: "100%",
                            height: "100%",
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingTop: 9,
                            paddingBottom: 10,
                            background: "white",
                            borderRadius: 10,
                            border: "1px #848185 solid",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 10,
                            display: "inline-flex",
                          }}
                          name="valuable"
                          value={inputValues.valuable}
                          onChange={handleInput}
                          type="text"
                          className="h-10 p-2 border-2 border-black rounded-lg outline-none"
                          placeholder="Name of package"
                        />
                      </div>
                      <div className="flex flex-col lg:w-[20%] pt-3">
                        <label
                          style={{
                            color: "black",
                            fontSize: 15,
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                          htmlFor=""
                        >
                          Weight in kg:
                        </label>
                        <input
                          style={{
                            width: "100%",
                            height: "100%",
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingTop: 9,
                            paddingBottom: 10,
                            background: "white",
                            borderRadius: 10,
                            border: "1px #848185 solid",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 10,
                            display: "inline-flex",
                          }}
                          name="weight"
                          value={inputValues.weight}
                          onChange={handleInput}
                          type="text"
                          className="h-10 p-2 border-2 border-black rounded-lg outline-none"
                          placeholder="Weight"
                        />
                      </div>
                      <div className="flex flex-col lg:w-[20%] pt-3">
                        <label
                          style={{
                            color: "black",
                            fontSize: 15,
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                          htmlFor=""
                        >
                          Qty:
                        </label>
                        <input
                          style={{
                            width: "100%",
                            height: "100%",
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingTop: 9,
                            paddingBottom: 10,
                            background: "white",
                            borderRadius: 10,
                            border: "1px #848185 solid",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 10,
                            display: "inline-flex",
                          }}
                          name="quantity"
                          value={inputValues.quantity}
                          onChange={handleInput}
                          type="text"
                          className="h-10 p-2 border-2 border-black rounded-lg outline-none"
                          placeholder="Quantity"
                        />
                      </div>
                    </div>
                    <div className="pt-4 flex justify-end">
                      <button
                        className="px-8 py-2 bg-[#ED7D1A] text-white rounded-md"
                        type="button"
                        onClick={addCargo}
                      >
                        Add
                      </button>
                    </div>
                  </fieldset>

                  {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
              </div>

              {/**cargo route inpute value............................................................*/}
              <div className="mt-4">
                <p
                  className="text-lg"
                  style={{
                    color: "black",
                    fontSize: 23,
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Cargo Route
                </p>
                <p
                  className="text-lg pb-2"
                  style={{
                    color: "black",
                    fontSize: 18,
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Input Cargo Route
                </p>
                <div className="bg-white rounded-lg">
                  <div className="gap-x-3">
                    <div className="flex flex-col w-full p-2">
                      <label
                        style={{
                          color: "black",
                          fontSize: 15,
    
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                        htmlFor=""
                      >
                        Starting Location:
                      </label>
                      <input
                        style={{
                          width: "100%",
                          height: "100%",
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingTop: 9,
                          paddingBottom: 10,
                          background: "white",
                          borderRadius: 10,
                          border: "1px #848185 solid",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 10,
                          display: "inline-flex",
                        }}
                        id="starting_location"
                        name="starting_location"
                        value={cargoContents.starting_location}
                        onChange={handleInputChange}
                        type="text"
                        className="h-10 p-2 border-2 border-black rounded-lg"
                        placeholder="Input starting location"
                      />
                      <span style={{ color: "red" }}>
                        {formErrors.starting_location}
                      </span>
                    </div>
                    <div className="flex flex-col w-full p-2">
                      <label
                        style={{
                          color: "black",
                          fontSize: 15,
    
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                        htmlFor=""
                      >
                        Discharge Location:
                      </label>
                      <input
                        style={{
                          width: "100%",
                          height: "100%",
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingTop: 9,
                          paddingBottom: 10,
                          background: "white",
                          borderRadius: 10,
                          border: "1px #848185 solid",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 10,
                          display: "inline-flex",
                        }}
                        id="destination"
                        name="destination"
                        value={cargoContents.destination}
                        onChange={handleInputChange}
                        type="text"
                        className="h-10 p-2 border-2 border-black rounded-lg"
                        placeholder="Input discharge location"
                      />
                      <span style={{ color: "red" }}>
                        {formErrors.destination}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/**customer details form ---------------------------------------------------------------------- */}
              <div className="mt-4">
                <p
                  className="text-lg"
                  style={{
                    color: "black",
                    fontSize: 23,
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Customers Details
                </p>
                <p
                  className="text-lg pb-2"
                  style={{
                    color: "black",
                    fontSize: 18,
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Input Customers Details
                </p>
                <div className="bg-white rounded-lg">
                  <div className="gap-x-3">
                    <div className="flex flex-col w-full p-2 ">
                      <label
                        htmlFor=""
                        style={{
                          color: "black",
                          fontSize: 15,
    
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        Recievers name:
                      </label>
                      <input
                        style={{
                          width: "100%",
                          height: "100%",
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingTop: 9,
                          paddingBottom: 10,
                          background: "white",
                          borderRadius: 10,
                          border: "1px #848185 solid",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 10,
                          display: "inline-flex",
                        }}
                        id="customer_name"
                        name="customer_name"
                        value={cargoContents.customer_name}
                        onChange={handleInputChange}
                        type="text"
                        className="h-10 p-2 border-2 border-black rounded-lg"
                        placeholder="Recievers name"
                      />
                      <span style={{ color: "red" }}>
                        {formErrors.customer_name}
                      </span>
                    </div>
                    <div className="flex flex-col w-full p-2">
                      <label
                        htmlFor=""
                        style={{
                          color: "black",
                          fontSize: 15,
    
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        Recievers Contact:
                      </label>
                      <input
                        style={{
                          width: "100%",
                          height: "100%",
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingTop: 9,
                          paddingBottom: 10,
                          background: "white",
                          borderRadius: 10,
                          border: "1px #848185 solid",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 10,
                          display: "inline-flex",
                        }}
                        id="customer_phone"
                        name="customer_phone"
                        value={cargoContents.customer_phone}
                        onChange={handleInputChange}
                        type="text"
                        className="h-10 p-2 border-2 border-black rounded-lg"
                        placeholder="Recievers Contact (phone number)"
                      />
                      <span style={{ color: "red" }}>
                        {formErrors.customer_phone}
                      </span>
                    </div>
                    <div className="flex flex-col w-full p-2">
                      <label
                        htmlFor=""
                        style={{
                          color: "black",
                          fontSize: 15,
    
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        Recievers Email:
                      </label>
                      <input
                        style={{
                          width: "100%",
                          height: "100%",
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingTop: 9,
                          paddingBottom: 10,
                          background: "white",
                          borderRadius: 10,
                          border: "1px #848185 solid",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 10,
                          display: "inline-flex",
                        }}
                        id="customer_email"
                        name="customer_email"
                        value={cargoContents.customer_email}
                        onChange={handleInputChange}
                        type="text"
                        className="h-10 p-2 border-2 border-black rounded-lg"
                        placeholder="Recievers Contact"
                      />
                      <span style={{ color: "red" }}>
                        {formErrors.customer_email}
                      </span>
                    </div>
                    <div className="flex flex-col w-full p-2">
                      <label
                        htmlFor=""
                        style={{
                          color: "black",
                          fontSize: 15,
    
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        Delievery Address:
                      </label>
                      <input
                        style={{
                          width: "100%",
                          height: "100%",
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingTop: 9,
                          paddingBottom: 10,
                          background: "white",
                          borderRadius: 10,
                          border: "1px #848185 solid",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 10,
                          display: "inline-flex",
                        }}
                        id="customer_address"
                        name="customer_address"
                        value={cargoContents.customer_address}
                        onChange={handleInputChange}
                        type="text"
                        className="h-10 p-2 border-2 border-black rounded-lg"
                        placeholder="Delievery Address"
                      />
                      <span style={{ color: "red" }}>
                        {formErrors.customer_address}
                      </span>
                    </div>
                  </div>
                  <div className=" flex justify-center px-2 gap-x-6 pt-2 pb-2">
                    <NavLink to={"/dashboard"}>
                      <button className=" px-8 py-2 bg-white border-[#ED7D1A] border-2 rounded-md w-full">
                        Back
                      </button>
                    </NavLink>
                    <button
                      className=" px-8 py-2 bg-[#ED7D1A] text-white rounded-md w-full"
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
