import React from "react";

const InputField = ({ label, name, type, placeholder, value, onChange, onBlur, error }) => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center">
                <label
                    className="text-[#2E3D55] font-medium text-[15px] mb-1"
                    htmlFor={name}
                >
                    {label}
                </label>
                {error && (
                    <span className="text-red-600 text-sm font-medium">
                        {error}
                    </span>
                )}
            </div>
            <input
                className={`input ${error ? "border-red-500" : ""}`}
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputField;
