import React from "react";

interface ButtonProps {
  variant: "contained" | "outlined";
  size: "sm" | "lg";
  children: React.ReactNode;
}

const Button = ({ variant, size, children }: ButtonProps) => {
  // Define classes based on the variant and size props
  const baseClasses = "p-3 rounded-lg";

  let variantClasses = "";
  if (variant === "contained") {
    variantClasses = "bg-accent text-white";
  } else if (variant === "outlined") {
    variantClasses = "border border-accent text-accent";
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
