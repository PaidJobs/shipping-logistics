import React, { useState } from "react";
import "./stepper.css"
import { FaCheckCircle } from "react-icons/fa";

const steps = [
  { name: "Port", iconURL: "/assets/port.png" }, // Use appropriate icons for your application
  { name: "In Transit",  iconURL: "/assets/en-route.png" },
  { name: "Destination",  iconURL: "/assets/delivered.png" },
];

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  return (
    <div className="w-full sm:w-[80%] mx-auto">
      <div className="flex justify-between">
        {steps?.map((item, index) => (
          <div key={index} className={`step-item ${currentStep === index + 1 && "active"} ${( index + 1 < currentStep || complete ) && "complete"}`}>
            <div className="step text-[20px]">{( index + 1 < currentStep || complete ) ? <FaCheckCircle size={20}/> : index + 1 }</div>
            <p className="text-base font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
      <button
      onClick={() => {
        currentStep === steps.length ? setComplete(true) : 
        setCurrentStep((prev) => prev + 1)
      }} 
      className="bg-red-400 py-2 px-16">Next</button>
    </div>
  );
};

export default Stepper;
