import { useCallback, useState } from "react";

const useStepManager = (stepsList) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [formTouched, setFormTouched] = useState(false);
  const [isStepValid, setIsStepValid] = useState(false);

  const [formData, setFormData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
    },
    planSelection: {
      selectedPlan: null,
      isYearly: false,
    },
    addOns: {
      onlineService: false,
      largerStorage: false,
      customizableProfile: false
    }
  });

  const updateForm = useCallback((data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  }, []);

  const isLastStep = stepIndex === stepsList.length - 1;

  const nextStep = useCallback(() => {
    setFormTouched(true);

    if (isStepValid) {
      setStepIndex((prev) => Math.min(prev + 1, stepsList.length - 1));
      setFormTouched(false);
      setIsStepValid(false);
    }
  }, [isStepValid, stepsList.length]);

  const prevStep = useCallback(() => {
    setStepIndex((prev) => Math.max(prev - 1, 0));
    setFormTouched(false);
  }, []);

  const handleSubmit = () => {
    setFormTouched(true);
    if (isStepValid) {
      console.log("Form submitted:", formData);
      alert("Nice! Your form has been submitted successfully.");
    }
  };

  const currentStep = stepsList[stepIndex];

  return {
    stepIndex,
    currentStep,
    isLastStep,
    formTouched,
    isStepValid,
    formData,
    updateForm,
    setIsStepValid,
    setFormTouched,
    nextStep,
    prevStep,
    handleSubmit,
  };
};

export default useStepManager;