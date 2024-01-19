import React, { useId } from "react";

const Input = ({ label, type = "text", className = "", ...props }, ref) => {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`${className}
            p-2 mt-1 rounded-xl border outline-none`}
        ref={ref}
        id={id}
        {...props}
      />
    </div>
  );
};

export default React.forwardRef(Input);
