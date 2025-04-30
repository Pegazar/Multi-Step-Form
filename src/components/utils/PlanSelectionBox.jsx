import React from "react";
import Arcade from "../../assets/icon-arcade.svg";
import Advanced from "../../assets/icon-advanced.svg";
import Pro from "../../assets/icon-pro.svg";

const PlanSelectionBox = ({
  isYearly,
  plans,
  selectedPlan,
  onSelectPlan,
}) => {
  const iconMap = {
    "../../assets/icon-arcade.svg": Arcade,
    "../../assets/icon-advanced.svg": Advanced,
    "../../assets/icon-pro.svg": Pro,
  };

  return (
    <div className="flex flex-col gap-3 w-full lg:grid lg:grid-cols-3 lg:gap-4">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`p-4 border rounded-lg cursor-pointer flex items-center gap-4 lg:gap-0 lg:flex-col lg:items-start
            ${
              selectedPlan === plan.id
                ? "border-[#605D9D] bg-[#F8F9FE]"
                : "border-[#bbbcc2] hover:border-[#605D9D]"
            }`}
          onClick={() => onSelectPlan(plan.id)}
        >
          <img
            className="mb-0 lg:mb-8 w-10 h-10"
            src={iconMap[plan.icon]}
            alt={plan.name}
          />
          <div className="flex-grow">
            <h3 className="text-[#042657] text-base font-medium">
              {plan.name}
            </h3>
            <span className="text-sm text-[#B8B9BE] block">
              {isYearly
                ? `$${plan.yearlyPrice}/yr`
                : `$${plan.monthlyPrice}/mo`}
            </span>
            {isYearly && (
              <p className="text-xs text-[#042657] mt-1">2 months free</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanSelectionBox;