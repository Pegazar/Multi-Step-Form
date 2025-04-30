import React, { useEffect } from "react";
import plans from "../data/plans";
import addOnData from "../data/addondata";

const SummaryForm = ({ formData, setIsStepValid }) => {
  const { selectedPlan, isYearly } = formData.planSelection || {};
  const addOns = formData.addOns || {};

  useEffect(() => {
    setIsStepValid(true);
  }, [setIsStepValid]);

  const selectedPlanData = plans.find((plan) => plan.id === selectedPlan);
  
  const planPrice = isYearly 
    ? selectedPlanData?.yearlyPrice 
    : selectedPlanData?.monthlyPrice;
  const selectedAddOns = addOnData.filter((addon) => addOns[addon.id]);
  
  const addOnsTotalPrice = selectedAddOns.reduce((total, addon) => {
    return total + (isYearly ? addon.yearlyPrice : addon.monthlyPrice);
  }, 0);
  const totalPrice = planPrice + addOnsTotalPrice;

  const handleChangePlan = () => {

    if (typeof formData.goToStep === 'function') {
      formData.goToStep(1);
    } else {
      console.log("Navigation function not available");
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-[#042657] text-2xl lg:text-4xl font-bold mb-2">
        Finishing up
      </h2>
      <p className="text-[#B8B9BE] mb-6">
        Double-check everything looks OK before confirming.
      </p>
      <div className="bg-[#f8f9fe] p-5 rounded-lg">
        <div className="flex justify-between items-center pb-3 border-b border-[#d6d9e6]">
          <div>
            <h3 className="text-[#042657] font-bold">
              {selectedPlanData?.name} ({isYearly ? "Yearly" : "Monthly"})
            </h3>
            <button
              className="text-[#B8B9BE] text-sm underline hover:text-[#473dff]"
              onClick={handleChangePlan}
            >
              Change
            </button>
          </div>
          <span className="text-[#042657] font-bold">
            ${planPrice}/{isYearly ? "yr" : "mo"}
          </span>
        </div>
        {selectedAddOns.length > 0 && (
          <div className="pt-3 space-y-3">
            {selectedAddOns.map((addon) => (
              <div key={addon.id} className="flex justify-between items-center">
                <p className="text-[#B8B9BE]">{addon.name}</p>
                <span className="text-[#042657] text-sm">
                  +${isYearly ? addon.yearlyPrice : addon.monthlyPrice}/
                  {isYearly ? "yr" : "mo"}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-between items-center p-5">
        <p className="text-[#B8B9BE]">
          Total (per {isYearly ? "year" : "month"})
        </p>
        <span className="text-[#473dff] font-bold text-lg">
          ${totalPrice}/{isYearly ? "yr" : "mo"}
        </span>
      </div>
    </div>
  );
};

export default SummaryForm;