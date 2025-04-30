import React, { useState, useEffect } from "react";
import InputField from "../utils/InputField";
import useFormValidator from "../utils/useFormValidator";

const PersonalInfoForm = ({
  formData,
  updateForm,
  setIsStepValid,
  formTouched,
}) => {
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const { personalInfo } = formData;
  const validator = useFormValidator(formData, setIsStepValid);

  useEffect(() => {
    const validationErrors = validator.validatePersonalInfo();
    setErrors(validationErrors);
  }, [formData]);

  useEffect(() => {
    if (formTouched) {
      setTouched({
        name: true,
        email: true,
        phone: true,
      });
    }
  }, [formTouched]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateForm({
      personalInfo: {
        ...personalInfo,
        [name]: value,
      },
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-[#042657] text-2xl lg:text-4xl font-bold mb-2">
        Personal info
      </h2>
      <p className="text-[#B8B9BE] mb-8">
        Please provide your name, email address, and phone number.
      </p>
      <form className="flex flex-col gap-5">
        <InputField
          label="Name"
          name="name"
          type="text"
          placeholder="e.g. Stephen King"
          value={personalInfo.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.name || formTouched) && errors.name}
        />
        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          value={personalInfo.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.email || formTouched) && errors.email}
        />
        <InputField
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="e.g. +1 234 567 890"
          value={personalInfo.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.phone || formTouched) && errors.phone}
        />
      </form>
    </div>
  );
};

export default PersonalInfoForm;
