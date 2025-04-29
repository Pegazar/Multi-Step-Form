import React, { useState } from "react";
import formSteps from "../data/formSteps";
import FormNavigation from "../utils/FormNavigation";
import SidebarNavigation from "../pages/SidebarNavigation";

const MultiStepForm = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isStepValid, setIsStepValid] = useState(false);
  const [formTouched, setFormTouched] = useState(false);

  const updateForm = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  const nextStep = () => {
    setFormTouched(true);

    if (isStepValid) {
      setStepIndex((prev) => Math.min(prev + 1, formSteps.length - 1));
      setFormTouched(false);
    }
  };

  const prevStep = () => {
    setStepIndex((prev) => Math.max(prev - 1, 0));
    setFormTouched(false);
  };

  const handleSubmit = () => {
    setFormTouched(true);

    if (isStepValid) {
      console.log("Form submitted:", formData);
      alert("Nice! Your form has been submitted successfully.");
    }
  };

  const isLastStep = stepIndex === formSteps.length - 1;
  const CurrentComponent = formSteps[stepIndex].component;

  return (
    <div className="flex flex-col lg:flex-row items-start h-full">
      <SidebarNavigation steps={formSteps} stepIndex={stepIndex} onStepChange={setStepIndex} />

      <div className="multiStepForm flex flex-col flex-grow">
        <CurrentComponent
          formData={formData}
          updateForm={updateForm}
          setIsStepValid={setIsStepValid}
          formTouched={formTouched}
        />

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