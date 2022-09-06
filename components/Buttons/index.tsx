import React from "react";

type ButtonProps = {
  action: string;
  children: string;
  className: string;
};

const Button = ({ action, children, className }: ButtonProps) => {
  return (
    <button type="button" className={className} onClick={action}>
      {children}
    </button>
  );
};

export default Button;
