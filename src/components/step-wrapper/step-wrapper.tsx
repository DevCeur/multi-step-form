import { useForm, FormProvider } from "react-hook-form";

import { useWizardState } from "@/lib/wizard-state";

type StepWrapperProps = {
  children: React.ReactNode;
};

export const StepWrapper = ({ children }: StepWrapperProps) => {
  const formMethods = useForm();

  const { handleSubmit } = formMethods;

  const { nextStep, prevStep } = useWizardState((state) => ({
    nextStep: state.nextStep,
    prevStep: state.prevStep,
  }));

  const handleNextStep = handleSubmit((data) => {
    console.log(data);

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
        <form onSubmit={handleNextStep}>
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
