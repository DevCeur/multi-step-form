import type { InputHTMLAttributes } from "react";

import { useFormContext } from "react-hook-form";

import { useMultiStepForm } from "@/lib/multi-step-form-state";

type SelectPlanInputProps = {
  iconUrl: string;
  identifier: string;
  name: string;
  price: number;
} & InputHTMLAttributes<HTMLInputElement>;

export const SelectPlanInput = ({
  name,
  price,
  identifier,
  iconUrl,
  ...inputProps
}: SelectPlanInputProps) => {
  const { register } = useFormContext();

  const { selectedPlan } = useMultiStepForm((state) => ({
    selectedPlan: state.formData.selectedPlan,
  }));

  const formattedPrice = selectedPlan.billing === "monthly" ? price : price * 10;

  return (
    <label htmlFor={identifier}>
      <div
        className={`border ${
          selectedPlan.identifier === identifier
            ? "border-r-emerald-500"
            : "border-green-50"
        }`}
      >
        <span>{name}</span>
        <span>{formattedPrice}</span>
      </div>

      <input
        {...register("selectedPlan")}
        id={identifier}
        type="radio"
        value={identifier}
        {...inputProps}
      />
    </label>
  );
};
