import React from "react";

const BillingToggle = ({ handleToggle, isYearly }) => {
  return (
    <div className="bg-[#F8F9FE] rounded-lg py-3 flex items-center justify-center mt-8">
      <span
        className={`mr-6 font-medium ${
          !isYearly ? "text-[#042657]" : "text-[#B8B9BE]"
        }`}
      >
        Monthly
      </span>
      <div
        className="relative inline-block w-12 h-6 rounded-full bg-[#042657] cursor-pointer"
        onClick={handleToggle}
      >
        <div
          className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-all duration-300 ${
            isYearly ? "left-7" : "left-1"
          }`}
        ></div>
      </div>
      <span
        className={`ml-6 font-medium ${
          isYearly ? "text-[#042657]" : "text-[#B8B9BE]"
        }`}
      >
        Yearly
      </span>
    </div>
  );
};

export default BillingToggle;