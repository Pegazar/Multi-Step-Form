import React from "react";

const PersonalInfoForm = ({ formData, updateForm }) => {
  const handleChange = (e) => {
    updateForm({ [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Kişisel Bilgiler</h2>

      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Adınız"
        className="block w-full border rounded p-2 mb-4"
      />

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="E-posta"
        className="block w-full border rounded p-2"
      />
    </div>
  );
};

export default PersonalInfoForm;
