import type { InputHTMLAttributes } from "react";

import { useFormContext } from "react-hook-form";

type TextInputProps = {
  label: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextInput = ({ label, name, ...inputProps }: TextInputProps) => {
  const { register } = useFormContext();

  return (
    <label>
      <span>{label}</span>

      <input {...register(name as string)} {...inputProps} />
    </label>
  );
};
