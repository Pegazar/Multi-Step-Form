import React, { useState } from "react";
import formSteps from "../data/formSteps";
import FormNavigation from "../utils/FormNavigation";
import SidebarNavigation from "./SidebarNavigation";

const MultiStepForm = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const updateForm = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  const nextStep = () => {
    setStepIndex((prev) => Math.min(prev + 1, formSteps.length - 1));
  };

  const prevStep = () => {
    setStepIndex((prev) => Math.max(prev - 1, 0));
  };
  
  const handleSubmit = () => {
    console.log("Form send:", formData);
    alert("Form submitted! Check console for data.");
  };

  const isLastStep = stepIndex === formSteps.length - 1;

  const CurrentComponent = formSteps[stepIndex].component;

  return (
    <div className="flex flex-col lg:flex-row items-start h-full">
      <SidebarNavigation
        steps={formSteps}
        activeIndex={stepIndex}
        onStepChange={setStepIndex}
      />

      <div className="multiStepForm flex flex-col flex-grow">
        <CurrentComponent formData={formData} updateForm={updateForm} />

        <FormNavigation
          stepIndex={stepIndex}
          isLastStep={isLastStep}
          onNext={nextStep}
          onPrev={prevStep}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default MultiStepForm;
