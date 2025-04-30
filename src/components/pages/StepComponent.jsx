import React, { memo } from "react";

const StepComponent = memo(
  ({ Component, formData, updateForm, setIsStepValid, formTouched }) => {
    return (
      <Component
        formData={formData}
        updateForm={updateForm}
        setIsStepValid={setIsStepValid}
        formTouched={formTouched}
      />
    );
  }
);

export default StepComponent;
