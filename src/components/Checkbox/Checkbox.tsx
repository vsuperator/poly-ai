import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  checked: boolean;
  disabled?: boolean;
  label: string;
  labelClassName?: string;
  indeterminate?: boolean;
  type?: "checkbox" | "radio";
  checkboxClassName?: string;
  containerClassName?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked,
  onChange,
  disabled,
  label,
  containerClassName,
  checkboxClassName,
  labelClassName,
  type = "checkbox",
  ...rest
}) => {
  return (
    <label htmlFor={id} className="flex items-center opacity-50 cursor">
      <input
        id={id}
        type={type}
        aria-label={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={"form-checkbox h-4 w-4 text-blue-500"}
        {...rest}
      />
      <span className="ml-2 font-medium dark:text-white">{label}</span>
    </label>
  );
};
