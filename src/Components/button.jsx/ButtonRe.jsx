import React from "react";

const ButtonRe = ({ children, className, onClick }) => {
  console.log("ClassName", className);

  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default ButtonRe;
