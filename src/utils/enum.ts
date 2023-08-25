import { PersonalInfoStep } from "@/components/steps/personal-info-step";
import { SelectPlanStep } from "@/components/steps/select-plan-step";

export const WIZARD_STEPS = [
  {
    identifier: "personal-info",
    title: "Personal Info",
    description: "Just the personal info step description",
    component: PersonalInfoStep,
  },
  {
    identifier: "select-plan",
    title: "Select Plan",
    description: "Just the select plan step description",
    component: SelectPlanStep,
  },
];

export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
