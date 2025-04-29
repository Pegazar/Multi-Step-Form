const useFormValidator = (formData, setIsStepValid) => {
    const validatePersonalInfo = () => {
      const errors = {};
      if (!formData.name?.trim()) errors.name = "This field is required";
      if (!formData.email?.trim()) errors.email = "This field is required";
      if (!formData.phone?.trim()) errors.phone = "This field is required";
      
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
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