import type { InputHTMLAttributes } from "react";
import type { RegisterOptions } from "react-hook-form";

import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type TextInputProps = {
  label: React.ReactNode;
  validations?: RegisterOptions;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextInput = ({
  label,
  name,
  validations,
  ...inputProps
}: TextInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label>
      <span>{label}</span>

      <input {...register(name as string, validations)} {...inputProps} />

      <ErrorMessage
        name={name as string}
        errors={errors}
        render={({ message }) => <span>{message}</span>}
      />
    </label>
  );
};
