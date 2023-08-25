import { useWizardState } from "@/lib/wizard-state";

import { MULTI_FORM_STEPS } from "@/utils/enum";

export const StepsIndicator = () => {
  const { currentStep } = useWizardState((state) => ({ currentStep: state.currentStep }));

  return (
    <div>
      {MULTI_FORM_STEPS.slice(0, -1).map(({ identifier }, index) => {
        const isActiveStep = currentStep === index;
        const showLastActive =
          index === MULTI_FORM_STEPS.length - 2 &&
          currentStep === MULTI_FORM_STEPS.length - 1;

        return (
          <div
            key={identifier}
            className={`${
              isActiveStep || showLastActive ? "text-green-500" : "text-gray-500"
            }`}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};
