import React, { ReactNode } from "react";

type TextAreaProps = {
  name: string;
  id: string;
  label: string;
  placeholder?: string;
  ariaLabel?: string;
  className?: string;
  rows?: number; // Optional: Define the number of rows for the textarea
};

const TextArea: React.FC<TextAreaProps> = ({
  name,
  id,
  label,
  placeholder = "",
  ariaLabel = "",
  className = "",
  rows = 4, // Default number of rows
}) => {
  return (
    <div className={`relative z-0 ${className}`}>
      <textarea
        name={name}
        id={id}
        rows={rows}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-maroon peer"
        placeholder={placeholder}
        aria-label={ariaLabel}
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

export default TextArea;
