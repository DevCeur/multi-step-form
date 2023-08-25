import { useWizardState } from "@/lib/wizard-state";

import { MULTI_FORM_STEPS } from "@/utils/enum";

export const StepsIndicator = () => {
  const { currentStep } = useWizardState((state) => ({ currentStep: state.currentStep }));

  return (
    <div className="step-indicator absolute w-full h-44 pt-10 flex justify-center space-x-4">
      {MULTI_FORM_STEPS.slice(0, -1).map(({ identifier }, index) => {
        const isActiveStep = currentStep === index;
        const showLastActive =
          index === MULTI_FORM_STEPS.length - 2 &&
          currentStep === MULTI_FORM_STEPS.length - 1;

        return (
          <div key={identifier}>
            <span
              className={`${
                isActiveStep || showLastActive
                  ? "text-denim bg-blue-sky border-transparent"
                  : "text-white border-white"
              } flex justify-center items-center w-8 h-8 text-sm font-bold rounded-full border`}
            >
              {index + 1}
            </span>
          </div>
        );
      })}
    </div>
  );
};
