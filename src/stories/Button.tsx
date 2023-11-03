import React from "react";

interface ButtonProps {
  variant: "contained" | "outlined";
  size: "sm" | "lg";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, size, children }) => {
  // Define classes based on the variant and size props
  const baseClasses = "py-2 px-4 rounded";

  let variantClasses = "";
  if (variant === "contained") {
    variantClasses = "bg-primary text-white";
  } else if (variant === "outlined") {
    variantClasses = "border border-primary text-primary";
  }

  let sizeClasses = "";
  if (size === "sm") {
    sizeClasses = "text-sm";
  } else if (size === "lg") {
    sizeClasses = "text-lg";
  }

  const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses}`;

  return <button className={combinedClasses}>{children}</button>;
};

export default Button;
