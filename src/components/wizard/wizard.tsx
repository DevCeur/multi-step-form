"use client";

import { WIZARD_STEPS } from "@/utils/enum";

import { useWizardState } from "@/lib/wizard-state";

export const Wizard = () => {
  const currentStep = useWizardState((state) => state.currentStep);

  return (
    <div>
      <div>Steps Indicator</div>

      <div>
        {WIZARD_STEPS.map(({ identifier, component: Component }, index) => {
          return currentStep === index && <Component key={identifier} />;
        })}
      </div>
    </div>
  );
};
