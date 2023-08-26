import type { InputHTMLAttributes } from "react";

import { useMultiStepForm } from "@/lib/multi-step-form-state";
import Image from "next/image";

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
  const { selectedPlan } = useMultiStepForm((state) => ({
    selectedPlan: state.formData.selectedPlan,
  }));

  const formattedPrice = selectedPlan.billing === "monthly" ? price : price * 10;

  const isPlanSelected = selectedPlan.identifier === identifier;

  return (
    <label
      htmlFor={identifier}
      className={`w-full p-4 flex justify-start items-center border ${
        isPlanSelected ? "bg-grey-lightest border-purple" : "border-stroke-default"
      } hover:border-purple rounded-lg transition-colors duration-200 cursor-pointer`}
    >
      <div className="relative w-10 h-10 mr-4">
        <Image src={iconUrl} alt={identifier} layout="fill" style={{ objectFit: "contain" }} />
      </div>

      <div className="flex flex-col">
        <span className="text-denim font-medium">{name}</span>
        <span className="text-sm text-grey-default">${formattedPrice}/mo</span>
      </div>

      <input
        hidden
        id={identifier}
        type="radio"
        name="selectedPlan"
        value={identifier}
        {...inputProps}
      />
    </label>
  );
};
