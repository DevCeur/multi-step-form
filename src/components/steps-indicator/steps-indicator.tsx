import { useMultiStepForm } from "@/lib/multi-step-form-state";

import { FORM_STEPS } from "@/utils/enum";

export const StepsIndicator = () => {
  const { currentStep } = useMultiStepForm((state) => ({
    currentStep: state.currentStep,
  }));

  return (
    <div className="step-indicator absolute lg:relative w-full lg:w-[274px] h-44 lg:h-full pt-10 lg:px-8 flex lg:flex-col justify-center lg:justify-start items-start space-x-4 lg:space-x-0 lg:space-y-8 lg:rounded-xl">
      {FORM_STEPS.slice(0, -1).map(({ identifier, shortTitle }, index) => {
        const isActiveStep = currentStep === index;
        const showLastActive =
          index === FORM_STEPS.length - 2 && currentStep === FORM_STEPS.length - 1;

        return (
          <div key={identifier} className="flex justify-center items-center space-x-4">
            <span
              className={`${
                isActiveStep || showLastActive
                  ? "text-denim bg-blue-sky border-transparent"
                  : "text-white border-white"
              } flex justify-center items-center w-8 h-8 text-sm font-bold rounded-full border`}
            >
              {index + 1}
            </span>

            <div className="hidden lg:flex flex-col space-y-1">
              <span className="text-xs text-blue-light uppercase">Step {index + 1}</span>
              <span className="text-sm text-white font-bold uppercase">{shortTitle}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
