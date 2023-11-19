import React, { useState } from "react";
import "./stepper.css"

const steps = [
  { name: "Port", iconURL: "/assets/port.png" }, // Use appropriate icons for your application
  { name: "In Transit",  iconURL: "/assets/en-route.png" },
  { name: "Destination",  iconURL: "/assets/delivered.png" },
];

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    
    <div className="w-[80%] mx-auto">
      <div className="flex items-center justify-center space-x-4 p-2">
        {steps.map((step, index) => (
          <div
            key={step.name}
            className={`flex-1 step-item ${
              index === currentStep ? "text-green-400" : "text-orange-400"
            }`}
          >
            <div className="relative flex flex-col items-center">
              <div
                className={`rounded-full h-10 w-10 flex items-center justify-center  ${
                  index === currentStep ? "bg-transparent" : "bg-transparent"
                }`}
              >
                <img src={step.iconURL} alt={`${step.name} icon`} className="w-full h-full object-cover" />
              </div>
              <div className="text-center text-sm mt-1">{step.name}</div>
              {index < steps.length - 1 && (
                <div
                  className={`absolute top-1/2 -translate-y-1/2 left-full w-full h-0 bg-black transition duration-500 ease-in-out ${
                    index < currentStep ? "bg-blue-600" : ""
                  }`}
                  style={{ right: "50%", zIndex: -1 }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
