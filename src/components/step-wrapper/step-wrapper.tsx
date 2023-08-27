import { useForm, FormProvider } from "react-hook-form";

import { FORM_STEPS } from "@/utils/enum";

import { useMultiStepForm } from "@/lib/multi-step-form-state";

type StepWrapperProps = {
  title?: string;
  description?: string;

  onNextStep?: (data: any) => void;

  children: React.ReactNode;
};

export const StepWrapper = ({
  title,
  description,
  children,
  onNextStep: handleNextStep,
}: StepWrapperProps) => {
  const formMethods = useForm();

  const { handleSubmit: onSubmit } = formMethods;

  const { currentStep, nextStep, prevStep } = useMultiStepForm((state) => ({
    currentStep: state.currentStep,
    nextStep: state.nextStep,
    prevStep: state.prevStep,
  }));

  const isFirstStep = currentStep == 0;
  const isLastStep = currentStep === FORM_STEPS.length - 1;

  const handleSubmit = onSubmit((data) => {
    if (handleNextStep) {
      handleNextStep(data);
    }

    nextStep();
  });

  const handlePrevStep = () => {
    prevStep();
  };

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={handleSubmit}
        className="w-full h-screen lg:w-[450px] lg:h-full pt-28 lg:pt-0 px-4 lg:px-0 mx-auto flex flex-col justify-between"
      >
        <div className="mb-6 px-6 py-8 lg:pt-14 lg:px-0 lg:pb-0 bg-background-secondary rounded-xl shadow-default lg:shadow-none">
          {!isLastStep && (
            <div className="mb-6">
              <h2 className="text-denim text-2xl lg:text-4xl font-bold mb-2">{title}</h2>
              <p className="text-grey-default">{description}</p>
            </div>
          )}

          <div>{children}</div>
        </div>

        {!isLastStep && (
          <div
            className={`-mx-4 p-4 bg-white flex ${
              isFirstStep ? "justify-end" : "justify-between"
            }`}
          >
            {!isFirstStep && (
              <button
                onClick={handlePrevStep}
                className="text-grey-default text-sm font-medium"
              >
                Go Back
              </button>
            )}

            <input
              type="submit"
              value="Next Step"
              className="px-4 lg:px-6 py-3 lg:py-4 bg-denim text-white text-sm lg:text-base font-medium rounded-md cursor-pointer"
            />
          </div>
        )}
      </form>
    </FormProvider>
  );
};
