import React from "react";

const FormNavigation = ({
  stepIndex,
  isLastStep,
  onNext,
  onPrev,
  onSubmit,
}) => {
  return (
    <div className="flex justify-between items-center relative lg:absolute bottom-0 left-0 right-0 lg:left-22 lg:right-22">
      {stepIndex > 0 ? (
        <div>
          <button
            className="text-[#8D8E93] hover:text-[#042657] duration-200 cursor-pointer font-medium"
            onClick={onPrev}
          >
            Go Back
          </button>
        </div>
      ) : (
        <div className="w-[90px]" />
      )}

      {!isLastStep ? (
        <button
          type="button"
          className="bg-[#03295A] text-white px-6 py-3 rounded-md cursor-pointer hover:bg-[#174a8b] transition-colors"
          onClick={onNext}
        >
          Next Step
        </button>
      ) : (
        <button
            type="button"
            onClick={onSubmit}
            className="bg-[#483FFC] text-white px-6 py-3 w-[120px] rounded-md cursor-pointer hover:opacity-80 transition-colors"
          >
            Confirm
          </button>
      )}
    </div>
  );
};

export default FormNavigation;
