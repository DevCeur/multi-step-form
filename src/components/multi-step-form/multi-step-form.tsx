"use client";

import { FORM_STEPS } from "@/utils/enum";

import { useMultiStepForm } from "@/lib/multi-step-form-state";

import { StepsIndicator } from "../steps-indicator";

export const MultiStepForm = () => {
  const currentStep = useMultiStepForm((state) => state.currentStep);

  return (
    <div className="w-full flex max-w-[940px] lg:h-[600px] lg:p-4 lg:bg-background-secondary rounded-xl overflow-hidden lg:shadow-default">
      <StepsIndicator />

      <div className="w-auto mx-auto absolute lg:relative h-screen lg:h-auto">
        {FORM_STEPS.map(({ identifier, component: Component }, index) => {
          return currentStep === index && <Component key={identifier} />;
        })}
      </div>
    </div>
  );
};
