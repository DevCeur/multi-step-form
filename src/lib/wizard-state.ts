import type { PersonalInfo, Plan, AddOn } from "@/utils/types";

import { create } from "zustand";

type WizardState = {
  currentStep: number;

  formData: {
    personalInfo: PersonalInfo;

    selectedPlan: Plan;

    addOns: AddOn[];
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

    addOns: [],
  },

  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),

  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),

  updatePersonalInfo: (data) =>
    set((state) => ({ formData: { ...state.formData, personalInfo: data } })),
}));
