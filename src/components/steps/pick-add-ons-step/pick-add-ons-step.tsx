import { ADD_ONS } from "@/utils/enum";

import { AddOnCheckboxInput } from "@/components/add-on-checkbox-input";
import { StepWrapper } from "@/components/step-wrapper";

export const PickAddOnsStep = () => {
  return (
    <StepWrapper title="Pick add-ons" description="Add-ons help enhance your gaming experience.">
      <div className="flex flex-col justify-start items-start space-y-4">
        {ADD_ONS.map((addOn) => (
          <AddOnCheckboxInput key={addOn.identifier} addOn={addOn} />
        ))}
      </div>
    </StepWrapper>
  );
};
