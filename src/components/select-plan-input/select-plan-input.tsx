import Image from "next/image";

import type { ChangeEvent } from "react";

import { useMultiStepForm } from "@/lib/multi-step-form-state";
import { TOTAL_YEARLY_MONTHS } from "@/utils/enum";

type SelectPlanInputProps = {
  iconUrl: string;
  identifier: string;
  name: string;
  price: number;
};

export const SelectPlanInput = ({
  name,
  price,
  identifier,
  iconUrl,
}: SelectPlanInputProps) => {
  const { updateSelectedPlan, selectedPlan } = useMultiStepForm((state) => ({
    selectedPlan: state.formData.selectedPlan,
    updateSelectedPlan: state.updateSelectedPlan,
  }));

  const handleSelectPlan = (e: ChangeEvent<HTMLInputElement>) => {
    updateSelectedPlan({
      name,
      price,
      identifier: e.target.value as any,
      billing: selectedPlan.billing,
    });
  };

  const formattedPrice =
    selectedPlan.billing === "monthly" ? price : price * TOTAL_YEARLY_MONTHS;

  const isPlanSelected = selectedPlan.identifier === identifier;

  return (
    <label
      htmlFor={identifier}
      className={`w-full p-4 lg:px-4 lg:py-5 flex lg:flex-col justify-start items-center lg:items-start border ${
        isPlanSelected ? "bg-grey-lightest border-purple" : "border-stroke-default"
      } hover:border-purple rounded-lg transition-colors duration-200 cursor-pointer`}
    >
      <div className="relative w-10 h-10 mr-4 lg:mr-0 lg:mb-10">
        <Image
          src={iconUrl}
          alt={identifier}
          layout="fill"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex flex-col">
        <span className="text-denim font-medium">{name}</span>
        <span className="text-sm text-grey-default">
          ${formattedPrice}/{selectedPlan.billing === "monthly" ? "mo" : "yr"}
        </span>
      </div>

      <input
        hidden
        id={identifier}
        type="radio"
        name="selectedPlan"
        onChange={handleSelectPlan}
        value={identifier}
      />
    </label>
  );
};
