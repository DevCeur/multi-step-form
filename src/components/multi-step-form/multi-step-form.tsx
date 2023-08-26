"use client";

import { MULTI_FORM_STEPS } from "@/utils/enum";

import { useWizardState } from "@/lib/wizard-state";
import { StepsIndicator } from "../steps-indicator";

export const MultiStepForm = () => {
  const currentStep = useWizardState((state) => state.currentStep);

  return (
    <div className="flex w-full max-w-5xl lg:h-[600px] lg:p-4 lg:bg-background-secondary rounded-xl overflow-hidden lg:shadow-default">
      <StepsIndicator />

      <div className="mx-auto absolute lg:relative h-screen lg:h-auto">
        {MULTI_FORM_STEPS.map(({ identifier, component: Component }, index) => {
          return currentStep === index && <Component key={identifier} />;
        })}
      </div>
    </div>
  );
};
