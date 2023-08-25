import { create } from "zustand";

type WizardState = {
  currentStep: number;

  formData: {
    personalInfo: { name: string; email: string; phoneNumber: string };

    selectedPlan: { name: "arcade" | "advanced" | "pro"; billing: "monthly" | "yearly" };
  };

  nextStep: () => void;
  prevStep: () => void;
};

export const useWizardState = create<WizardState>((set) => ({
  currentStep: 0,

  formData: {
    personalInfo: { name: "", email: "", phoneNumber: "" },

    selectedPlan: { name: "arcade", billing: "monthly" },
  },

  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),

  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
}));
