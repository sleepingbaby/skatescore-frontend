import React from "react";

type TextInputVariant = "md" | "lg";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: TextInputVariant;
}

const TEXT_INPUT_CLASSES: Record<TextInputVariant, string> = {
  md: "h-10 text-p",
  lg: "h-12 text-h4",
};

const TextInput = ({
  variant = "md",
  className,
  placeholder,
  ...props
}: TextInputProps) => {
  const variantClasses = TEXT_INPUT_CLASSES[variant];

  return (
    <input
      type="text"
      {...props}
      placeholder={placeholder ?? "placeholder..."}
      className={`bg-white px-3 py-2 min-w-[250px] w-fit font-normal rounded-lg border border-accent text-text ${variantClasses} ${className}`}
    />
  );
};

export default TextInput;
