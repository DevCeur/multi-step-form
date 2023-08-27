import { PLANS } from "@/utils/enum";

import { StepWrapper } from "@/components/step-wrapper";
import { SelectPlanInput } from "@/components/select-plan-input";
import { SelectPlanBillingInput } from "@/components/select-plan-billing-input";

export const SelectPlanStep = () => {
  return (
    <StepWrapper
      title="Select your plan"
      description="You have the option of monthly or yearly billing"
    >
      <div className="mb-6 lg:mb-8 flex flex-col lg:flex-row justify-center items-start space-y-3 lg:space-y-0 lg:space-x-4">
        {PLANS.map((plan) => (
          <SelectPlanInput key={plan.identifier} {...plan} />
        ))}
      </div>

      <div>
        <SelectPlanBillingInput />
      </div>
    </StepWrapper>
  );
};
