import React from "react";

const SidebarNavigation = ({ steps, stepIndex }) => {
  return (
    <div className="bg-image">
      <ul className="flex flex-row mt-5 lg:mt-0 lg:flex-col justify-center lg:justify-start gap-4 lg:gap-6 lg:p-8">
        {steps.map((step, index) => (
          <li
            key={step.id}
            className={`flex lg:flex-row items-center gap-4 cursor-pointer`}
          >
            <span className={`w-8 h-8 rounded-full flex items-center justify-center border font-semibold border-white ${index === stepIndex
                ? "bg-[#BEE2FD] text-[#0B2C56]"
                : "text-white"
              }`}>{index + 1}</span>
            <div className="flex items-start flex-col">
              <span className="text-blue-200 text-xs">{`STEP ${step.id}`}</span>
              <span className="text-white font-medium tracking-wider">
                {step.title}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarNavigation;