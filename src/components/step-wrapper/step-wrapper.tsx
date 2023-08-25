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
    <div>
      {!isLastStep && (
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      )}

      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit}>
          <div>{children}</div>

          {!isLastStep && (
            <div>
              {!isFirstStep && <button onClick={handlePrevStep}>Go Back</button>}

              <input type="submit" value="Next Step" />
            </div>
          )}
        </form>
      </FormProvider>
    </div>
  );
};
