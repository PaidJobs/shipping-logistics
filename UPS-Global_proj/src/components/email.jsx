import React from "react";
import Navlinks from "./Navlinks";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Email() {
    const navigate = useNavigate();
  const [emailMessage, setEmailMessage] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [errorForm, setErrorForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  //handle user input from form
  const handleInput = (event) => {
    const { name, value } = event.target;
    setEmailMessage({
      ...emailMessage,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validateForm();

    if(isValid){
        
        navigate("/success")
        //clear form field
        setEmailMessage({
          firstname: "",
          lastname: "",
          email: "",
          message: "",
        })
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (emailMessage.firstname.trim() === "") {
      errors.firstname = "first name is required";
      isValid = false;
    }

    if (emailMessage.lastname.trim() === "") {
      errors.lastname = "last name is required";
      isValid = false;
    }

    if (emailMessage.email.trim() === "") {
      errors.email = "email address is required";
      isValid = false;
    }

    if (emailMessage.message.trim() === "") {
      errors.message = "message field cannot be empty";
      isValid = false;
    }

    setErrorForm(errors);
    return isValid;
  };

  return (
    <main>
      <Navlinks />
      {/**email section--------------------------------------------------------------------------- */}
      <section className="w-full h-full">
        <div className="w-full min-h-screen md:w-[70%] mx-auto flex justify-center items-center pt-[10%] pb-[10%] p-2 2xl:max-w-7xl">
          <form action="">
            <p className="pb-4 text-2xl font-semibold">Contact us.</p>
            <div className="bg-[#84818508] p-3 rounded-lg">
            <div className="w-full md:w-[620px] mx-auto p-2 bg-white rounded-lg">
              <div className="block w-full pt-3">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  className="w-full py-2 px-2 rounded-lg outline-none border-[1px] border-[#848185]"
                  name="firstname"
                  onChange={handleInput}
                  value={emailMessage.firstname}
                  id="firstname"
                  placeholder="First name"
                />
                <span style={{ color: "red" }}>{errorForm.firstname}</span>
              </div>
              <div className="flex flex-col w-full pt-3">
                <label htmlFor="firstname">Last Name</label>
                <input
                  type="text"
                  className="w-full py-2 px-2 rounded-lg outline-none border-[1px] border-[#848185]"
                  name="lastname"
                  onChange={handleInput}
                  value={emailMessage.lastname}
                  id="lastname"
                  placeholder="Last name"
                />
                <span style={{ color: "red" }}>{errorForm.lastname}</span>
              </div>
              <div className="flex flex-col pt-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="w-full py-2 px-2 rounded-lg outline-none border-[1px] border-[#848185]"
                  placeholder="enter ur email adress"
                  name="email"
                  onChange={handleInput}
                  value={emailMessage.email}
                  id="email"
                />
                <span style={{ color: "red" }}>{errorForm.email}</span>
              </div>
              <div className="flex flex-col pt-3">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  className="w-full py-2 px-2 rounded-lg outline-none border-[1px] border-[#848185]"
                  placeholder="email subject"
                  name="subject"
                  id="subject"
                />
              </div>
              <div className="flex flex-col pt-3 pb-10">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  className="w-full py-2 px-2 rounded-lg outline-none border-[1px] border-[#848185]"
                  placeholder="enter message here"
                  onChange={handleInput}
                  value={emailMessage.message}
                  id="message"
                ></textarea>
                <span style={{ color: "red" }}>{errorForm.message}</span>
              </div>
              <button
                className="w-full bg-[#ED7D1A] text-white rounded-2xl py-3"
                onClick={handleSubmit}
              >
                Send Message
              </button>
            </div>
            </div>
          </form>
        </div>
      </section>

      {/**making footer stick to bottom of screen*/}
      <Footer/>
    </main>
  );
}

export default Email;
