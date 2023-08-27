import type { InputHTMLAttributes } from "react";
import type { RegisterOptions } from "react-hook-form";

import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type TextInputProps = {
  label: React.ReactNode;
  validations?: RegisterOptions;
  defaultValue: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextInput = ({
  label,
  name,
  defaultValue,
  validations,
  ...inputProps
}: TextInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label className="flex flex-col">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs lg:text-sm text-denim">{label}</span>

        <ErrorMessage
          name={name as string}
          errors={errors}
          render={({ message }) => (
            <span className="text-xs lg:text-sm font-medium text-red">{message}</span>
          )}
        />
      </div>

      <input
        className={`font-medium text-denim placeholder:text-grey-default text-sm lg:text-base px-4 py-3 border ${
          errors[name as string] ? "border-red" : "border-stroke-default"
        } rounded-md outline-none transition-colors duration-200`}
        {...register(name as string, { ...validations, value: defaultValue })}
        {...inputProps}
      />
    </label>
  );
};
