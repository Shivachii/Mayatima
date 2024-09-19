import React from "react";

type FloatingLabelInputProps = {
  id: string;
  label: string;
  name: string;
  type?: string;
  className?: string;
  ariaLabel?: string;
};

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  id,
  label,
  name,
  type = "text ",
  className = "",
  ariaLabel,
}) => {
  return (
    <div className={`relative z-0 ${className}`}>
      <input
        type={type}
        id={id}
        name={name}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-maroon peer"
        placeholder=" "
        aria-label={ariaLabel || label}
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-maroon peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
