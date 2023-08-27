import type { PersonalInfo, Plan, AddOn } from "@/utils/types";

import { FORM_STEPS, PLANS } from "@/utils/enum";

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

  gotToStep: (stepIdentifier: string) => void;

  updatePersonalInfo: (data: PersonalInfo) => void;

  updateSelectedPlan: (data: Plan) => void;

  updateSelectedPlanBilling: (billing: "monthly" | "yearly") => void;

  updateAddOns: (data: { removeAddOn?: string; newAddOn?: AddOn }) => void;
};

export const useMultiStepForm = create<MultiStepFormState>((set) => ({
  currentStep: 0,

  formData: {
    personalInfo: { name: "", email: "", phoneNumber: "" },

    selectedPlan: { name: "Arcade", identifier: "arcade", billing: "monthly", price: 9 },

    addOns: [],
  },

  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),

  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),

  gotToStep: (stepIdentifier) =>
    set(() => ({
      currentStep: FORM_STEPS.findIndex((steps) => steps.identifier === stepIdentifier),
    })),

  updatePersonalInfo: (data) =>
    set((state) => ({ formData: { ...state.formData, personalInfo: data } })),

  updateSelectedPlan: (data) =>
    set((state) => ({ formData: { ...state.formData, selectedPlan: data } })),

  updateSelectedPlanBilling: (billing) =>
    set((state) => ({
      formData: {
        ...state.formData,
        selectedPlan: { ...state.formData.selectedPlan, billing },
      },
    })),

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
