"use client";

import { MULTI_FORM_STEPS } from "@/utils/enum";

import { useWizardState } from "@/lib/wizard-state";
import { StepsIndicator } from "../steps-indicator";

export const MultiStepForm = () => {
  const currentStep = useWizardState((state) => state.currentStep);

  return (
    <div className="relative">
      <StepsIndicator />

      <div className="absolute w-full h-screen">
        {MULTI_FORM_STEPS.map(({ identifier, component: Component }, index) => {
          return currentStep === index && <Component key={identifier} />;
        })}
      </div>
    </div>
  );
};
