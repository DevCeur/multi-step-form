"use client";

import { WIZARD_STEPS } from "@/utils/enum";

import { StepWrapper } from "../step-wrapper";
import { useWizardState } from "@/lib/wizard-state";

export const Wizard = () => {
  const currentStep = useWizardState((state) => state.currentStep);

  return (
    <div>
      <div>Steps Indicator</div>

      <div>
        {WIZARD_STEPS.map(({ identifier, component: Component, ...rest }, index) => {
          return (
            currentStep === index && (
              <StepWrapper key={identifier} {...rest}>
                <Component />
              </StepWrapper>
            )
          );
        })}
      </div>
    </div>
  );
};
