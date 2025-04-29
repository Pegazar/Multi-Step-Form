import React from "react";

const SidebarNavigation = ({ steps, activeIndex, onStepChange }) => {
  return (
    <div className="bg-image">
      <ul className="flex flex-row mt-5 lg:mt-0 lg:flex-col justify-center lg:justify-start gap-4 lg:gap-6 lg:p-8">
        {steps.map((step, index) => (
          <li
            key={step.id}
            onClick={() => onStepChange(index)}
            className={`flex lg:flex-row items-center gap-4 cursor-pointer
              ${
                index === activeIndex
                  ? "bg-[#BEE2FD] text-[#0B2C56]"
                  : "text-[#0B2C56]"
              }`}
          >
            <span className="font-bold">{index + 1}.</span>
            <div className="flex items-center gap-2 flex-col">
              <span className="text-blue-200 text-xs">{`Step ${step.id}`}</span>
              <span content="text-white font-medium tracking-wider">
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
