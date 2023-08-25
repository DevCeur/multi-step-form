import { useForm, FormProvider } from "react-hook-form";

import { MULTI_FORM_STEPS } from "@/utils/enum";

import { useWizardState } from "@/lib/wizard-state";

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

  const { currentStep, nextStep, prevStep } = useWizardState((state) => ({
    currentStep: state.currentStep,
    nextStep: state.nextStep,
    prevStep: state.prevStep,
  }));

  const isFirstStep = currentStep == 0;
  const isLastStep = currentStep === MULTI_FORM_STEPS.length - 1;

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
        className="w-full h-full pt-28 px-4 flex flex-col justify-between"
      >
        <div className="px-6 py-8 bg-background-secondary rounded-xl shadow-default">
          {!isLastStep && (
            <div className="mb-6">
              <h2 className="text-denim text-2xl font-bold mb-2">{title}</h2>
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
              className="px-4 py-3 bg-denim text-white text-sm font-medium rounded-md"
            />
          </div>
        )}
      </form>
    </FormProvider>
  );
};
