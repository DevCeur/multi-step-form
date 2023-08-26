import { PLANS } from "@/utils/enum";

import { StepWrapper } from "@/components/step-wrapper";
import { SelectPlanInput } from "@/components/select-plan-input";

export const SelectPlanStep = () => {
  const handleSelectPlan = () => {};

  return (
    <StepWrapper
      title="Select your plan"
      description="You have the option of monthly or yearly billing"
    >
      <div>
        {PLANS.map((plan) => (
          <SelectPlanInput key={plan.identifier} {...plan} />
        ))}
      </div>
    </StepWrapper>
  );
};
