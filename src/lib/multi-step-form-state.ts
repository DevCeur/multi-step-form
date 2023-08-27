import type { PersonalInfo, Plan, AddOn } from "@/utils/types";

import { create } from "zustand";

type MultiStepFormState = {
  currentStep: number;

  formData: {
    personalInfo: PersonalInfo;

    selectedPlan: Plan;

    addOns: AddOn[];
  };

  nextStep: () => void;

  prevStep: () => void;

  updatePersonalInfo: (data: PersonalInfo) => void;

  updateSelectedPlan: (data: Plan) => void;

  updateAddOns: (data: { removeAddOn?: string; newAddOn?: AddOn }) => void;
};

export const useMultiStepForm = create<MultiStepFormState>((set) => ({
  currentStep: 2,

  formData: {
    personalInfo: { name: "", email: "", phoneNumber: "" },

    selectedPlan: { identifier: "arcade", billing: "monthly" },

    addOns: [],
  },

  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),

  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),

  updatePersonalInfo: (data) =>
    set((state) => ({ formData: { ...state.formData, personalInfo: data } })),

  updateSelectedPlan: (data) =>
    set((state) => ({ formData: { ...state.formData, selectedPlan: data } })),

  updateAddOns: ({ newAddOn, removeAddOn }) =>
    set((state) => {
      let addOns = state.formData.addOns;

      if (newAddOn) {
        addOns.push(newAddOn);
      }

      if (removeAddOn) {
        addOns = addOns.filter((addOn) => addOn.identifier !== removeAddOn);
      }

      return { formData: { ...state.formData, addOns } };
    }),
}));
