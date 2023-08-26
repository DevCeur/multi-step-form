import { ChangeEvent, useState } from "react";

import { PLANS } from "@/utils/enum";

import { StepWrapper } from "@/components/step-wrapper";
import { SelectPlanInput } from "@/components/select-plan-input";
import { useMultiStepForm } from "@/lib/multi-step-form-state";

export const SelectPlanStep = () => {
  const { updateSelectedPlan, selectedPlan } = useMultiStepForm((state) => ({
    selectedPlan: state.formData.selectedPlan,
    updateSelectedPlan: state.updateSelectedPlan,
  }));

  const handleSelectPlan = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    updateSelectedPlan({
      identifier: e.target.value as any,
      billing: selectedPlan.billing,
    });
  };

  const handleSelectPlanBilling = () => {};

  return (
    <StepWrapper
      title="Select your plan"
      description="You have the option of monthly or yearly billing"
    >
      <div className="flex flex-col justify-center items-start space-y-3">
        {PLANS.map((plan) => (
          <SelectPlanInput key={plan.identifier} onChange={handleSelectPlan} {...plan} />
        ))}
      </div>
    </StepWrapper>
  );
};
