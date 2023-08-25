import { useForm, FormProvider } from "react-hook-form";

import { useWizardState } from "@/lib/wizard-state";

type StepWrapperProps = {
  onNextStep?: (data: any) => void;

  children: React.ReactNode;
};

export const StepWrapper = ({
  children,
  onNextStep: handleNextStep,
}: StepWrapperProps) => {
  const formMethods = useForm();

  const { handleSubmit: onSubmit } = formMethods;

  const { nextStep, prevStep } = useWizardState((state) => ({
    nextStep: state.nextStep,
    prevStep: state.prevStep,
  }));

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
      <div>
        <h2>Step Title</h2>
        <p>Step Description</p>
      </div>

      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit}>
          <div>{children}</div>

          <div>
            <button onClick={handlePrevStep}>Go Back</button>

            <input type="submit" value="Next Step" />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
