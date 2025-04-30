import React, { useEffect } from "react";
import addOnData from "../data/addondata";

const AddOnsForm = ({ formData, updateForm, setIsStepValid }) => {
  const addOns = formData.addOns || {};
  const isYearly = formData.planSelection?.isYearly || false;

  useEffect(() => {
    if (!formData.addOns) {
      updateForm({
        addOns: {
          onlineService: false,
          largerStorage: false,
          customizableProfile: false,
        },
      });
    }

    setIsStepValid(true);
  }, [formData, updateForm, setIsStepValid]);

  const handleChange = (id) => {
    updateForm({
      addOns: {
        ...addOns,
        [id]: !addOns[id],
      },
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-[#042657] text-2xl lg:text-4xl font-bold mb-2">
        Pick add-ons
      </h2>
      <p className="text-[#B8B9BE] mb-6">
        Add-ons help enhance your gaming experience.
      </p>
      {addOnData.map((addon) => (
        <div
          key={addon.id}
          className={`flex items-center justify-between px-5 py-4 border ${
            addOns[addon.id]
              ? "border-[#473dff] bg-[#f8f9fe]"
              : "border-[#d6d9e6]"
          } rounded-lg mb-4 cursor-pointer`}
          onClick={() => handleChange(addon.id)}
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={addOns[addon.id] || false}
              onChange={() => handleChange(addon.id)}
              className="mr-4 h-4 w-4 accent-[#473dff]"
            />
            <div>
              <h3 className="text-[#042657] font-medium">{addon.name}</h3>
              <p className="text-[#B8B9BE] text-sm">{addon.description}</p>
            </div>
          </div>
          <span className="text-[#473dff] text-sm font-normal">
            +${isYearly ? addon.yearlyPrice : addon.monthlyPrice}/
            {isYearly ? "yr" : "mo"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default AddOnsForm;
