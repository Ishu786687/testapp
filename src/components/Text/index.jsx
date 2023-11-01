import React from "react";

const sizeClasses = {
  txtPoppinsBold24YellowA200: "font-bold font-poppins",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsBold24: "font-bold font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
