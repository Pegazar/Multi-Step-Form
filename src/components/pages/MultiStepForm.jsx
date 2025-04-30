import React from "react";
import useStepManager from "../hooks/useStepManager";
import formSteps from "../data/formSteps";
import FormNavigation from "../utils/FormNavigation";
import SidebarNavigation from "../pages/SidebarNavigation";
import StepComponent from "./StepComponent";


const MultiStepForm = () => {
  const {
    stepIndex,
    currentStep,
    isLastStep,
    formTouched,
    formData,
    updateForm,
    setIsStepValid,
    nextStep,
    prevStep,
    handleSubmit
  } = useStepManager(formSteps);

  return (
    <div className="flex flex-col lg:flex-row items-start h-full">
      <SidebarNavigation steps={formSteps} stepIndex={stepIndex} />

      <div className="multiStepForm flex flex-col flex-grow">
        <StepComponent
          Component={currentStep.component}
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
