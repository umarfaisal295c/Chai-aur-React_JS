import React, { useId } from "react";

const Login = React.forwardRef(function input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        className={`${classname} 
                 px-3 py-2 rounded-lg
             bg-white text-black outline-none
             focus:bg-gray-50 duration-200
             border-gray-200 w-full
            `}
        ref={ref}
        id={id}
        {...props}
      />
    </div>
  );
});

export default Login;
