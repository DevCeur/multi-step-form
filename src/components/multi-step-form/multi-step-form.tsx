"use client";

import { MULTI_FORM_STEPS } from "@/utils/enum";

import { useWizardState } from "@/lib/wizard-state";

export const MultiStepForm = () => {
  const currentStep = useWizardState((state) => state.currentStep);

  return (
    <div>
      <div>Steps Indicator</div>

      <div>
        {MULTI_FORM_STEPS.map(({ identifier, component: Component }, index) => {
          return currentStep === index && <Component key={identifier} />;
        })}
      </div>
    </div>
  );
};
