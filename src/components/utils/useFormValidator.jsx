const useFormValidator = (formData, setIsStepValid) => {
    const validatePersonalInfo = () => {
      const errors = {};
      if (!formData.personalInfo.name?.trim()) errors.name = "This field is required";
      if (!formData.personalInfo.email?.trim()) errors.email = "This field is required";
      if (!formData.personalInfo.phone?.trim()) errors.phone = "This field is required";
      
      if (formData.personalInfo.email && !/\S+@\S+\.\S+/.test(formData.personalInfo.email)) {
        errors.email = "Email address is invalid";
      }
            
      setIsStepValid(Object.keys(errors).length === 0);
      
      return errors;
    };
  
    return {
      validatePersonalInfo
    };
  };
  
  export default useFormValidator;