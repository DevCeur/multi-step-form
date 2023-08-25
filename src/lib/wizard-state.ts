import { create } from "zustand";

type PersonalInfo = {
  name: string;
  email: string;
  phoneNumber: string;
};

type WizardState = {
  currentStep: number;

  formData: {
    personalInfo: PersonalInfo;

    selectedPlan: { name: "arcade" | "advanced" | "pro"; billing: "monthly" | "yearly" };
  };

  nextStep: () => void;

  prevStep: () => void;

  updatePersonalInfo: (data: PersonalInfo) => void;
};

export const useWizardState = create<WizardState>((set) => ({
  currentStep: 0,

  formData: {
    personalInfo: { name: "", email: "", phoneNumber: "" },

    selectedPlan: { name: "arcade", billing: "monthly" },
  },

  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),

  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),

  updatePersonalInfo: (data) =>
    set((state) => ({ formData: { ...state.formData, personalInfo: data } })),
}));
