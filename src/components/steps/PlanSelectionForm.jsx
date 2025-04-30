import React, { useEffect } from "react";
import BillingToggle from "../utils/BillingToggle";
import PlanSelectionBox from "../utils/PlanSelectionBox";
import plans from "../data/plans";

const PlanSelectionForm = ({ formData, updateForm, setIsStepValid, formTouched }) => {
  const { planSelection } = formData;

  useEffect(() => {
    if (formTouched) {
      validatePlanSelection();
    }
  }, [formTouched, planSelection]);

  const validatePlanSelection = () => {
    const isValid = !!planSelection?.selectedPlan;
    setIsStepValid(isValid);
    return isValid;
  };

  const handleToggle = () => {
    updateForm({
      planSelection: {
        ...planSelection,
        isYearly: !planSelection.isYearly
      }
    });
  };

  const handlePlanSelect = (planId) => {
    const newSelection = planId === planSelection?.selectedPlan 
      ? { ...planSelection, selectedPlan: null }
      : { ...planSelection, selectedPlan: planId };
    
    updateForm({ planSelection: newSelection });
    setIsStepValid(!!newSelection.selectedPlan);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-[#042657] text-2xl lg:text-4xl font-bold mb-2">
        Select your plan
      </h2>
      <p className="text-[#B8B9BE] mb-6">
        You have the option of monthly or yearly billing.
      </p>

      <div className="mb-4">
        <PlanSelectionBox
          isYearly={planSelection?.isYearly || false}
          plans={plans}
          selectedPlan={planSelection?.selectedPlan}
          onSelectPlan={handlePlanSelect}
        />
        {formTouched && !planSelection?.selectedPlan && (
          <p className="text-[#CC4C62] text-sm mt-3 font-medium text-center">
            Please select a plan to continue
          </p>
        )}
      </div>

      <BillingToggle handleToggle={handleToggle} isYearly={planSelection?.isYearly || false} />
    </div>
  );
};

export default PlanSelectionForm;