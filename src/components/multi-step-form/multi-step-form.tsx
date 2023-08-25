"use client";

import { MULTI_FORM_STEPS } from "@/utils/enum";

import { useWizardState } from "@/lib/wizard-state";
import { StepsIndicator } from "../steps-indicator";

export const MultiStepForm = () => {
  const currentStep = useWizardState((state) => state.currentStep);

  return (
    <div>
      <StepsIndicator />

      <div>
        {MULTI_FORM_STEPS.map(({ identifier, component: Component }, index) => {
          return currentStep === index && <Component key={identifier} />;
        })}
      </div>
    </div>
  );
};